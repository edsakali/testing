import { useHistory } from "react-router-dom";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Input } from "../../components/ui/Input";
import styled from "@emotion/styled";
import { useQuery } from "../../core/hooks/useQuery";
import { useDebounceValue } from "../../core/hooks/useDebounceValue";
import { getMockData } from "../../api/getMockData";

const FIELD_NAME = "search";

export const NamesList = () => {
  const query = useQuery();
  const { push } = useHistory();
  const [data, setData] = useState<string[]>([]);
  const searchQuery = useMemo(() => query.get(FIELD_NAME) || "", [query]);
  const debounceSearch = useDebounceValue<string | null>(searchQuery);

  useEffect(() => {
    getMockData(debounceSearch || "").then((data) => setData(data));
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
      <NamesListWrapper>
        <ListTitle>Names:</ListTitle>
        {data.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </NamesListWrapper>
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

const NamesListWrapper = styled.ul`
  max-width: 700px;
  width: 100%;
  margin: 18px 0;
  border: 1px solid gray;
  & > li {
    padding: 12px;
    list-style-type: none;
    border-bottom: 1px solid gray;
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ListTitle = styled.h2`
  padding: 8px;
  border-bottom: 1px solid gray;
`;
