import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const raceForLife = () =>
  S.listItem()
    .title("Race for Life")
    .schemaType("page")
    .child(
      S.documentList()
        .title("Race for Life Pages")
        .filter('_type == "page" && site == "raceForLife"')
        .initialValueTemplates([S.initialValueTemplateItem("raceForLife")])
    );
export default raceForLife;
