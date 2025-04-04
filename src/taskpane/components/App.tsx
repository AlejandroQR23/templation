import { makeStyles } from "@fluentui/react-components";
import * as React from "react";

import Tabs from "./ui/Tabs";
import useTabStore from "./stores/useTabStore";
import Mapping from "./tabs/Mapping";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();
  const tabSelected = useTabStore((state) => state.tabSelected);

  return (
    <div className={styles.root}>
      <Tabs />
      {tabSelected === "mapping" && <Mapping />}
    </div>
  );
};

export default App;
