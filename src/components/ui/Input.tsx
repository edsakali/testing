import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, value, label, onChange }: Props) => {
  return (
    <Label htmlFor={name}>
      {label}
      <StyledInput name={name} value={value} id={name} onChange={onChange} />
    </Label>
  );
};

const Label = styled.label`
  max-width: 360px;
  width: 100%;
  margin-top: 18px;
`;
const StyledInput = styled.input`
  width: 100%;
  margin-top: 4px;
  padding: 8px 12px;
  border: 1px solid gray;
  border-radius: 4px;
  background: white;

  &:hover {
    background: #d1d1d1;
  }

  &:focus {
    outline: none;
  }
`;
