// Page document type.

// Components
import Body from "../../components/richText";
import page from "../shared/page";
export default {
  title: "Race for Life - Page",
  name: "race_for_life_page",
  type: "document",
  fields: [
    ...page,
    {
      title: "Section",
      name: "race_for_life_section",
      type: "reference",
      to: [{ type: "race_for_life_section" }],
    },
  ],
};
