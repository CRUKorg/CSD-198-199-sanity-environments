import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const mainSite = () => [
  ...S.listItem()
    .title("Main Site")
    .schemaType("page")
    .child(
      ...S.documentList()
        .title("Main Site Pages")
        .filter('_type == "page" && site == "mainSite"')
        .initialValueTemplates([S.initialValueTemplateItem("mainSite")])
    ),
];

export default mainSite;
