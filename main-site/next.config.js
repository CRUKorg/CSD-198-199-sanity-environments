
const nextConfig = {
  /* config options here */
  env: {
    MY_TEST_VARIABLE: "Test 123456789",
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_PREVIEW_SECRET: process.env.SANITY_API_TOKEN,
  }
}

module.exports = nextConfig
