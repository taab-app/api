import React, { FC, PropsWithChildren } from "react";

interface ListProps {
  children?: React.ReactElement;
  loading?: boolean;
}

export const List: FC<PropsWithChildren<ListProps>> = ({ children }) => {
  return <div>{children}</div>;
};
