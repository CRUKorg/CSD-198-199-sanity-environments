// Page document type.

// Components
import Body from "../../components/richText";
import page from "../shared/page";
export default {
  title: "Main Site - Page",
  name: "main_site_page",
  type: "document",
  fields: [
    ...page,
    {
      title: "Section",
      name: "main_site_section",
      type: "reference",
      to: [{ type: "main_site_section" }],
    },
  ],
};
