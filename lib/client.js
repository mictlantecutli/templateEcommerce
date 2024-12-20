import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // projectId: "tr7k5env",
  dataset: "production",
  apiVersion: "2022-11-27",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source || !source.asset || !source.asset._ref) return ""; // Verifica si el objeto de imagen es válido
  return builder.image(source).url();
};
