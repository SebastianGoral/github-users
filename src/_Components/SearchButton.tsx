import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  margin: 0 20px;
  min-height: 55px;
  font-size: 18px;
  background: #4e9bd5;
  border: none;
  color: white;
  border-radius: 4px;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

interface IProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const SearchButton: FC<IProps> = ({ onClick, isDisabled }) => {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      Search
    </StyledButton>
  );
};
