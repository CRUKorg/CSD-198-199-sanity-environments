import T from "@sanity/base/initial-value-template-builder";

export default [
  ...T.defaults(),
  T.template({
    id: "mainsite-test",
    title: "Main Site Test!",
    schemaType: "main_site_page",
    value: {
      test_section: "mainSite",
    },
  }),
];
