import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const getActivationLinkStatus: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetActivationLinkStatus({
        ACTIVATION_LINK_STATUS: "true",
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default getActivationLinkStatus;