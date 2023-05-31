import dotenv from "dotenv";
import DEFAULT_CONFIG, { Config } from "./configDefaults";
import Koa, {} from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router"
import { JSDOM } from "jsdom";

import Services from "./services/services";



dotenv.config();
const config = {...DEFAULT_CONFIG, ...(process.env as unknown as Config)}


const app = new Koa();
const router = new Router();




router.post("/Service/PXPCommunication.asmx", async (ctx, next) => {
    console.log(ctx.request.body);
    if (!ctx.request.body) return;
    let dom;
    try {
        dom = new JSDOM(ctx.request.body as string, {
            contentType: "text/xml"
        });
    } catch (e) { 
        console.log(e);
        return;
    }
    const doc = dom.window.document;
    // TODO  check that we have an actual SOAP request
    const reqMethodEl = doc.querySelector(":is(ProcessWebServiceRequestMultiWeb, ProcessWebServiceRequest) methodName");
    if (!reqMethodEl || !reqMethodEl.textContent) {
        console.log("Invalid SOAP request");
        return;
    }

    const reqMethod = reqMethodEl.textContent;
    console.log(reqMethod);

    if (!(reqMethod in Services)) return;

    // @ts-ignore
    ctx.config = config;
    // @ts-ignore
    ctx.doc = doc;
    await Services[reqMethod](ctx, next);
})

router.get("/", async (ctx, next) => {
    console.log(ctx.request.URL);
    await next();
})

app.use(bodyParser({
    enableTypes: ["text", "xml"],
}));

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(config.LISTEN_PORT, () => {
    console.log(`Started PhonySynergy "${config.ORG_NAME}" on port ${config.LISTEN_PORT}`);
})