import { MdLink } from "react-icons/md";

export default {
  name: "race_for_life_section",
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
          type: "race_for_life_section",
        },
      ],
    },
    {
      name: "page",
      type: "reference",
      description: "Select the landing page for this section.",
      to: [
        {
          type: "race_for_life_page",
        },
      ],
    },
  ],
};
