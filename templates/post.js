import { createHeaderHtml } from "./header.js";

export const createPostHtml = ({ meta = "", body = "" }) => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <title>${meta.title}</title>
          <meta name="description" content="${meta.description}">
          <link rel="stylesheet" href="../../style.css">
      </head>
      <body>
          <div class="post">
            <header class="post-header"> 
              ${createHeaderHtml(meta)}
            </header>
            <div class="post-content">
              ${body}
            </div> 
          </div> 
      </body>
      </html>`;
