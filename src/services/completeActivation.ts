import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";
import { encode } from "he";


const completeActivation: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    ctx.body = "";
    ctx.response.status = 200;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default completeActivation;