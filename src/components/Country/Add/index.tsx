import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";
import { ICountry } from "../../../_models/country";

type Props = {
  countriesToVisit: ICountry[];
  onChange: (item: ICountry) => void;
  countries: ICountry[];
};

export default function AddCountriesToVisit({ countriesToVisit, countries, onChange }: Props) {
  
  const dropdownOptions = useMemo(() => {
    if (countries?.length === 0) return [];
    return countries?.map((i: ICountry) => {
      const alreadyAddedToTheList = Boolean(countriesToVisit.find((c) => c.name === i.name));
      return {
        ...i,
        label: i.name,
        disabled: alreadyAddedToTheList,
      };
    });
  }, [countries, countriesToVisit]);

  return (
    <Autocomplete
      disableClearable
      id="combo-box-demo"
      options={dropdownOptions}
      getOptionDisabled={(option) => Boolean(option.disabled)}
      sx={{ width: 300 }}
      onChange={(event: any, newValue: ICountry) => {
        onChange(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Country I want to visit" />}
    />
  );
}
