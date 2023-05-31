import path from "path";
import { compile } from "handlebars";
import { readFileSync } from "fs";

const TEMPLATES_PATH = path.join(__dirname);

const regularTemplate = (name: string) => compile(readFileSync(path.join(TEMPLATES_PATH, `${name}.xml`), "utf-8"));



const Templates: { [key: string]: HandlebarsTemplateDelegate<any> } = {
    "TestWebServiceURL": regularTemplate("TestWebServiceURL"),
    "ShowGetForgotPasswordButtonStatus": regularTemplate("ShowGetForgotPasswordButtonStatus"),
    "GetActivationLinkStatus": regularTemplate("GetActivationLinkStatus"),
    "GetSAMLStatus": regularTemplate("GetSAMLStatus"),
    "GetAcknowledgementText": regularTemplate("GetAcknowledgementText"),
};

export default Templates;

