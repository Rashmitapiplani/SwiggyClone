import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setsearchText] = useState([]);

  const handleSearch = (e) => {
    console.log(e.target?.value);
    setsearchText(e?.target?.value);
  };
  // useEffect(()=>{},[searchText])
  useEffect()
  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        name="text"
        className="border border-gray-300 p-2 rounded w-5/6 ml-16"
        onChange={handleSearch}
        value={searchText} // ✅ controlled component
      />
    </div>
  );
};

export default Search;
