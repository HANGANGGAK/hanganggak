import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {useQueryClient} from "react-query";

const Search = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    queryClient.setQueryData("search", search)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div style={{ position: "fixed" }}>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={handleKeyUp}/>
      <button onClick={handleSearch}>검색</button>
    </div>
  )
}

export default Search;