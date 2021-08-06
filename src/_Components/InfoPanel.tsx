import React, { FC } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  color: #686868;
  font-size: 18px;
  margin: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

interface IProps {
  label: string;
}

export const InfoPanel: FC<IProps> = ({ label }) => {
  return <Wrapper>Showing users for "{label}"</Wrapper>;
};
