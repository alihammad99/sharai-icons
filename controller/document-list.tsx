import React from "react";
import RegularIcon from "../icons/regular/document-list";
import FilledIcon from "../icons/filled/document-list";
import DuotoneIcon from "../icons/duotone/document-list";

type Props = {
  style: string;
  size?: number;
  color?: string;
};

const Icon = ({ style = "regular", size = 24, color = "#6E6D99" }: Props) => {
  switch (style) {
    case "regular":
      return <RegularIcon size={size} color={color} />;
    case "filled":
      return <FilledIcon size={size} color={color} />;

    case "duotone":
      return <DuotoneIcon size={size} color={color} />;
  }
};

export default Icon;
