import React, { FC } from "react";
import styled from "@emotion/styled";
import StarIcon from "@material-ui/icons/Star";

const Wrapper = styled.a`
  text-decoration: none;
  color: black;
  &:active {
    color: black;
  }
  min-height: 120px;
  margin: 10px 0 0 20px;
  background: #e0e0e0;
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  max-width: 350px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.div`
  font-size: 18px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 20px;
`;

const StyledStar = styled(StarIcon)`
  && {
    font-size: 25px;
  }
`;

interface IProps {
  title?: string;
  url?: string;
  description?: string;
  stars?: number;
}

export const RepositoryBadge: FC<IProps> = ({
  title = "Repository title",
  description = "Repository desc",
  stars,
  url,
}) => {
  return (
    <Wrapper href={url} target="_blank">
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
      <Stars>
        <div data-testid={"stars"}>{stars}</div>
        <StyledStar />
      </Stars>
    </Wrapper>
  );
};
