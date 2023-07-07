import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";


const getSupportedLanguages: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.GetSupportedLanguages({
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default getSupportedLanguages;