import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Input } from "../../components/ui/Input";
import { useQuery } from "../../core/hooks/useQuery";
import { useDebounceValue } from "../../core/hooks/useDebounceValue";
import { Spinner } from "../../components/Spiner";
import { List } from "./components/List";
import { getNamesList } from "../../api/getNamesList";

const FIELD_NAME = "search";

export const NamesList = () => {
  const query = useQuery();
  const { push } = useHistory();
  const [namesList, setNamesList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = useMemo(() => query.get(FIELD_NAME) || "", [query]);
  const debounceSearch = useDebounceValue<string | null>(searchQuery);

  useEffect(() => {
    setLoading(true);
    getNamesList(debounceSearch || "").then((items) => {
      setNamesList(items);
      setLoading(false);
    });
  }, [debounceSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    !event.target.value ? push("/") : push(`/?search=${event.target.value}`);
  };

  return (
    <Wrapper>
      <Title>List of names</Title>
      <Input
        value={searchQuery}
        name={FIELD_NAME}
        label={"Search"}
        onChange={handleChange}
      />
      {loading ? <Spinner /> : <List items={namesList} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  padding: 0 12px;
`;

const Title = styled.h1`
  color: #344472;
`;
