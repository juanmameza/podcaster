import React from "react";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/selectors";

type Props = {
  onClickHome: () => void;
};

const Header: React.FC<Props> = ({ onClickHome }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <header>
      <h1 onClick={onClickHome}>Podcaster</h1>
      {isLoading && <Loader />}
    </header>
  );
};

export default React.memo(Header);
