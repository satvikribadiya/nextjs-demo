import MLMDbconnect from "../../../../helper/MLMDbconnect";
import package1 from '../../../../models/MLMsystem/package'
import { withSessionRouteMLM } from "@/helper/session";
import { alphabet, alphabetwithspace, currenttime, number, response } from '../../../../helper/fns'
import multer from "multer";
import nextConnect from "next-connect";
import fs from "fs"
let _ = require("lodash");
let mimeTypes = ["image/png", "image/jpg", "image/jpeg"];


let imagepath = process.env.IMAGEPATH
const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.post(async (req, res) => {
    var resData = [false, [], 'Session expired! Please try again.'];
    // req : name,ticker,usdPrice, logo, status
    // update time data : id
    let ftype = ''
    try {
        var fileName = [];
        const upload = multer({
            storage: multer.diskStorage({
                destination: imagepath,
                filename: (req, file, cb) => {

                    fileName.push(file.originalname.replace(/\s/g, ''));
                    cb(null, file.originalname.replace(/\s/g, ''));
                }
            }),
            fileFilter: function (req, file, callback) {
                ftype = file.mimetype
                if (!_.includes(mimeTypes, file.mimetype)) {
                    res.status(resData[0] ? 200 : 400).json(response(resData[0], resData[1] = [], resData[2] = "Only jpg,png,jpeg files are allowed"));
                    return callback(new Error("Only jpg,png,jpeg files are allowed"));
                }

                callback(null, true);
            },
        }).array('theFiles', 200);

        upload(req, res, async function (err) {
            var resData = [false, [], 'Session expired! Please try again.'];

            let data = req.body;
            try {

                if (data.name !== "") {
                    if (data.name.length >= 3) {
                        if (alphabetwithspace(data.name)) {
                            if (data.image !== "") {
                                if (data.description !== "") {
                                    if (data.description.length > 2) {
                                        if (data.price != 0) {
                                            if (number(data.price)) {
                                                if (data.status !== "") {
                                                    try {
                                                        if (data.id !== "") {
                                                            let packagename = await package1.find({ name: data.name, _id: { $ne: data.id } }).count()
                                                            if (packagename == 0) {
                                                               
                                                                    try {
                                                                        let imagename = ""
                                                                        if (fileName.length > 0) {

                                                                            imagename = data.name.replace(/\s/g, '') + "-" + Math.floor(100000 + Math.random() * 900000) + "." + fileName[0].split(/\.(?=[^\.]+$)/)[1]

                                                                            fs.rename(imagepath + fileName[0], imagepath + imagename, function (err) {
                                                                                if (err) console.log(err)
                                                                            })
                                                                        }
                                                                        let existcoin = await package1.findOne({ _id: data.id }).lean()
                                                                        let adddata = {
                                                                            name: data.name,
                                                                            image: imagename !== "" ? imagename : data.image,
                                                                            description: data.description,
                                                                            price: Number(data.price),
                                                                            status: Number(data.status),
                                                                            createdOn: existcoin.createdOn,
                                                                            updatedOn: currenttime(),
                                                                        }
                                                                        await MLMDbconnect()
                                                                        console.log("adddata", adddata)
                                                                        await package1.updateOne({ _id: data.id }, { $set: adddata })

                                                                        resData[0] = true
                                                                        resData[2] = 'Package Update successfully'

                                                                    } catch (error) {
                                                                        console.log("error", error)
                                                                    }
                                                                
                                                            } else {
                                                                resData[2] = "Package name already exist"
                                                                removeFile(imagepath, fileName[0])
                                                            }

                                                        } else {
                                                            let packagename = await package1.find({ name: data.name }).count()
                                                            if (packagename == 0) {

                                                                let imagename = ""
                                                                if (fileName.length > 0) {

                                                                    imagename = data.name.replace(/\s/g, '') + "-" + Math.floor(100000 + Math.random() * 900000) + "." + fileName[0].split(/\.(?=[^\.]+$)/)[1]

                                                                    fs.rename(imagepath + fileName[0], imagepath + imagename, function (err) {
                                                                        if (err) console.log(err)
                                                                    })
                                                                }
                                                                let adddata = {
                                                                    ...data,
                                                                    price: Number(data.price),
                                                                    image: imagename,
                                                                    status: Number(data.status),
                                                                    createdOn: currenttime(),
                                                                }
                                                                await MLMDbconnect()

                                                                await package1.create(adddata)

                                                                resData[0] = true
                                                                resData[2] = 'Package add successfully'

                                                            } else {
                                                                resData[2] = "Package name already exist"
                                                                removeFile(imagepath, fileName[0])
                                                            }
                                                        }
                                                    } catch (error) {
                                                        console.log("error", error)
                                                    }
                                                } else {
                                                    resData[2] = "Select coin status"
                                                    removeFile(imagepath, fileName[0])
                                                }
                                            } else {
                                                resData[2] = "usdPrice must be number"
                                                removeFile(imagepath, fileName[0])
                                            }
                                        } else {
                                            resData[2] = "Enter USD price"
                                            removeFile(imagepath, fileName[0])
                                        }

                                    } else {
                                        resData[2] = "Description must be > 2 latters"
                                        removeFile(imagepath, fileName[0])
                                    }
                                } else {
                                    resData[2] = "Enter package description"
                                    removeFile(imagepath, fileName[0])
                                }
                            } else {
                                resData[2] = "Add package logo"
                                removeFile(imagepath, fileName[0])
                            }
                        } else {
                            resData[2] = "Package name must be digits"
                            removeFile(imagepath, fileName[0])
                        }
                    } else {
                        resData[2] = "Package name must be > 2 latters"
                        removeFile(imagepath, fileName[0])
                    }
                } else {
                    resData[2] = "Enter package name"
                    removeFile(imagepath, fileName[0])
                }
            } catch (error) {
                console.log("error", error)
            }
            return res.status(resData[0] ? 200 : 400).json(response(resData[0], resData[1], resData[2]));
        })
    } catch (e) {
        console.log(e.message);
    }

}

)
export default withSessionRouteMLM(apiRoute);

export function removeFile(path, files) {

    try {
        fs.unlinkSync(path + files);
        console.log("File removed:");
    } catch (err) {
        console.error(err);
    }
}
export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};