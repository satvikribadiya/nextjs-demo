import { loginapi } from "@/helper/common"


export default async function handler(req, res) {
    let resData = [false, [], 'Session expired']
    resData = await loginapi(req, res)
    return res.json({ status: resData[0], data: resData[1], oth: resData[2] })
}