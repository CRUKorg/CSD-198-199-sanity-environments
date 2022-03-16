import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const mainSite = () =>
  S.listItem()
    .title("Pages by Main Site section!")
    .schemaType("main_site_page")
    .child(
      S.documentList()
        .title("Main site pages!")
        .filter('_type == "main_site_page" && test_section == "mainSite"')
    );

export default mainSite;
