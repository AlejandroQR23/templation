import React from "react";
import MappingFileDropdown from "../ui/MappingDropdown";
import { Button, makeStyles } from "@fluentui/react-components";
import { RocketRegular } from "@fluentui/react-icons";
import useTabStore from "../stores/useTabStore";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
  },
});

const Mapping = () => {
  const setTabStep = useTabStore((state) => state.setTabStep);
  const tabStep = useTabStore((state) => state.tabStep);

  const styles = useStyles();

  return (
    <div className={styles.root}>
      {tabStep === 0 && (
        <>
          <MappingFileDropdown />
          <Button
            appearance="primary"
            icon={<RocketRegular />}
            iconPosition="after"
            onClick={() => setTabStep(1)}
          >
            Next
          </Button>
        </>
      )}
      {/* {tabStep === 1 && ()} */}
    </div>
  );
};

export default Mapping;
