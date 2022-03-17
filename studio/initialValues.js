import T from "@sanity/base/initial-value-template-builder";

export default [
  ...T.defaults(),
  T.template({
    id: "mainSite",
    title: "Main Site - Page",
    schemaType: "page",
    value: {
      site: "mainSite",
    },
  }),
  T.template({
    id: "standUpToCancer",
    title: "SU2C - Page",
    schemaType: "page",
    value: {
      site: "standUpToCancer",
    },
  }),
  T.template({
    id: "raceForLife",
    title: "Race For Life - Page",
    schemaType: "page",
    value: {
      site: "raceForLife",
    },
  }),
];
