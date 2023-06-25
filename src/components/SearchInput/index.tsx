import React, { useState } from "react";

import {Input} from './style'

interface SearchInputProps {
    onSearch: (searchText: string) => void;
  }

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
      onSearch(e.target.value);
    };
  
    return (
      <Input
        type="text"
        placeholder="Buscar por título"
        value={searchText}
        onChange={handleChange}
      />
    );
  };
  
  export default SearchInput; 