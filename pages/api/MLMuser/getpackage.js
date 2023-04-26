import { getpackage } from "@/helper/MLMadmcommon"
import { withSessionRouteMLMuser } from "@/helper/session";

export default withSessionRouteMLMuser(handler);

async function handler(req, res) {
    let resData = [false, [], 'Session expired']
    resData = await getpackage(req, res)
    return res.json({ status: resData[0], data: resData[1], oth: resData[2] })
}