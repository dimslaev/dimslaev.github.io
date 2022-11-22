import React from "react";
import itemsJsPackage from "itemsjs";
import data from "./data.json";
import { AppContainer } from "./components/AppContainer";
import {
  PageContainer,
  PageSidebar,
  PageContent,
} from "./components/PageContainer";
import { ItemsList } from "./components/ItemsList";
import { SearchBar } from "./components/SearchBar";
import { Tags } from "./components/Tags";

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
  searchableFields: ["title"],
};

const PER_PAGE = 10;

const DEFAULT_SEARCH = {
  per_page: PER_PAGE,
  sort: "title_asc",
};

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const { current: itemsJS } = React.useRef(
    itemsJsPackage(data, itemsJsConfig)
  );

  // React.useEffect(() => {
  //   if (!itemsJS) return;

  //   const query = itemsJS.search({
  //     ...DEFAULT_SEARCH,
  //     // full text search
  //     // query: 'forrest gump',
  //     // filters: {
  //     //   tags: ["tag 1"],
  //     // },
  //   });

  //   setItems(query.data.items);
  // }, [itemsJS.current]);

  React.useEffect(() => {
    if (!itemsJS) return;

    const query = itemsJS.search({
      ...DEFAULT_SEARCH,
      query: search || undefined,
      filters: {
        tags: selectedTags,
      },
    });

    console.log(search);

    setItems(query.data.items);
  }, [search, selectedTags.length]);

  React.useEffect(() => {
    if (!itemsJS) return;

    const query = itemsJS.aggregation({
      name: "tags",
      per_page: 100,
      query: search,
    });

    setTags(query.data.buckets);
  }, [search]);

  const onSelectTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((it) => it !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  return (
    <AppContainer>
      <PageContainer>
        <PageSidebar>
          <SearchBar search={search} setSearch={setSearch} />
          <Tags
            tags={tags}
            selectedTags={selectedTags}
            onSelectTag={onSelectTag}
            clearTags={clearTags}
          />
        </PageSidebar>
        <PageContent>
          <ItemsList items={items} />
        </PageContent>
      </PageContainer>
    </AppContainer>
  );
};

export default App;
