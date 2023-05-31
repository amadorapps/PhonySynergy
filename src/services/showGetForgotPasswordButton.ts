import type { Middleware } from "koa"
import Templates from "../templates/templates";
import { Config } from "../configDefaults";

const showGetForgotPasswordButton: Middleware = async (ctx, next) => {
    const config: Config = ctx.config;
    const body = Templates.ShowGetForgotPasswordButtonStatus({
        SHOW_FORGOT_PASSWORD: "true",
    });
    ctx.body = body;
    ctx.headers["content-type"] = "text/xml";

    await next();
}

export default showGetForgotPasswordButton;