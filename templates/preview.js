export const createPreviewHtml = ({ meta, link }) => `
  <a href="${link.href}" target="${link.target}">
    <article class="preview">
        <header class="preview-header"> 
          <h1>${meta.title}</h1> 
          <p>${new Date(Date.parse(meta.published)).toLocaleDateString(
            "en-GB"
          )}</p>
        </header>
        <div class="preview-category ${meta.tags[0]}">
            ${meta.tags[0]}
        <div>
    </article>
  </a>`;
