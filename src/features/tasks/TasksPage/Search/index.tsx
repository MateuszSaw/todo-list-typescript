import React from "react";
import Input from "../../Input";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters"
import searchQueryParamName from "../../searchQueryParamName";
import searchParam from "../../searchQueryParamName";

const Search = () => {

  const query = useQueryParameter({key: searchParam});
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target}: React.ChangeEvent<HTMLInputElement>): void => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined
    })
  };

  return (
    <Wrapper>
      <Input
        placeholder="filtruj zadania"
        value = {query || ""}
        onChange={onInputChange}
    />
    </Wrapper>
  )
};

export default Search;