export function resolveDesk(path) {
  //console.log(.split(";")[0].split("/").pop());
  let deskName = "";
  if (path) {
    const deskNameParam = path.split(";");
    if (deskNameParam.length) {
      deskName = deskNameParam[0].split("/").pop();
      return deskName;
    }
  }
  return deskName;
}
