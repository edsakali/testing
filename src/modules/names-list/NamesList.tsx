import { useHistory } from "react-router-dom";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Input } from "../../components/ui/Input";
import styled from "@emotion/styled";
import { useQuery } from "../../core/hooks/useQuery";
import { useDebounceValue } from "../../core/hooks/useDebounceValue";
import { getMockData } from "../../api/getMockData";
import { Spinner } from "../../components/Spiner";
import { List } from "./components/List";

const FIELD_NAME = "search";

export const NamesList = () => {
  const query = useQuery();
  const { push } = useHistory();
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const searchQuery = useMemo(() => query.get(FIELD_NAME) || "", [query]);
  const debounceSearch = useDebounceValue<string | null>(searchQuery);

  useEffect(() => {
    setLoading(true);
    getMockData(debounceSearch || "").then((data) => {
      setData(data);
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
      {loading ? <Spinner /> : <List data={data} />}
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
