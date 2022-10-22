import { createHeadHtml } from "./head.js";
import { createFooterHtml } from "./footer.js";

export const createPostHtml = ({ meta = {}, body = "" }) => `
  ${createHeadHtml({ meta })}
      <article class="post">
        <header class="post-header"> 
          <h1>${meta.title}</h1> 
          <p>${new Date(Date.parse(meta.published)).toLocaleDateString(
            "en-GB"
          )}</p> 
        </header>
        <div class="post-content">
          ${body}
        </div> 
      </article> 
  ${createFooterHtml({ meta })}`;
