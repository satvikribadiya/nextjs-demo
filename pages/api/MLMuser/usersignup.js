import { usersignup } from "@/helper/MLMadmcommon"


export default async function handler(req, res) {
    let resData = [false, [], 'Session expired']
    resData = await usersignup(req, res)
    return res.json({ status: resData[0], data: resData[1], oth: resData[2] })
}