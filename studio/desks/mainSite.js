import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const mainSite = () =>
  S.listItem()
    .title("Main site")
    .id("mainSite")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Main site!")
        .id("mainSiteChild")
        .items([
          S.listItem()
            .title("All Content")
            .child(
              S.documentTypeList("page")
                .title("All mainsite pages")
                .filter('site == "mainSite" && _type== "page"')
            ),
          S.listItem()
            .title("Sections")
            .child(
              S.documentTypeList("section")
                .title("All sections")
                .filter('site == "mainSite" && _type== "section"')
            ),
        ])
    );
export default mainSite;
