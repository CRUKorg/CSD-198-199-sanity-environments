import { MdLink } from "react-icons/md";

export default {
  name: "mainsite_section",
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
      name: "section",
      type: "reference",
      description: "Select the parent section.",
      to: [
        {
          type: "main_site_section",
        },
      ],
    },
    {
      name: "page",
      type: "reference",
      description: "Select the landing page for this section.",
      to: [
        {
          type: "mainsite_page",
        },
      ],
    },
  ],
};
