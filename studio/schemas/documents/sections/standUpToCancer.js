import { MdLink } from "react-icons/md";

export default {
  name: "stand_up_to_cancer_section",
  type: "document",
  title: "Stand Up - Section",
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
          type: "stand_up_to_cancer_section",
        },
      ],
    },
    {
      name: "page",
      type: "reference",
      description: "Select the landing page for this section.",
      to: [
        {
          type: "stand_up_to_cancer_page",
        },
      ],
    },
  ],
};
