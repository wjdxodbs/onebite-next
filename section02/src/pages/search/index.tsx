import { useRouter } from "next/router";
import React from "react";

const Search = () => {
  const router = useRouter();

  const { q } = router.query;

  return <div>Search {q}</div>;
};

export default Search;
