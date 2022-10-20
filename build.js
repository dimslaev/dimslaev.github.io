import fs from "fs";
import { markdown } from "./utils/markdown.js";
import { createPostHtml } from "./templates/post.js";
import { createPreviewHtml } from "./templates/preview.js";
import { minify } from "html-minifier";

const options = {
  minify: false,
};

const savePost = (postDir, html) => {
  const outputFile = postDir + "/index.html";
  fs.writeFileSync(outputFile, html, "utf8");
  console.log("Created " + outputFile);
};

const getPostMeta = (postDir) => {
  const data = fs.readFileSync(postDir + "/index.json", "utf8");
  return JSON.parse(data);
};

const getPostBody = async (postDir) => {
  const data = fs.readFileSync(postDir + "/index.md", "utf8");
  return await markdown.render(data);
};

const buildPosts = async (dir) => {
  const postDirs = fs.readdirSync(dir);

  for (let postDir of postDirs) {
    if (postDir.startsWith(".")) continue;
    postDir = dir + "/" + postDir;
    const meta = getPostMeta(postDir);
    const body = await getPostBody(postDir, meta);
    const html = createPostHtml({ meta, body });
    savePost(postDir, options.minify ? minify(html) : html);
  }
};

const buildPreviews = (dir) => {
  const postDirs = fs
    .readdirSync(dir)
    .sort((a, b) => Date.parse(a.published) - Date.parse(b.published));

  let previewsHtml = "";
  for (let postDir of postDirs) {
    if (postDir.startsWith(".")) continue;
    postDir = dir + "/" + postDir;
    const meta = getPostMeta(postDir);
    console.log(meta);
    previewsHtml += createPreviewHtml({ meta });
  }

  fs.writeFileSync("./previews.html", previewsHtml, "utf8");
};

(async function () {
  console.log("Starting build...");

  await buildPosts("./posts");

  buildPreviews("./posts");

  console.log("Done");
})();
