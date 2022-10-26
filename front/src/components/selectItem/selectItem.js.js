import React from "react";
import styles from "./_style.module.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectItem = ({ data }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.selectItem}>
      <Box sx={{ minWidth: 120 }} className={styles.selectBox}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {data &&
              data.map((item) => (
                <MenuItem value={item.count}>{item.title}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <div className={styles.count}>count : {`${age}`}</div>
    </div>
  );
};

export default SelectItem;
