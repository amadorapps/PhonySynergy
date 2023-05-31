import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";
import { encode } from "he";


const getAcknowledgementText: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetAcknowledgementText({
        PRIVACY_STATEMENT: encode(`<center id="a"><B>THIS IS  FAKE SERVER</B></center>
        <script type="module">
        document.querySelector("#app").innerText = Object.keys(window);
        </script>
        <div id="app"></div>
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