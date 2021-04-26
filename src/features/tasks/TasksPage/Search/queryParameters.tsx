import { useLocation, useHistory } from "react-router-dom";

interface KeyAndValue{
  key: string,
  value?: string,
}

export const useQueryParameter = ({ key }: KeyAndValue): string|null => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }: KeyAndValue) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined){
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  }
}
