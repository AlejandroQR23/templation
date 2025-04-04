import React, { useCallback, useMemo, useState } from "react";
import { makeStyles, SelectTabData, Tab, TabList, Tag } from "@fluentui/react-components";
import { AttachRegular, BookCompassRegular } from "@fluentui/react-icons";
import useTabStore from "../stores/useTabStore";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
  tabList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  tabWithTag: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
});

const Tabs = () => {
  const styles = useStyles();

  const tabSelected = useTabStore((state) => state.tabSelected);
  const setTabSelected = useTabStore((state) => state.setTabSelected);

  const onSelectTab = useCallback(
    (_, data: SelectTabData) => setTabSelected(data.value as string),
    []
  );

  return (
    <div className={styles.root}>
      <TabList className={styles.tabList} selectedValue={tabSelected} onTabSelect={onSelectTab}>
        <Tab id="mapping" value="mapping" icon={<AttachRegular />}>
          Map File
        </Tab>
        <Tab id="create" value="create" icon={<BookCompassRegular />}>
          <div className={styles.tabWithTag}>
            Create Mapping File{" "}
            <Tag size="small" shape="circular">
              Beta
            </Tag>
          </div>
        </Tab>
      </TabList>
    </div>
  );
};

export default Tabs;
