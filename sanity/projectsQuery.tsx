import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    photo {
    asset->{
      url
    }
  },
    feature,
    category,
    technology,
    livelink,
    clientlink,
    serverlink,
    "slug": slug.current
  }
`;

export const projectDetailQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    photo,
    feature,
    category,
    technology,
    livelink,
    clientlink,
    serverlink,
    "slug": slug.current
  }
`;
