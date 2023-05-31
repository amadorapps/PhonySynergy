import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const processActivationKey: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.ProcessActivationKey({
        STACK_TRACE: "trace",
        ERROR_MESSAGE: "L",
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default processActivationKey;