const urlMetadata = require("url-metadata");
const data = require("./src/data.json");

const fs = require("fs");

require("events").EventEmitter.defaultMaxListeners = 15;

const getMeta = async () => {
  const newData = [];
  await Promise.all(
    data.map(async (item) => {
      let meta, date, description, error;
      try {
        meta = await urlMetadata(item.url);
        description = meta?.description || meta?.jsonld?.description;
        date = meta?.jsonld?.dateModified;
      } catch (e) {
        error = e.code;
      }

      if (error === "ENOTFOUND") return;

      if (description) item.description = description;
      if (date) item.date = date;
      newData.push(item);
    })
  );
  return newData;
};

(async () => {
  const newData = await getMeta();
  fs.writeFileSync("./newData.json", JSON.stringify(newData));
})();
