// Sanity imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents
import { default as page } from "./documents/pages/page";
import { default as section } from "./documents/section";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([page, section]),
});
