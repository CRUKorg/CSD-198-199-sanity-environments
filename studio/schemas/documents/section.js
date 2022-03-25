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
          // if the site field isn't set yet, grab the site using resolveDesk
          if (!document.hasOwnProperty("site")) {
            return {
              filter: "_type == $pageType && site == $site",
              params: {
                site: resolveDesk(window.location.pathname),
                pageType: "section",
              },
            };
          }

          //otherwise assume site field set and use that.
          return {
            filter: "_type == $pageType && site == $site",
            params: { site: document.site, pageType: "section" },
          };
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
          if (!document.hasOwnProperty("site")) {
            return {
              filter: "_type == $pageType && site == $site",
              params: {
                site: resolveDesk(window.location.pathname),
                pageType: "page",
              },
            };
          }

          return {
            filter: "_type == $pageType && site == $site",
            params: { site: document.site, pageType: "page" },
          };
        },
      },
    },
  ],
};
