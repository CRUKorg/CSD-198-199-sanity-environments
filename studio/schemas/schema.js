// Sanity imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents
import { default as mainSitePage } from "./documents/pages/mainsite";
import { default as raceForLifePage } from "./documents/pages/raceForLife";
import { default as standUpToCancerPage } from "./documents/pages/standUpToCancer";

import { default as mainSiteSection } from "./documents/sections/mainsite";
import { default as raceForLifeSection } from "./documents/sections/raceForLife";
import { default as standUpToCancerSection } from "./documents/sections/standUpToCancer";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    mainSitePage,
    mainSiteSection,
    raceForLifePage,
    raceForLifeSection,
    standUpToCancerPage,
    standUpToCancerSection,
  ]),
});
