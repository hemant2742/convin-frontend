import React from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BucketsTab from "./components/BucketsTab";
import CardsTab from "./components/CardsTab";
import HistoryTab from "./components/HistoryTab";
import { setCurrentTab } from "./reducers/historySlice";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 2rem 4rem;
  .ant-tabs-tab-btn {
    font-size: 2rem;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const tabKey = useSelector((state) => state.history.tabKey);
  return (
    <StyledTabs
      defaultActiveKey={tabKey}
      centered
      onChange={(key) => {
        dispatch(setCurrentTab(key));
      }}
    >
      <TabPane tab="Buckets" key="1">
        <BucketsTab />
      </TabPane>
      <TabPane tab="Cards" key="2">
        <CardsTab />
      </TabPane>
      <TabPane tab="History" key="3">
        <HistoryTab />
      </TabPane>
    </StyledTabs>
  );
};
export default App;
