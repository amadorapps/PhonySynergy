import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const getSecurityStatus: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetSAMLStatus({
        SECURITY_STATUS: true,
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default getSecurityStatus;