import React from "react";

type Props = {
  onClickHome: () => void;
};

const Header: React.FC<Props> = ({ onClickHome }) => {
  return (
    <header>
      <h1 onClick={onClickHome}>Podcaster</h1>
    </header>
  );
};

export default React.memo(Header);
