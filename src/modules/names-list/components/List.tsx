import styled from "@emotion/styled";

interface Props {
  data: string[];
}

export const List = ({ data }: Props) => (
  <NamesListWrapper>
    <ListTitle>Names:</ListTitle>
    {data.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </NamesListWrapper>
);

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
