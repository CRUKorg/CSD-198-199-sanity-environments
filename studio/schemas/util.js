export function resolveDesk(pathname) {
  return pathname.match(/\/desk\/([^;]*)/i)?.[1];
}
