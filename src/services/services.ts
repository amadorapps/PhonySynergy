import { Middleware } from "koa";
import testWebServiceURL from "./testWebServiceURL";
import showGetForgotPasswordButton from "./showGetForgotPasswordButton";
import getActivationLinkStatus from "./getActivationLinkStatus";
import getSAMLStatus from "./getSAMLStatus";
import getAcknowledgementText from "./getAcknowledgementText";
import processActivationKey from "./processActivationKey";
import completeActivation from "./completeActivation";
import getSecurityStatus from "./getSecurityStatus";
import childList from "./childList";


const Services: { [key: string]: Middleware} = {
    "TestWebServiceURL": testWebServiceURL,
    "SHOW_GET_FORGOT_PASSWORD_BUTTON_STATUS": showGetForgotPasswordButton,
    "GetActivationLinkStatus_StudentVUE": getActivationLinkStatus,
    "GETSAMLSTATUS": getSAMLStatus,
    "GETACKTEXT": getAcknowledgementText,
    "PROCESSACTIVATIONKEY": processActivationKey,
    "COMPLETEACTIVATION": completeActivation,
    "GETSECURITYSTATUS": getSecurityStatus,
    "ChildList": childList,
};

export default Services;