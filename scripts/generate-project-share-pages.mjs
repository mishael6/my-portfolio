import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://mishaelsix.netlify.app";
const projects = JSON.parse(
  await readFile(resolve(root, "src/data/project-meta.json"), "utf8"),
);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

await mkdir(resolve(root, "public/share-images"), { recursive: true });

for (const project of projects) {
  const imagePath = `/share-images/${project.shareImage}`;
  const previewPath = `/share/${project.slug}/`;
  const previewUrl = `${siteUrl}${previewPath}`;
  const imageUrl = `${siteUrl}${imagePath}`;
  const destination = project.liveUrl || project.githubUrl || `${siteUrl}/projects`;
  const title = `${project.title} | Mishael Osman Mensah`;
  const description = project.outcome;
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${previewUrl}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${escapeHtml(`${project.title} project preview`)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="canonical" href="${previewUrl}" />
    <title>${escapeHtml(title)}</title>
    <style>
      :root { color-scheme: dark; font-family: Inter, Montserrat, Arial, sans-serif; background: #101010; color: #f7f5f2; }
      * { box-sizing: border-box; }
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 28px; background: radial-gradient(ellipse at 80% 10%, rgba(189,108,53,.16), transparent 38%), #101010; }
      main { width: min(100%, 900px); overflow: hidden; border: 1px solid rgba(255,255,255,.12); border-radius: 24px; background: rgba(255,255,255,.04); box-shadow: 0 24px 90px rgba(0,0,0,.36); }
      img { display: block; width: 100%; max-height: 62vh; object-fit: cover; background: #191919; }
      section { padding: clamp(24px, 5vw, 44px); }
      p { margin: 0 0 12px; color: #c4c0ba; line-height: 1.7; }
      .eyebrow { color: #d38d60; font-size: .75rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
      h1 { margin: 8px 0 12px; font-size: clamp(2rem, 6vw, 3.5rem); line-height: 1.05; letter-spacing: -.045em; }
      .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
      a { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; padding: 0 18px; border: 1px solid rgba(255,255,255,.2); border-radius: 999px; color: inherit; font-size: .9rem; font-weight: 650; text-decoration: none; }
      a.primary { border-color: #c97843; background: #c97843; color: #140d08; }
      a:hover { transform: translateY(-1px); }
    </style>
  </head>
  <body>
    <main>
      <img src="${imagePath}" alt="${escapeHtml(`${project.title} website screenshot`)}" />
      <section>
        <p class="eyebrow">Selected project</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p>${escapeHtml(description)}</p>
        <p>Built by Mishael Osman Mensah · DevSix Solutions</p>
        <div class="actions">
          <a class="primary" href="${escapeHtml(destination)}" target="_blank" rel="noopener noreferrer">${project.liveUrl ? "Visit project" : project.githubUrl ? "View source" : "Explore my work"}</a>
          <a href="${siteUrl}/projects">More projects</a>
        </div>
      </section>
    </main>
  </body>
</html>
`;

  const sourceImage = resolve(root, "src/assets", project.shareImage);
  const targetImage = resolve(root, "public/share-images", project.shareImage);
  const targetPage = resolve(root, "public", previewPath.slice(1), "index.html");

  await cp(sourceImage, targetImage);
  await mkdir(dirname(targetPage), { recursive: true });
  await writeFile(targetPage, page, "utf8");
}
