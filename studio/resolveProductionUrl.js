const previewSecret =
  "sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu";

export default function resolveProductionUrl(doc) {
  const localUrl = `http://localhost:3000`;

  let remoteUrl = "";

  switch (doc._type) {
    case "main_site_page":
      remoteUrl = `https://csd-198-199-mainsite.vercel.app/`;
      break;
    case "race_for_life_page":
      remoteUrl = `https://csd-198-199-raceforlife.vercel.app/`;
      break;
    case "stand_up_to_cancer_page":
      remoteUrl = `https://csd-198-199-standuptocancer.vercel.app/`;
      break;
  }

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.uid?.current ?? `/`);

  return previewUrl.toString();
}
