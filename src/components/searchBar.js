import React, { useState } from "react";
import { useFlexSearch } from 'react-use-flexsearch';

const unFlattenResults = results =>
results.map(post => {
  const { date, slug, tags, title } = post;
  return { slug, frontmatter: { title, date, tags } };
// https://www.emgoto.com/gatsby-search/ 09/22/2021
    });


function SearchBar({posts}) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    // const searchResults = useFlexSearch(searchQuery, data.localSearchPages.index, data.localSearchPages.store);
    // const results = unFlattenResults(results);
    const searchBar = React.createRef()
  return (
    <input 
        className="w-1/2 px-2 my-2 divide-x divide-light-blue-400 border-r bg-transparent inline-block outline-none"
        placeholder="Search..."
        name="search"
        type="text"
        value={searchQuery}
        onInput={ (evt) => setSearchQuery(evt.target.value) }
        ref={searchBar}
    />
  );
}

export default SearchBar;