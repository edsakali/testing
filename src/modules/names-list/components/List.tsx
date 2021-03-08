import styled from "@emotion/styled";

interface Props {
  items: string[];
}

export const List = ({ items }: Props) => {
  return (
    <NamesListWrapper>
      <ListTitle>Names:</ListTitle>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </NamesListWrapper>
  );
};

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
