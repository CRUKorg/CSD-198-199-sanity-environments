import { MdLink } from "react-icons/md";
import { resolveDesk } from "../util";
export default {
  name: "section",
  type: "document",
  title: "Main Site - Section",
  icon: MdLink,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Site",
      name: "site",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: () => {
        const desk = resolveDesk(window.location.pathname);
        return desk;
      },
    },
    {
      name: "section",
      type: "reference",
      description: "Select the parent section.",
      to: [
        {
          type: "section",
        },
      ],
      options: {
        filter: ({ document }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          if (document.site) {
            return {
              filter: "_type == $pageType && site == $site",
              params: { site: document.site, pageType: "section" },
            };
          } else {
            return {};
          }
        },
      },
    },
    {
      name: "page",
      type: "reference",
      description: "Select the landing page for this section.",
      to: [
        {
          type: "page",
        },
      ],
      options: {
        filter: ({ document }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          console.log(document);
          if (document.testSite) {
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
  ],
};
