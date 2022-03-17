import Body from "../../components/richText";
//page fields
import { resolveDesk } from "../../util";
const page = [
  {
    title: "Site",
    name: "site",
    type: "string",
    readOnly: true,
  },
  {
    title: "Test Field",
    name: "testField",
    type: "string",
    readOnly: true,
    initialValue: () => {
      /*console.log(window.location.pathname.split(";")[0].split("/").pop());
      if (window.location.pathname) {
        const deskNameParam = window.location.pathname.split(";");
        let deskName = "";
        if (deskNameParam.length) {
          deskName = deskNameParam[0].split("/").pop();
          return deskName;
        } else {
          throw "Error!";
        }
      } else {
        throw "Error!";
      }*/
      const desk = resolveDesk(window.location.pathname);
      if (!desk) {
        throw "Error!";
      }
      return desk;
      //return "";
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
            filter: "_type == $pageType && site == $mySite",
            params: { mySite: document.site, pageType: "page" },
          };
        } else {
          return;
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
