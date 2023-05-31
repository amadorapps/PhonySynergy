import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const childList: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const doc: Document = ctx.doc;
    let body;
    if (doc.querySelector("password")?.textContent == "test") {
        body = Templates.ChildListSuccess({
        });
    } else {
        body = Templates.ChildList({
            STACK_TRACE: "trace",
            ERROR_MESSAGE: "L + ratio",
        });
    }
    
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default childList;