import React from "react";

export type LiType = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  children: () =>
    | React.ReactNode
    | React.ReactElement
    | JSX.Element
    | JSX.Element[]
    | React.ReactElement[];
};

export const Li = ({ children, ...rest }: LiType) => {
  return (
    <li {...rest} role="listitem" tabIndex={0}>
      {children()}
    </li>
  );
};
