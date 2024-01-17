import { basicInfo } from "./basicInfo.js";
import { componentsInfo } from "./componentsInfo.js";
import { pathInfo } from "./pathinfo/index.js";
import { responsesInfo } from "./responsesInfo.js";
import { serverInfo } from "./servers.js";

export const swaggerDocument = {
    ...basicInfo,
    ...serverInfo,
    ...pathInfo,
    ...componentsInfo,
    ...responsesInfo
};
