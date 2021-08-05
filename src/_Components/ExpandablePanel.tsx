import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { RepositoryBadge } from "./RepositoryBadge";
import { useDispatch, useSelector } from "react-redux";
import { loadUserRepositories } from "../_State/Users/thunks";
import { LoadingIndicator } from "./LoadingIndicator";
import { IStateWithUsers } from "../_State/Users/model";
import { NoElements } from "./NoElements";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Wrapper = styled.div`
  background: #f2f2f2;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;

const IconWrapper = styled.div``;

const StyledUpIcon = styled(KeyboardArrowUpIcon)`
  && {
    font-size: 45px;
  }
`;
const StyledDownIcon = styled(KeyboardArrowDownIcon)`
  && {
    font-size: 45px;
  }
`;
interface IProps {
  userName: string;
}

export const ExpandablePanel: FC<IProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const repositories = useSelector(
    (state: IStateWithUsers) =>
      state.usersSlice.users.find((user) => user.login === userName)
        ?.repositories
  );
  const dispatch = useDispatch();

  const handleOpen = async () => {
    setIsOpen(!isOpen);
    !isOpen && setIsLoading(true);
    !isOpen && (await dispatch(loadUserRepositories(userName)));
    setIsLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Label>{userName}</Label>
        <IconWrapper onClick={handleOpen}>
          {isOpen ? <StyledUpIcon /> : <StyledDownIcon />}
        </IconWrapper>
      </Wrapper>

      {isLoading && <LoadingIndicator />}
      {isOpen && repositories && repositories.length > 0 && !isLoading && (
        <RepositoryContainer>
          {repositories.map(({ description, title, stars, url }) => (
            <RepositoryBadge
              url={url}
              title={title}
              description={description}
              stars={stars}
            />
          ))}
        </RepositoryContainer>
      )}
      {isOpen && repositories && !(repositories.length > 0) && !isLoading && (
        <NoElements itemName={"repository"} />
      )}
    </Container>
  );
};
