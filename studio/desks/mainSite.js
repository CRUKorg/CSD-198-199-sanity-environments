import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const mainSite = () =>
  S.listItem()
    .title("Main Site")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Main Site")
        .items([
          ...S.documentTypeListItems().filter(
            (item) =>
              item.getId() == "main_site_page" ||
              item.getId() == "main_site_section"
          ),
        ])
    );
export default mainSite;
