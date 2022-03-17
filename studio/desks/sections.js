import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const sections = () =>
  S.listItem()
    .title("Sections")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Sections")
        .items([
          ...S.documentTypeListItems().filter(
            (item) => item.getId() == "section"
          ),
        ])
    );

export default sections;
