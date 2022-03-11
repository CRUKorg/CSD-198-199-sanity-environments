import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const raceForLife = () =>
  S.listItem()
    .title("Race for life")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Race for life")
        .items([
          ...S.documentTypeListItems().filter(
            (item) =>
              item.getId() == "race_for_life_page" ||
              item.getId() == "race_for_life_section"
          ),
        ])
    );
export default raceForLife;
