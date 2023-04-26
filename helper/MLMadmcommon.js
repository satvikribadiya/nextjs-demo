import { alphabet, currenttime, email, number, password, string, toStringify } from "./fns"
const twofactor = require("node-2fa");
import admincred from '../models/MLMsystem/admincred'
import MLMDbconnect from "./MLMDbconnect";
import coin from '../models/MLMsystem/coin'
import user from '../models/MLMsystem/user'
import wallet from '../models/MLMsystem/wallet'
import package1 from '../models/MLMsystem/package'
let mongoose = require('mongoose');

export const loginapi = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)

    try {
        if (data.email !== "") {
            if (email(data.email)) {
                if (data.password !== "") {
                    if (data.password.length == 6) {
                        if (number(data.password)) {
                            try {
                                await MLMDbconnect()
                                let user = await admincred.findOne({ email: data.email })
                                const newToken = twofactor.verifyToken(user.twofa, data.password);

                                if (newToken && newToken.delta == 0) {
                                    req.session.loginSession = data.email
                                    await req.session.save();

                                    resData[0] = true
                                    resData[1] = []
                                    resData[2] = "User varified"
                                } else {
                                    resData[2] = "Invalid 2FA code"
                                }
                            } catch (error) {
                                console.log("error", error)

                            }
                        } else {
                            resData[2] = "OTP must be number"
                        }
                    } else {
                        resData[2] = "Otp must be 6 digit"
                    }
                } else {
                    resData[2] = "Enter password"
                }
            } else {
                resData[2] = "Invalid email"
            }
        } else {
            resData[2] = "Enter email"
        }
    } catch (error) {
        console.log("error", error)
    }

    return resData
}
export const signup = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = req.body
    try {
        if (data.firstname !== "") {
            if (data.firstname.length > 3) {
                if (alphabet(data.firstname)) {
                    if (data.lastname !== "") {
                        if (data.lastname.length > 3) {
                            if (alphabet(data.lastname)) {
                                if (data.email !== "") {
                                    if (email(data.email)) {
                                        if (data.password !== "") {
                                            if (password(data.password)) {
                                                try {

                                                    const newSecret = twofactor.generateSecret({ firstname: data.firstname, password: data.password });
                                                    let adddata = {
                                                        firstname: data.firstname,
                                                        lastname: data.lastname,
                                                        email: data.email,
                                                        password: data.password,
                                                        twofa: newSecret.secret,
                                                        createdOn: currenttime(),
                                                    }
                                                    await MLMDbconnect()
                                                    await admincred.create(adddata)

                                                    resData[0] = true
                                                    resData[1] =
                                                        resData[2] = "secret key generated"
                                                } catch (error) {
                                                    console.log("error", error)
                                                }

                                            } else {
                                                resData[2] = "Invalid  password"
                                            }
                                        } else {
                                            resData[2] = "Enter password"
                                        }
                                    } else {
                                        resData[2] = "Invalid  email"
                                    }
                                } else {
                                    resData[2] = "Enter email"
                                }
                            } else {
                                resData[2] = "Lastname must be letters"
                            }
                        } else {
                            resData[2] = "lastname not valid"
                        }
                    } else {
                        resData[2] = "Enter lastname"
                    }
                } else {
                    resData[2] = "Firstname must be letters"
                }
            } else {
                resData[2] = "Firstname not valid"
            }
        } else {
            resData[2] = "Enter firstname"
        }
    } catch (error) {
        console.log("error", error)
    }
    return resData
}


//=============================== coin start ==============================//


export const getallcoin = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.page) {

        try {

            let where = []
            if (data.status != Number(2)) {
                where.push({ "status": Number(data.status) })
            }
            if (data.startdate != 0) {
                where.push({ "createdOn": { $gte: data.startdate } })
            }
            if (data.enddate != 0) {
                where.push({ "createdOn": { $lte: data.enddate } })
            }
            if (data.search !== "") {
                where.push({ $or: [{ 'name': { $regex: data.search, $options: 'i' } }, { 'ticker': { $regex: data.search, $options: 'i' } }] })
            }
            let allstatus = { $and: [...where] }

            await MLMDbconnect()
            let limit = Number(process.env.PERPAGE_DATA)
            let skip = (data.page - 1) * Number(process.env.PERPAGE_DATA)

            let select = { "__v": 0 }

            let alldata = await coin.find(allstatus, select).limit(limit).skip(skip)
            let totaldata = await coin.find(allstatus, select).count()
            let totalpage = Math.ceil(totaldata / Number(process.env.PERPAGE_DATA))

            resData[0] = true
            resData[1] = { data: alldata, totalpage: totalpage }
            resData[2] = "All data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}


export const geteditcoindata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()

            let getcoindata = await coin.findOne({ _id: data.id })

            resData[0] = true
            resData[1] = getcoindata
            resData[2] = "Data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}

export const statuschange = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()
            let select = { "_id": 0, "__v": 0 }
            let getcoindata = await coin.findOne({ _id: data.id }, select)

            let newdata = {
                ...getcoindata._doc,
                status: Number(data.status),
                updatedOn: currenttime(),
            }
            await coin.updateOne({ _id: data.id }, newdata)

            resData[0] = true
            resData[1] = []
            resData[2] = `Status ${newdata.status == 0 ? "activate" : "deactivate"} successfully`
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}



//=============================== admin user start ==============================//


export const addusers = async (req, res) => {
    let resData = [false, [], 'Session expired']

    let data = JSON.parse(req.body);
    try {

        if (data.firstname !== "") {
            if (data.firstname.length > 1) {
                if (alphabet(data.firstname)) {
                    if (data.lastname !== "") {
                        if (data.lastname.length > 2) {
                            if (alphabet(data.lastname)) {
                                if (data.email !== "") {
                                    if (email(data.email)) {
                                        if (data.password !== "") {
                                            if (alphabet(data.referralCode)) {
                                                if (data.referralCode.length == 6) {
                                                    if (data.status !== "") {
                                                        try {
                                                            if (data.id !== "") {
                                                                let userfirstname = await user.find({ firstName: data.firstname, _id: { $ne: data.id } }).count()
                                                                if (userfirstname == 0) {
                                                                    let useremail = await user.find({ email: data.email, _id: { $ne: data.id } }).count()
                                                                    if (useremail == 0) {
                                                                        try {
                                                                            let existuser = await user.findOne({ _id: data.id }).lean()

                                                                            let adddata = {
                                                                                _id: data.id,
                                                                                firstName: data.firstname,
                                                                                lastName: data.lastname,
                                                                                email: data.email,
                                                                                referralCode: data.referralCode,
                                                                                sponserId: data.sponserId,
                                                                                password: data.password,
                                                                                status: Number(data.status),
                                                                                createdOn: existuser.createdOn,
                                                                                updatedOn: currenttime(),
                                                                            }
                                                                            await MLMDbconnect()

                                                                            await user.updateOne({ _id: data.id }, { $set: adddata })

                                                                            resData[0] = true
                                                                            resData[2] = 'User update successfully'

                                                                        } catch (error) {
                                                                            console.log("error", error)
                                                                        }
                                                                    } else {
                                                                        resData[2] = "Email already exist"
                                                                    }
                                                                } else {
                                                                    resData[2] = "First name already exist"
                                                                }

                                                            } else {
                                                                let userfirstname = await user.find({ firstName: data.firstname }).count()
                                                                if (userfirstname == 0) {
                                                                    let useremail = await user.find({ email: data.email }).count()
                                                                    if (useremail == 0) {
                                                                        let _id = new mongoose.Types.ObjectId();

                                                                        let adddata = {
                                                                            _id:_id,
                                                                            firstName: data.firstname,
                                                                            lastName: data.lastname,
                                                                            email: data.email,
                                                                            referralCode: data.referralCode,
                                                                            sponserId: data.sponserId,
                                                                            password: data.password,
                                                                            status: Number(data.status),
                                                                            createdOn: currenttime(),
                                                                        }
                                                                        await MLMDbconnect()

                                                                        await user.create(adddata)
                                                                        let coinselect = { "_id": 1, "name": 1 }
                                                                        let coins = await coin.find({ status: 0 }, coinselect)

                                                                        let walletdata = {}
                                                                        {
                                                                            coins.length > 0 && coins.map(async (x) => {
                                                                                walletdata = {
                                                                                    userId: _id.toString(),
                                                                                    coinId: x._id.toString(),
                                                                                    balance: 0,
                                                                                    createdOn: currenttime()
                                                                                }

                                                                                await wallet.create(walletdata)
                                                                            })
                                                                        }
                                                                        resData[0] = true
                                                                        resData[2] = 'User add successfully'
                                                                    } else {
                                                                        resData[2] = "Email already exist"
                                                                    }
                                                                } else {
                                                                    resData[2] = "First name already exist"
                                                                }
                                                            }
                                                        } catch (error) {
                                                            console.log("error", error)
                                                        }
                                                    } else {
                                                        resData[2] = "Select user status"
                                                    }
                                                } else {
                                                    resData[2] = "Raferalcode must be 6 letters"
                                                }
                                            } else {
                                                resData[2] = "Raferalcode must be letters"
                                            }
                                        } else {
                                            resData[2] = "Enter password"
                                        }
                                    } else {
                                        resData[2] = "Invalid email"
                                    }
                                } else {
                                    resData[2] = "Enter email"
                                }
                            } else {
                                resData[2] = "Last name must be latters"
                            }
                        } else {
                            resData[2] = "Last name must be > 1 latters"
                        }
                    } else {
                        resData[2] = "Enter last name"
                    }
                } else {
                    resData[2] = "First name must be latters"
                }
            } else {
                resData[2] = "First name must be > 1 latters"
            }
        } else {
            resData[2] = "Enter first name"
        }
    } catch (error) {
        console.log("error", error)
    }
    return resData;
}
export const getalluser = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.page) {

        try {

            let where = []
            if (data.status != Number(2)) {
                where.push({ "status": Number(data.status) })
            }
            if (data.startdate != 0) {
                where.push({ "createdOn": { $gte: data.startdate } })
            }
            if (data.enddate != 0) {
                where.push({ "createdOn": { $lte: data.enddate } })
            }
            if (data.search !== "") {
                where.push({ $or: [{ 'firstName': { $regex: data.search, $options: 'i' } }, { 'referralCode': { $regex: data.search, $options: 'i' } }, { 'email': { $regex: data.search, $options: 'i' } }] })
            }
            let allstatus = { $and: [...where] }

            await MLMDbconnect()
            let limit = Number(process.env.PERPAGE_DATA)
            let skip = (data.page - 1) * Number(process.env.PERPAGE_DATA)

            let select = { "__v": 0, "password": 0 }

            let alldata = await user.find(allstatus, select).limit(limit).skip(skip)
            let totaldata = await user.find(allstatus, select).count()
            let totalpage = Math.ceil(totaldata / Number(process.env.PERPAGE_DATA))

            resData[0] = true
            resData[1] = { data: alldata, totalpage: totalpage }
            resData[2] = "All data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const alluser = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.id == 0) {
        try {
            await MLMDbconnect()

            let select = { "_id": 1, "firstName": 1 }
            let alldata = await user.find({}, select)

            resData[0] = true
            resData[1] = alldata
            resData[2] = "All data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const getedituserdata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()
            let getuserdata = await user.findOne({ _id: data.id }).lean()
            let getdata = {
                _id: getuserdata._id,
                firstname: getuserdata.firstName,
                lastname: getuserdata.lastName,
                email: getuserdata.email,
                status: getuserdata.status,
                password: getuserdata.password,
                referralcode: getuserdata.referralCode,
                createdOn: getuserdata.createdOn
            }
            resData[0] = true
            resData[1] = getdata
            resData[2] = "Data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const statuschangeuser = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()
            let select = { "_id": 0, "__v": 0 }
            let getuserdata = await user.findOne({ _id: data.id }, select)

            let newdata = {
                ...getuserdata._doc,
                status: Number(data.status),
                updatedOn: currenttime(),
            }
            await user.updateOne({ _id: data.id }, newdata)

            resData[0] = true
            resData[1] = []
            resData[2] = `Status ${newdata.status == 0 ? "activate" : "deactivate"} successfully`
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}

//=============================== package start ==============================//

export const getallpackage = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.page) {

        try {

            let where = []
            if (data.status != Number(2)) {
                where.push({ "status": Number(data.status) })
            }
            if (data.startdate != 0) {
                where.push({ "createdOn": { $gte: data.startdate } })
            }
            if (data.enddate != 0) {
                where.push({ "createdOn": { $lte: data.enddate } })
            }
            if (data.search !== "") {
                where.push({ $or: [{ 'name': { $regex: data.search, $options: 'i' } }, { 'description': { $regex: data.search, $options: 'i' } }] })
            }
            let allstatus = { $and: [...where] }

            await MLMDbconnect()
            let limit = Number(process.env.PERPAGE_DATA)
            let skip = (data.page - 1) * Number(process.env.PERPAGE_DATA)

            let select = { "__v": 0 }

            let alldata = await package1.find(allstatus, select).limit(limit).skip(skip)
            let totaldata = await package1.find(allstatus, select).count()
            let totalpage = Math.ceil(totaldata / Number(process.env.PERPAGE_DATA))

            resData[0] = true
            resData[1] = { data: alldata, totalpage: totalpage }
            resData[2] = "All data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const geteditpackagedata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()

            let getpackagedata = await package1.findOne({ _id: data.id })

            resData[0] = true
            resData[1] = getpackagedata
            resData[2] = "Data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const statuschangepackage = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await MLMDbconnect()
            let select = { "_id": 0, "__v": 0 }
            let getpackagedata = await package1.findOne({ _id: data.id }, select)

            let newdata = {
                ...getpackagedata._doc,
                status: Number(data.status),
                updatedOn: currenttime(),
            }
            await package1.updateOne({ _id: data.id }, newdata)

            resData[0] = true
            resData[1] = []
            resData[2] = `Status ${newdata.status == 0 ? "activate" : "deactivate"} successfully`
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}

//=============================== user side start ==============================//


export const usersignup = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)

    try {
        if (data.firstName !== "") {
            if (data.firstName.length > 3) {
                if (alphabet(data.firstName)) {
                    if (data.lastName !== "") {
                        if (data.lastName.length > 3) {
                            if (alphabet(data.lastName)) {
                                if (data.email !== "") {
                                    if (email(data.email)) {
                                        if (data.password !== "") {
                                            if (password(data.password)) {
                                                if (alphabet(data.referralCode)) {
                                                    await MLMDbconnect()

                                                    if (data.referrerperson !== "" && data.referrerperson.length == 6) {

                                                        let existuser = await user.find({ email: data.email }).count()
                                                        if (existuser == 0) {
                                                            let _id = new mongoose.Types.ObjectId();


                                                            let select = { "_id": 1, "firstName": 1 }
                                                            let sponsoruser = await user.findOne({ referralCode: data.referrerperson }, select)
                                                            if (sponsoruser) {

                                                                let finaldata = {
                                                                    _id: _id,
                                                                    firstName: data.firstName,
                                                                    lastName: data.lastName,
                                                                    email: data.email,
                                                                    password: data.password,
                                                                    referralCode: data.referralCode,
                                                                    sponserId: sponsoruser._id.toString(),
                                                                    createdOn: currenttime(),
                                                                }
                                                                await user.create(finaldata)

                                                                let coinselect = { "_id": 1, "name": 1 }
                                                                let coins = await coin.find({ status: 0 }, coinselect)

                                                                let walletdata = {}
                                                                {
                                                                    coins.length > 0 && coins.map(async (x) => {
                                                                        walletdata = {
                                                                            userId: _id.toString(),
                                                                            coinId: x._id.toString(),
                                                                            balance: 0,
                                                                            createdOn: currenttime()
                                                                        }

                                                                        await wallet.create(walletdata)
                                                                    })
                                                                }
                                                                resData[0] = true
                                                                resData[1] =
                                                                    resData[2] = "User register sucessfully"
                                                            } else {
                                                                resData[2] = "Invalid rafer person code"
                                                            }
                                                        } else {
                                                            resData[2] = "Email already register"
                                                        }
                                                    } else {

                                                        let existuser = await user.find({ email: data.email }).count()
                                                        if (existuser == 0) {

                                                            let _id = new mongoose.Types.ObjectId();

                                                            let finaldata = {
                                                                _id: _id,
                                                                firstName: data.firstName,
                                                                lastName: data.lastName,
                                                                email: data.email,
                                                                password: data.password,
                                                                referralCode: data.referralCode,
                                                                sponserId: "",
                                                                createdOn: currenttime(),
                                                            }
                                                            let select = { "_id": 1, "name": 1 }
                                                            let coins = await coin.find({ status: 0 }, select)


                                                            await user.create(finaldata)

                                                            let walletdata = {}
                                                            {
                                                                coins.length > 0 && coins.map(async (x) => {
                                                                    walletdata = {
                                                                        userId: _id.toString(),
                                                                        coinId: x._id.toString(),
                                                                        balance: 0,
                                                                        createdOn: currenttime()
                                                                    }

                                                                    await wallet.create(walletdata)
                                                                })
                                                            }
                                                            resData[0] = true
                                                            resData[1] =
                                                                resData[2] = "User register sucessfully"
                                                        } else {
                                                            resData[2] = "Email already register"
                                                        }
                                                    }

                                                } else {
                                                    resData[2] = "Invalid  raferal code"
                                                }

                                            } else {
                                                resData[2] = "Invalid  password"
                                            }
                                        } else {
                                            resData[2] = "Enter password"
                                        }
                                    } else {
                                        resData[2] = "Invalid  email"
                                    }
                                } else {
                                    resData[2] = "Enter email"
                                }
                            } else {
                                resData[2] = "Lastname must be letters"
                            }
                        } else {
                            resData[2] = "lastname not valid"
                        }
                    } else {
                        resData[2] = "Enter lastname"
                    }
                } else {
                    resData[2] = "Firstname must be letters"
                }
            } else {
                resData[2] = "Firstname not valid"
            }
        } else {
            resData[2] = "Enter firstname"
        }
    } catch (error) {
        console.log("error", error)
    }
    return resData
}
export const userlogin = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)

    try {
        if (data.email !== "") {
            if (email(data.email)) {
                if (data.password !== "") {
                    if (password(data.password)) {

                        try {
                            await MLMDbconnect()
                            let userbymail = await user.findOne({ email: data.email })

                            if (userbymail) {
                                let userbypassword = await user.findOne({ email: data.email, password: data.password })
                                if (userbypassword) {

                                    req.session.usersession = data.email
                                    await req.session.save();

                                    resData[0] = true
                                    resData[1] = []
                                    resData[2] = "User varified"
                                } else {
                                    resData[2] = "Invalid email or password"
                                }
                            } else {
                                resData[2] = "User not found"
                            }
                        } catch (error) {
                            console.log("error", error)

                        }

                    } else {
                        resData[2] = "Enter valid password"
                    }
                } else {
                    resData[2] = "Enter password"
                }
            } else {
                resData[2] = "Invalid email"
            }
        } else {
            resData[2] = "Enter email"
        }
    } catch (error) {
        console.log("error", error)
    }

    return resData
}
export const getpackage = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.page) {

        try {

            await MLMDbconnect()
            let limit = 3

            let select = { "__v": 0 }
            let sort = { "createdOn": -1 }
            let alldata = await package1.find({ status: 0 }, select).limit(limit).sort(sort)

            resData[0] = true
            resData[1] = alldata
            resData[2] = "All data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const getcoindata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.email) {

        try {
            let coinids = []
            await MLMDbconnect()

            let userdata = await user.findOne({ email: data.email }).lean()
            let walletdata = await wallet.find({ userId: userdata._id })
            walletdata.map(x => {
                coinids.push(x.coinId)
            })
            let coinname = []
            let coins = await coin.find({ _id: { $in: coinids } })
            coins.map((post) => {
                coinname[post._id] = post.name
            })
            let allcoindata = walletdata.length > 0 && walletdata.map((x) => {
                return {
                    coin: { coinId: x.coinId, coinname: coinname[x.coinId] },

                }
            })
            resData[0] = true
            resData[1] = allcoindata
            resData[2] = "All coin get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const buypackage = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.packageid && data.email && data.price && data.coinId) {

        try {

            await MLMDbconnect()
            console.log("data", data)
            let alldata = await user.findOne({ email: data.email })
            let walletdata = await wallet.findOne({ userId: alldata._id, coinId: data.coinId }).lean()
            let coindata = await coin.findOne({ _id: data.coinId })

            let packagepriceofcoin = data.price / coindata.usdPrice

            if (walletdata.balance >= packagepriceofcoin) {
                let pendingbalance = walletdata.balance - packagepriceofcoin

                let newwalletdata = {
                    ...walletdata,
                    balance: pendingbalance
                }
               
                await wallet.updateOne({ _id: walletdata._id }, newwalletdata)

                if (alldata.sponserId !== "") {

                    let referalamount = (packagepriceofcoin * 5) / 100
    
                    let sponserwallet = await wallet.findOne({ userId: alldata.sponserId, coinId: data.coinId }).lean()
                    let newdata = {
                        ...sponserwallet,
                        balance: referalamount
                    }
                    await wallet.updateOne({ _id: sponserwallet._id }, newdata)
                }

                resData[0] = true
                resData[1] = alldata
                resData[2] = "Package purchase successfully"
            } else {
                resData[2] = 'No enough balance'
            }

        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'session expire'
    }
    return resData;
}