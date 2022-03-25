import { MdLink } from "react-icons/md";
import { resolveDesk } from "../util";
export default {
  name: "section",
  type: "document",
  title: "Section",
  icon: MdLink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "landingPage",
      title: "Landing Page",
      type: "reference",
      to: [{ type: "page" }],
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
    {
      name: "sectionID",
      title: "Section ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
