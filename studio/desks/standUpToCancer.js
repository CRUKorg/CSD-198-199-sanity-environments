import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const standUpToCancer = () =>
  S.listItem()
    .title("Stand Up To Cancer")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Stand Up To Cancer")
        .items([
          ...S.documentTypeListItems().filter(
            (item) =>
              item.getId() == "stand_up_to_cancer_page" ||
              item.getId() == "stand_up_to_cancer_section"
          ),
        ])
    );
export default standUpToCancer;
