export const createHeaderHtml = (meta) => `
    <h1>${meta.title}</h1> 
    <p>${new Date(Date.parse(meta.published)).toLocaleDateString("en-GB")}</p> 
    `;
