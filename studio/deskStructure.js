// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import mainSite from "./desks/mainSite";
import raceForLife from "./desks/raceForLife";
import standUpToCancer from "./desks/standUpToCancer";
import sections from "./desks/sections";
export default () =>
  S.list()
    .title("Websites")
    .items([mainSite(), raceForLife(), standUpToCancer(), sections()]);
