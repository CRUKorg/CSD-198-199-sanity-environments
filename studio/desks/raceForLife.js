import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const raceForLife = () =>
  S.listItem()
    .title("Race For Life")
    .id("raceForLife")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Race For Life")
        .id("raceForLifeChilid")
        .items([
          S.listItem()
            .title("All Content")
            .child(
              S.documentTypeList("page")
                .title("All Race For Life pages")
                .filter('site == "raceForLife" && _type== "page"')
            ),
          S.listItem()
            .title("Sections")
            .child(
              S.documentTypeList("section")
                .title("All sections")
                .filter('site == "raceForLife" && _type== "section"')
            ),
        ])
    );

export default raceForLife;
