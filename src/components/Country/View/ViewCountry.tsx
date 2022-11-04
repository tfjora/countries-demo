import "./styles.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { ICountry } from "../../../_models/country";

type Props = {
  countriesToVisit: ICountry[];
  onRemove: (item: ICountry) => void;
  onVisited: (item: ICountry) => void;
};

export default function ViewCountry({ countriesToVisit, onRemove, onVisited }: Props) {
  return (
    <div>
      {countriesToVisit.map((item, index) => {
        const color = item.visited ? "success" : "disabled";
        return (
          <div className="wanted-to-visit-container" key={index}>
            <div className="check-icon" onClick={() => onVisited(item)}>
              <CheckIcon color={color} />
            </div>
            <div className="country-item">{item.name}</div>
            <div className="item-remove" onClick={() => onRemove(item)}>
              <ClearIcon sx={{ color: "red" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
