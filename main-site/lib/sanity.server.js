// lib/sanity.server.js
import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
console.log(config);
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: 'sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu',
  dataset: 'production',
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
