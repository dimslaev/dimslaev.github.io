import React from "react";
import itemsJsPackage from "itemsjs";
import data from "./data.json";

const itemsJsConfig = {
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
};

export const App = () => {
  const [items, setItems] = React.useState([]);
  const { current: itemsJS } = React.useRef(
    itemsJsPackage(data, itemsJsConfig)
  );
  const listRef = React.useRef();

  React.useEffect(() => {
    if (!itemsJS) return;

    const query = itemsJS.search({
      per_page: 4,
      sort: "title_asc",
      // full text search
      // query: 'forrest gump',
      // filters: {
      //   tags: ["tag 1"],
      // },
    });

    setItems(query.data.items);
  }, [itemsJS.current]);

  return (
    <main>
      <ul className="list" ref={listRef}>
        {items.map((item, i) => (
          <li key={`item-${i}`}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
