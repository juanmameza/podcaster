import { useRef } from "react";
import './Filter.css'

type Props = {
  filterCount: number;
  onInputChange: (value: string) => void;
};

const Filter: React.FC<Props> = ({ onInputChange, filterCount }) => {
  const inputRef = useRef(null);
  const handleKeyUp = () => {
    onInputChange(inputRef.current?.["value"] ?? "");
  };

  return (
    <div className="filterContainer">
      <div className="filterCount">{filterCount}</div>
      <input
        type="text"
        className="filterInput"
        ref={inputRef}
        onKeyUp={handleKeyUp}
        placeholder="Filter podcasts..."
      ></input>
    </div>
  );
};

export default Filter;
