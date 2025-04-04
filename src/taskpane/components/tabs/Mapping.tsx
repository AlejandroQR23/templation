import React from "react";
import MappingFileDropdown from "../ui/MappingDropdown";
import { Button, makeStyles, Text } from "@fluentui/react-components";
import { RocketRegular } from "@fluentui/react-icons";
import useTabStore from "../stores/useTabStore";
import DataTable from "../ui/DataTable";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "1rem",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    gap: "1rem",
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
      {tabStep === 1 && (
        <>
          <Text as="h2" weight="bold" size={500}>
            New values to add
          </Text>
          <DataTable />
          <div className={styles.actions}>
            <Button appearance="outline" onClick={() => setTabStep(0)}>
              Back
            </Button>
            <Button
              appearance="primary"
              icon={<RocketRegular />}
              iconPosition="after"
              onClick={() => setTabStep(2)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Mapping;
