import React, { useState, useEffect, useRef } from "react";
import itemsJsPackage from "itemsjs";
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
import { FormDialog } from "./components/FormDialog";
import { ConfirmDialog } from "./components/ConfirmDialog";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Stack from "@mui/joy/Stack";

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

const initialItemData = {
  title: "",
  url: "",
  description: "",
  tags: [],
};

const getCategoryTags = (tags) => {
  return MAIN_TAGS.map((key) => ({
    key,
    doc_count: tags.find((it) => it.key === key)?.doc_count || 0,
  }));
};

export const App = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("Pinned");
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [editItemDialogOpen, setEditItemDialogOpen] = useState(false);
  const [deleteItemDialogOpen, setDeleteItemDialogOpen] = useState(false);
  const [editItemInitialData, setEditItemInitialData] = useState({});
  const [deleteItemData, setDeleteItemData] = useState(null);

  const itemsJS = useRef({});

  const fetchData = () => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        const data = JSON.parse(req.responseText);
        itemsJS.current = itemsJsPackage(data, itemsJsConfig);
        setData(data);
      }
    };

    req.open(
      "GET",
      "https://api.jsonbin.io/v3/b/6381e5a165b57a31e6c4d3d9/latest?meta=false",
      true
    );
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$/K/4j.3Vui9Dih2bEbbs1OGQNd8gJJQ.sAXWkiW4OYMQPib4v5RcW"
    );
    req.send();
  };

  const updateData = (item, deleteItem = false) => {
    let req = new XMLHttpRequest();

    const itemExists = data.some(({ _id }) => _id === item._id);

    const newData = itemExists
      ? deleteItem
        ? data.filter((it) => it._id !== item._id)
        : data.map((it) => (it._id === item._id ? item : it))
      : [...data, item];

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        setData(newData);
        itemsJS.current = itemsJsPackage(newData, itemsJsConfig);
      }
    };

    req.open(
      "PUT",
      "https://api.jsonbin.io/v3/b/6381e5a165b57a31e6c4d3d9 ",
      true
    );

    req.setRequestHeader("Content-Type", "application/json");

    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$/K/4j.3Vui9Dih2bEbbs1OGQNd8gJJQ.sAXWkiW4OYMQPib4v5RcW"
    );

    req.send(JSON.stringify(newData));
  };

  const onClickEditItem = (item) => {
    setEditItemInitialData(item);
    setEditItemDialogOpen(true);
  };

  const onClickDeleteItem = (item) => {
    setDeleteItemDialogOpen(true);
    setDeleteItemData(item);
  };

  useEffect(fetchData, []);

  useEffect(() => {
    if (data.length === 0 || !itemsJS.current) return;

    const searchQuery = itemsJS.current.search({
      ...DEFAULT_SEARCH,
      query: search,
      filters: {
        tags: selectedTag ? [selectedTag] : [],
      },
    });

    setItems(searchQuery.data.items);

    const tagsQuery = itemsJS.current.aggregation({
      name: "tags",
      per_page: 100,
      query: search,
    });

    setTags(getCategoryTags(tagsQuery.data.buckets));
    setAllTags(tagsQuery.data.buckets);
  }, [data.length, search, selectedTag]);

  const previousSearchRef = useRef("");
  useEffect(() => {
    if (search && search !== previousSearchRef.current && selectedTag) {
      previousSearchRef.current = search;
      setSelectedTag("");
    }
  }, [search]);

  return (
    <AppContainer>
      <PageContainer>
        <PageSidebar>
          <Stack spacing={3}>
            <Hello />
            <BookmarksSheet>
              <Tags
                tags={tags}
                setSelectedTag={setSelectedTag}
                selectedTag={selectedTag}
              />
              <SearchBar search={search} setSearch={setSearch} />
            </BookmarksSheet>
          </Stack>
        </PageSidebar>
        <PageContent>
          <ItemsList
            items={items}
            onEdit={onClickEditItem}
            onDelete={onClickDeleteItem}
            setAddItemDialogOpen={setAddItemDialogOpen}
          />
        </PageContent>
        <FormDialog
          title="Edit bookmark"
          open={editItemDialogOpen}
          setOpen={setEditItemDialogOpen}
          onSubmit={updateData}
          tags={allTags}
          initialData={editItemInitialData}
        />
        <FormDialog
          title="Add new bookmark"
          open={addItemDialogOpen}
          setOpen={setAddItemDialogOpen}
          onSubmit={updateData}
          tags={allTags}
          initialData={initialItemData}
        />
        <ConfirmDialog
          open={deleteItemDialogOpen}
          setOpen={setDeleteItemDialogOpen}
          title="Delete bookmark?"
          onConfirm={() => {
            updateData(deleteItemData, true);
          }}
        />
      </PageContainer>
    </AppContainer>
  );
};

export default App;
