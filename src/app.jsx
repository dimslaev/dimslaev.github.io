import React, { useState, useEffect, useRef } from "react";
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
import { BookmarksSheet } from "./components/BookmarksSheet";
import { Hello } from "./components/Hello";
import MAIN_TAGS from "./tags.json";

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
      conjunction: false,
    },
  },
  searchableFields: ["title"],
};

const PER_PAGE = 100;

const DEFAULT_SEARCH = {
  per_page: PER_PAGE,
  sort: "title_asc",
};

const getCategoryTags = (tags) => {
  return MAIN_TAGS.map((key) => ({
    key,
    doc_count: tags.find((it) => it.key === key)?.doc_count || 0,
  }));
};

export const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("Pinned");
  const { current: itemsJS } = useRef(itemsJsPackage(data, itemsJsConfig));

  useEffect(() => {
    if (!itemsJS) return;

    const searchQuery = itemsJS.search({
      ...DEFAULT_SEARCH,
      query: search,
      filters: {
        tags: [selectedTag],
      },
    });

    setItems(searchQuery.data.items);

    const tagsQuery = itemsJS.aggregation({
      name: "tags",
      per_page: 100,
      query: search,
    });

    setTags(getCategoryTags(tagsQuery.data.buckets));
  }, [search, selectedTag]);

  useEffect(() => {
    if (!itemsJS) return;
  }, [search]);

  return (
    <AppContainer>
      <PageContainer>
        <PageSidebar>
          <Hello />
          <BookmarksSheet>
            <Tags
              tags={tags}
              setSelectedTag={setSelectedTag}
              selectedTag={selectedTag}
            />
            <SearchBar search={search} setSearch={setSearch} />
          </BookmarksSheet>
        </PageSidebar>
        <PageContent>
          <ItemsList items={items} />
        </PageContent>
      </PageContainer>
    </AppContainer>
  );
};

export default App;
