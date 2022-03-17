import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
export default () =>
  S.listItem()
    .title("Main site")
    .id("mainSiteParent")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Main site!")
        .id("mainSiteChild")
        .items([
          S.listItem()
            .title("All Content")
            .child(
              S.documentList()
                .title("All mainsite pages")
                .filter('_type == "page" && site == "mainSite"')
                .initialValueTemplates([S.initialValueTemplateItem("mainSite")])
            ),
          S.listItem()
            .title("Sections")
            .child(
              S.documentList()
                .title("All sections")
                .filter('_type == "section" && testSite == "mainSite"')
                .initialValueTemplates([
                  S.initialValueTemplateItem("sectionBySite", {
                    siteId: "mainSite",
                  }),
                ])
            ),
        ])
    );
//export default mainSite;
