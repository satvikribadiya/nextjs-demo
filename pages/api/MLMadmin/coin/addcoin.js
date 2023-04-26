import MLMDbconnect from "../../../../helper/MLMDbconnect";
import coin from '../../../../models/MLMsystem/coin'
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
                            if (data.ticker !== "") {
                                if (data.ticker.length > 2) {
                                    if (alphabet(data.ticker)) {
                                        if (data.usdPrice != 0) {
                                            if (number(data.usdPrice)) {
                                                if (data.logo !== "") {
                                                    if (data.status !== "") {
                                                        try {
                                                            if (data.id !== "") {
                                                                let coinname = await coin.find({ name: data.name, _id: { $ne: data.id } }).count()
                                                                if (coinname == 0) {

                                                                    let cointickernumber = await coin.find({ ticker: data.ticker, _id: { $ne: data.id } }).count()
                                                                    if (cointickernumber == 0) {
                                                                        try {
                                                                            let imagename = ""
                                                                            if (fileName.length > 0) {

                                                                                imagename = data.name.replace(/\s/g, '') + "-" + Math.floor(100000 + Math.random() * 900000) + "." + fileName[0].split(/\.(?=[^\.]+$)/)[1]

                                                                                fs.rename(imagepath + fileName[0], imagepath + imagename, function (err) {
                                                                                    if (err) console.log(err)
                                                                                })
                                                                            }
                                                                            let existcoin = await coin.findOne({ _id: data.id }).lean()
                                                                            let adddata = {
                                                                                name: data.name,
                                                                                ticker: data.ticker,
                                                                                logo: imagename !== "" ? imagename : data.logo,
                                                                                usdPrice: Number(data.usdPrice),
                                                                                status: Number(data.status),
                                                                                createdOn: existcoin.createdOn,
                                                                                updatedOn: currenttime(),
                                                                            }
                                                                            await MLMDbconnect()
                                                                            console.log("adddata", adddata)
                                                                            await coin.updateOne({ _id: data.id }, { $set: adddata })

                                                                            resData[0] = true
                                                                            resData[2] = 'Coin Update successfully'

                                                                        } catch (error) {
                                                                            console.log("error", error)
                                                                        }
                                                                    } else {
                                                                        resData[2] = "Coin ticker already exist"
                                                                        removeFile(imagepath, fileName[0])
                                                                    }
                                                                } else {
                                                                    resData[2] = "Coin name already exist"
                                                                    removeFile(imagepath, fileName[0])
                                                                }

                                                            } else {
                                                                let coinname = await coin.find({ name: data.name }).count()
                                                                if (coinname == 0) {
                                                                    let cointickernumber = await coin.find({ ticker: data.ticker }).count()
                                                                    if (cointickernumber == 0) {
                                                                        let imagename = ""
                                                                        if (fileName.length > 0) {

                                                                            imagename = data.name.replace(/\s/g, '') + "-" + Math.floor(100000 + Math.random() * 900000) + "." + fileName[0].split(/\.(?=[^\.]+$)/)[1]

                                                                            fs.rename(imagepath + fileName[0], imagepath + imagename, function (err) {
                                                                                if (err) console.log(err)
                                                                            })
                                                                        }
                                                                        let adddata = {
                                                                            ...data,
                                                                            usdPrice: Number(data.usdPrice),
                                                                            logo: imagename,
                                                                            status: Number(data.status),
                                                                            createdOn: currenttime(),
                                                                        }
                                                                        await MLMDbconnect()

                                                                        await coin.create(adddata)

                                                                        resData[0] = true
                                                                        resData[2] = 'Coin add successfully'
                                                                    } else {
                                                                        resData[2] = "Coin ticker already exist"
                                                                        removeFile(imagepath, fileName[0])
                                                                    }
                                                                } else {
                                                                    resData[2] = "Coin name already exist"
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
                                                    resData[2] = "Add coin logo"
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
                                        resData[2] = "Ticker must be without space letters"
                                        removeFile(imagepath, fileName[0])
                                    }
                                } else {
                                    resData[2] = "Ticker must be > 2 latters"
                                    removeFile(imagepath, fileName[0])
                                }
                            } else {
                                resData[2] = "Enter coin ticker"
                                removeFile(imagepath, fileName[0])
                            }
                        } else {
                            resData[2] = "Coin name must be digits"
                            removeFile(imagepath, fileName[0])
                        }
                    } else {
                        resData[2] = "Coin name must be > 2 latters"
                        removeFile(imagepath, fileName[0])
                    }
                } else {
                    resData[2] = "Enter coin name"
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