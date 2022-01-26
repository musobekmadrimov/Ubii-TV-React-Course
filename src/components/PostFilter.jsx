import React from "react";
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div
      style={{
        marginBottom: "80px",
        display: "flex",
        flexDirection: "column",
        width: "150px"
      }}
    >
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue="Sort by ..."
        options={[
          { value: "title", name: "Sort by name" },
          { value: "body", name: "Sort by description" }
        ]}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}
