import { getalldata } from "@/helper/common"


export default async function handler(req, res) {
    let resData = [false, [], 'Session expired']
    resData = await getalldata(req, res)
    return res.json({ status: resData[0], data: resData[1], oth: resData[2] })
}