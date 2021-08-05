import React, { FC } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  color: darkred;
  margin: auto;
`;

interface IProps {
  itemName: string;
}

export const NoElements: FC<IProps> = ({ itemName }) => {
  return <Wrapper>There is no {itemName}</Wrapper>;
};
