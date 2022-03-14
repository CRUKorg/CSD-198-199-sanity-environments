/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    MY_TEST_VARIABLE: "Test 123456789",
    NEXT_PUBLIC_SANITY_DATASET: "multisite",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "fiebkckn",
    SANITY_API_TOKEN:
      "sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu",
  },
};

module.exports = nextConfig;
