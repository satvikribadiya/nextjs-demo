import { getedituserdata } from "@/helper/MLMadmcommon"
import { withSessionRouteMLM } from "@/helper/session";

export default withSessionRouteMLM(handler);

export async function handler(req, res) {
    let resData = [false, [], 'Session expired']
    resData = await getedituserdata(req, res)
    return res.json({ status: resData[0], data: resData[1], oth: resData[2] })
}