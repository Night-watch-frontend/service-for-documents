import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface ISelectMoveProps {
  values: {
    name: string;
  }[];
}

export default function SelectMove({ values }: ISelectMoveProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Move</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Move"
        >
          {values.map((item) => (
            <MenuItem
              key={item.name}
              value={item.name}
              onClick={() => console.log(item.name)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
