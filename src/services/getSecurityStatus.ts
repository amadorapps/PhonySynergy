import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const getSecurityStatus: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetSecurityStatus({
        SECURITY_STATUS: false,
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default getSecurityStatus;