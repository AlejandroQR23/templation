import React, { useState } from "react";
import { Dropdown, DropdownProps, Label, makeStyles, Option } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "fit-content",
  },
});

const MappingFileDropdown = () => {
  const styles = useStyles();

  const [selectedOption, setSelectedOption] = useState({
    text: "file1",
    value: "mapping_data_v1.csv",
  });

  const options = [
    { text: "file1", value: "mapping_data_v1.csv" },
    { text: "file2", value: "mapping_config_latest.json" },
    { text: "file3", value: "user_mapping_2023.xlsx" },
    { text: "file4", value: "product_mapping.txt" },
    { text: "file5", value: "location_mapping.yaml" },
  ];

  const onOptionSelect: Partial<DropdownProps>["onOptionSelect"] = (_, data) => {
    if (!data) return;

    setSelectedOption({
      value: data.optionValue,
      text: data.optionText,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.dropdownContainer}>
        <Label weight="semibold">Select your Mapping file</Label>
        <Dropdown
          placeholder="Select a file"
          onOptionSelect={onOptionSelect}
          value={selectedOption.text}
        >
          {options.map((option, index) => (
            <Option key={index} value={option.value} text={option.text}>
              {option.text}
            </Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default MappingFileDropdown;
