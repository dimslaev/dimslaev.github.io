export const createPreviewHtml = ({ meta }) => `
    <article class="preview">
        <header class="post-header"> 
        <h1>${meta.title}</h1> 
        <p>${new Date(Date.parse(meta.published)).toLocaleDateString(
          "en-GB"
        )}</p> 
        </header>
    </article>`;
