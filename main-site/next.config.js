/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    MY_TEST_VARIABLE: process.env.MY_TEST_VARIABLE,
  },
};

module.exports = nextConfig;
