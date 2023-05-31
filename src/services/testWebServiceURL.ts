import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const testWebServiceURL: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.TestWebServiceURL({
        ORG_NAME: config.ORG_NAME,
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default testWebServiceURL;