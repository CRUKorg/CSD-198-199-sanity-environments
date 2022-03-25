import Body from "../../components/richText";
import { resolveDesk } from "../../util";
const page = [
  {
    title: "Site",
    name: "site",
    type: "string",
    readOnly: true,
    initialValue: () => {
      const desk = resolveDesk(window.location.pathname);
      return desk;
    },
  },
  {
    title: "Section",
    name: "section",
    type: "reference",
    to: [{ type: "section" }],
    options: {
      filter: ({ document }) => {
        // Always make sure to check for document properties
        // before attempting to use them

        if (document.site) {
          console.log(document);
          return {
            filter: "_type == $pageType && site == $site",
            params: { site: document.site, pageType: "page" },
          };
        } else {
          return {};
        }
      },
    },
  },
  {
    title: "Title",
    name: "title",
    type: "string",
  },
  Body,
  {
    title: "Meta Description",
    name: "meta_description",
    type: "text",
    description: "Describe the page for SEO.",
  },
  {
    name: "keywords",
    type: "array",
    title: "Keywords",
    description: "Add keywords that categorises this page.",
    of: [{ type: "string" }],
    options: {
      layout: "tags",
    },
  },
  {
    title: "UID",
    description:
      "Forms the last part of a URL. Generate from the title of the page. ",
    name: "uid",
    type: "slug",
    options: { source: "title" },
  },
];
export default page;
