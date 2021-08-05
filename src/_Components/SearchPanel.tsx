import React, { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "./Input";
import { SearchButton } from "./SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { InfoPanel } from "./InfoPanel";
import { ExpandablePanel } from "./ExpandablePanel";
import { loadUsers } from "../_State/Users/thunks";
import { usersSelector } from "../_State/Users/state";
import { NoElements } from "./NoElements";
import { LoadingIndicator } from "./LoadingIndicator";
const Wrapper = styled.div`
  width: 500px;
  height: 700px;
  background: white;
  display: flex;
  flex-direction: column;
`;

const UsersContainer = styled.div`
  overflow-y: auto;
`;

export const SearchPanel = () => {
  const [inputValue, setInputValue] = useState("");
  const [infoLabel, setInfoLabel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alreadySearched, setAlreadySearched] = useState(false);
  const { users } = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleClick = async () => {
    setIsLoading(true);
    setInfoLabel(inputValue);
    setAlreadySearched(true);
    await dispatch(loadUsers(inputValue));
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Input value={inputValue} onChange={setInputValue} />
      <SearchButton isDisabled={!inputValue} onClick={handleClick} />
      {infoLabel && <InfoPanel label={infoLabel} />}
      {isLoading && <LoadingIndicator />}
      {users.length > 0 && !isLoading && (
        <UsersContainer>
          {users.map(({ login }) => (
            <ExpandablePanel key={login} userName={login} />
          ))}
        </UsersContainer>
      )}
      {!(users.length > 0) && !isLoading && alreadySearched && (
        <NoElements itemName="user" />
      )}
    </Wrapper>
  );
};
