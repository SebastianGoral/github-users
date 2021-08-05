import React, { ChangeEvent, FC } from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  margin: 20px;
  height: 55px;
  font-size: 18px;
  background: #f2f2f2;
  padding: 20px;
  border: 1px solid #e8e8e8;
`;

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input: FC<IProps> = ({ value, onChange }) => {
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };
  return (
    <StyledInput
      role={"input"}
      value={value}
      onChange={handleChange}
      placeholder={"Enter username"}
    />
  );
};
