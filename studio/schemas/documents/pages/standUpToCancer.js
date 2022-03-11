// Page document type.

// Components
import Body from "../../components/richText";
import page from "../shared/page";
export default {
  title: "Stand Up To Cancer - Page",
  name: "stand_up_to_cancer_page",
  type: "document",
  fields: [
    ...page,
    {
      title: "Section",
      name: "stand_to_to_cancer_section",
      type: "reference",
      to: [{ type: "stand_to_to_cancer_section" }],
    },
  ],
};
