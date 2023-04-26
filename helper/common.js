import { alphabet, currenttime, email, password, string } from "./fns"
const twofactor = require("node-2fa");
import user from '../models/user'
import Dbconnect from "./Dbconnect";

export const signup = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)
    try {
        if (data.username !== "") {
            if (data.username.length > 3) {
                if (string(data.username)) {
                    if (data.password !== "") {
                        if (data.password.length > 3) {
                            const newSecret = twofactor.generateSecret({ username: data.username, password: data.password });
                            console.log("newSecret", newSecret)
                            resData[0] = true
                            resData[1] = newSecret
                            resData[2] = "secret key generated"
                        } else {
                            resData[2] = "password not valid"
                        }
                    } else {
                        resData[2] = "Enter password"
                    }
                } else {
                    resData[2] = "Username must be letters"
                }
            } else {
                resData[2] = "Username not valid"
            }
        } else {
            resData[2] = "Enter usename"
        }
    } catch (error) {
        console.log("error", error)
    }
    return resData
}

export const loginapi = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)

    try {
        if (data.username !== "") {
            if (data.username.length > 3) {
                if (string(data.username)) {
                    if (data.password !== "") {
                        if (data.password.length == 6) {
                            if (data.twofa != "") {
                                try {
                                    const newToken = twofactor.verifyToken(data.twofa, data.password);
                                    if (newToken && newToken.delta == 0) {

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
                                resData[2] = "no twofa string"
                            }
                        } else {
                            resData[2] = "Otp must be 6 digit"
                        }
                    } else {
                        resData[2] = "Enter password"
                    }
                } else {
                    resData[2] = "Username must be letters"
                }
            } else {
                resData[2] = "Username not valid"
            }
        } else {
            resData[2] = "Enter usename"
        }
    } catch (error) {
        console.log("error", error)
    }

    return resData
}

export const adddatacrude = async (req, res) => {
    let resData = [false, [], 'Session expired']
    let data = JSON.parse(req.body)
    try {
        await Dbconnect()

        if (data.firstName !== "") {
            if (data.firstName.length > 2) {
                if (alphabet(data.firstName)) {
                    if (data.lastName !== "") {
                        if (data.lastName.length > 2) {
                            if (alphabet(data.lastName)) {
                                if (data.email !== "") {
                                    if (email(data.email)) {
                                        if (data.password !== "") {
                                            if (password(data.password)) {
                                                if (data.maritalStatus !== "") {
                                                    if (data.id !== "") {

                                                        let firstnameusernumber = await user.find({ firstName: data.firstName, _id: { $ne: data.id } }).count()
                                                        if (firstnameusernumber == 0) {

                                                            let lastnameusernumber = await user.find({ lastName: data.lastName, _id: { $ne: data.id } }).count()
                                                            if (lastnameusernumber == 0) {

                                                                let emailusernumber = await user.find({ email: data.email, _id: { $ne: data.id } }).count()
                                                                if (emailusernumber == 0) {
                                                                    try {
                                                                        let newdata = {
                                                                            ...data,
                                                                            updatedOn: currenttime()
                                                                        }

                                                                        await user.updateOne({ _id: data.id }, { $set: newdata })

                                                                        resData[0] = true
                                                                        resData[1] = []
                                                                        resData[2] = "Update sucessfully"

                                                                    } catch (error) {
                                                                        console.log("error", error)
                                                                    }

                                                                } else {
                                                                    resData[2] = "Email already exist"
                                                                }

                                                            } else {
                                                                resData[2] = "Last name already exist"
                                                            }
                                                        } else {
                                                            resData[2] = "First name already exist"
                                                        }
                                                    } else {
                                                        let firstnameusernumber = await user.find({ firstName: data.firstName }).count()
                                                        if (firstnameusernumber == 0) {

                                                            let lastnameusernumber = await user.find({ lastName: data.lastName }).count()
                                                            if (lastnameusernumber == 0) {

                                                                let emailusernumber = await user.find({ email: data.email }).count()
                                                                if (emailusernumber == 0) {
                                                                    try {
                                                                        let newdata = {
                                                                            ...data,
                                                                            createdOn: currenttime()
                                                                        }
                                                                        await user.create(newdata)

                                                                        resData[0] = true
                                                                        resData[1] = []
                                                                        resData[2] = "Add sucessfully"

                                                                    } catch (error) {
                                                                        console.log("error", error)
                                                                    }
                                                                } else {
                                                                    resData[2] = "Email already exist"
                                                                }
                                                            } else {
                                                                resData[2] = "Last name already exist"
                                                            }
                                                        } else {
                                                            resData[2] = "First name already exist"
                                                        }
                                                    }
                                                } else {
                                                    resData[2] = "Select marital status"
                                                }
                                            } else {
                                                resData[2] = "Invalid password"
                                            }
                                        } else {
                                            resData[2] = "Enter password"
                                        }
                                    } else {
                                        resData[2] = "Enter valid email"
                                    }
                                } else {
                                    resData[2] = "Enter email"
                                }

                            } else {
                                resData[2] = "Last name must be latters"
                            }
                        } else {
                            resData[2] = "Enter valid last name"
                        }
                    } else {
                        resData[2] = "Enter last name"
                    }

                } else {
                    resData[2] = "First name must be latters"
                }
            } else {
                resData[2] = "Enter valid first name"
            }
        } else {
            resData[2] = "Enter first name"
        }
    } catch (error) {
        console.log("error", error)
    }
    return resData
}

export const getalldata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)

    if (data.page) {

        try {
            await Dbconnect()
            let limit = Number(process.env.PERPAGE_DATA)
            let skip = (data.page - 1) * Number(process.env.PERPAGE_DATA)

            let alldata = await user.find({}).limit(limit).skip(skip)
            let totaldata = await user.find({}).count()
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
export const geteditobj = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await Dbconnect()

            let getuserdata = await user.findOne({ _id: data.id })

            resData[0] = true
            resData[1] = getuserdata
            resData[2] = "Data get successfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}
export const deletedata = async (req, res) => {
    let resData = [false, [], '']
    let data = JSON.parse(req.body)
    if (data.id) {
        try {
            await Dbconnect()

            await user.deleteOne({ _id: data.id })

            resData[0] = true
            resData[1] = []
            resData[2] = "User remove sucessfully"
        } catch (error) {
            console.log("error", error)
        }
    } else {
        resData[2] = 'No data found'
    }
    return resData;
}