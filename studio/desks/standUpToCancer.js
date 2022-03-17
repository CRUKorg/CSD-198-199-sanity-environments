import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const standUpToCancer = () =>
  S.listItem()
    .title("SU2C")
    .schemaType("page")
    .child(
      S.documentList()
        .title("SU2C Pages")
        .filter('_type == "page" && site == "standUpToCancer"')
        .initialValueTemplates([S.initialValueTemplateItem("standUpToCancer")])
    );
export default standUpToCancer;
