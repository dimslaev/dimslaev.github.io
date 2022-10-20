import { createHeaderHtml } from "./header.js";

export const createPreviewHtml = ({ meta }) => `
    <div class="preview">
    <header class="preview-header"> 
        ${createHeaderHtml(meta)}
    </header>
    </div>`;
