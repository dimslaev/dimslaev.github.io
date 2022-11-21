import data from "./data.json";
import itemsjsPackage from "itemsjs";

const itemsjs = itemsjsPackage(data, {
  sortings: {
    title_asc: {
      field: "title",
      order: "asc",
    },
  },
  aggregations: {
    tags: {
      name: "Tags",
      size: 10,
      conjunction: false,
    },
  },
  searchableFields: ["name", "tags"],
});

const articles = itemsjs.search({
  per_page: 4,
  sort: "title_asc",
  // full text search
  // query: 'forrest gump',
  // filters: {
  //   tags: ["tag 1"],
  // },
});

/**
 * get list of top tags
 */
const top_tags = itemsjs.aggregation({
  name: "tags",
  per_page: 10,
});
