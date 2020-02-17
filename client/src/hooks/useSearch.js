import { useState } from "react";


export const useSearch = (initialValues, players) => {
  const [values, setValues] = useState(initialValues);
  let [searchValue, setSearchValue] = useState([]);
  const handleChanges = e => {
    setValues(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const queries = players.filter(player => {
      return player.name.includes(values);
    })
    console.log("this is queries", queries);
    setSearchValue(searchValue = queries);
    console.log("this is searchValue", searchValue);
  };
  return [values, handleChanges, handleSubmit, searchValue]
}; 