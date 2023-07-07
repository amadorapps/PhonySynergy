import path from "path";
import { compile } from "handlebars";
import { readFileSync } from "fs";

const TEMPLATES_PATH = path.join(__dirname);

const regularTemplate = (name: string) => compile(readFileSync(path.join(TEMPLATES_PATH, `${name}.xml`), "utf-8"));



const Templates: { [key: string]: HandlebarsTemplateDelegate<any> } = {
    TestWebServiceURL: regularTemplate("TestWebServiceURL"),
    ShowGetForgotPasswordButtonStatus: regularTemplate("ShowGetForgotPasswordButtonStatus"),
    GetActivationLinkStatus: regularTemplate("GetActivationLinkStatus"),
    GetSAMLStatus: regularTemplate("GetSAMLStatus"),
    GetAcknowledgementText: regularTemplate("GetAcknowledgementText"),
    ProcessActivationKey: regularTemplate("ProcessActivationKey"),
    GetSecurityStatus: regularTemplate("GetSecurityStatus"),
    ChildList: regularTemplate("ChildList"),
    ChildListInternal: regularTemplate("ChildListInternal"),
    ChildListSuccess: regularTemplate("ChildListSuccess"),
    GetSupportedLanguages: regularTemplate("GetSupportedLanguages"),
    GetSoundFileData: regularTemplate("GetSoundFileData"),
    StudentInfo: regularTemplate("StudentInfo"),
    Gradebook: regularTemplate("Gradebook"),
};

export default Templates;


