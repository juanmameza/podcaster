import { useRef } from "react";

type Props = {
  onInputChange: (value: string) => void;
};

const Filter: React.FC<Props> = ({ onInputChange }) => {
  const inputRef = useRef(null);
  const handleKeyUp = () => {
    onInputChange(inputRef.current?.["value"] ?? "");
  };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onKeyUp={handleKeyUp}
        placeholder="Filter podcasts..."
      ></input>
    </>
  );
};

export default Filter;
