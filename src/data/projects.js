import projectMetadata from "./project-meta.json";

export const projects = projectMetadata.map(({ shareImage, ...project }) => ({
  ...project,
  image: `/share-images/${shareImage}`,
}));

export const featuredProject = projects.find((project) => project.featured);
export const selectedWork = projects.filter((project) =>
  ["classiq", "ghana-job-search", "ykg-bookshop"].includes(project.slug),
);
