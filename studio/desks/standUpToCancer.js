import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const standUpToCancer = () =>
  S.listItem()
    .title("Stand Up To Cancer")
    .id("standUpToCancer")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Stand Up To Cancer")
        .id("standUpToCancerChild")
        .items([
          S.listItem()
            .title("All Content")
            .child(
              S.documentTypeList("page")
                .title("All Stand Up To Cancer pages")
                .filter('site == "standUpToCancer" && _type== "page"')
            ),
          S.listItem()
            .title("Sections")
            .child(
              S.documentTypeList("section")
                .title("All sections")
                .filter('site == "standUpToCancer" && _type== "section"')
            ),
        ])
    );
export default standUpToCancer;
