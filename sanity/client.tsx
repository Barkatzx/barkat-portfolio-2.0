import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not defined!");
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("NEXT_PUBLIC_SANITY_DATASET is not defined!");
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // required!
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-01-01", // use current date
  useCdn: false, // always fetch fresh data
});

// Image builder helper
interface SanityImageSource {
  asset: {
    _ref: string;
    _type: string;
  };
  [key: string]: unknown;
}

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source);
