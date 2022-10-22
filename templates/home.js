import { createHeadHtml } from "./head.js";
import { createFooterHtml } from "./footer.js";

export const createHomeHtml = ({ meta = {}, posts = "" }) => `
  ${createHeadHtml({ meta })}
    <section class="articles">
      ${posts}
    </section> 
  ${createFooterHtml({ meta })}`;
