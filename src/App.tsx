import React from "react";
import styled from "@emotion/styled";
import { SearchPanel } from "./_Components/SearchPanel";
import { store } from "./_State/store";
import { Provider } from "react-redux";

const Scene = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
`;
export const App = () => {
  return (
    <Scene>
      <Provider store={store}>
        <SearchPanel />
      </Provider>
    </Scene>
  );
};
