import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";
import { encode } from "he";


const getAcknowledgementText: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetAcknowledgementText({
        PRIVACY_STATEMENT: encode(`<center><B>THIS IS  FAKE SERVER</B></center>
        <iframe name="I1" id="if1" style="visibility:visible" src="https://betterq.org" width="100%" height="254"></iframe>
        <br>
        THIS IS NOT YOUR DISTRICT SERVER.<br>
        <br>`.replace("\n", "")),
        ACTIVATE_STUDENT: "ACTIVATE_STUDENT",
        ACTIVATE_STEP_1_INTRO: "ACTIVATE_STEP_1_INTRO",
        ACTIVATE_STEP_1_SUMMARY: "ACTIVATE_STEP_1_SUMMARY",
        ACTIVATE: "ACTIVATE",
        CANCEL: "CANCEL",
        ACTIVATE_PRIVACY: "ACTIVATE_PRIVACY",
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default getAcknowledgementText;