/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, PropsWithChildren } from "react";

export interface ListItemProps {
  id: string;
  title: string;
  subtitle?: string;
  info?: string;
  icon?: any;
  action: () => void;
  shouldNotFilterOnSearch?: boolean;
}

// It serves as API for extensions, the component does nothing by itself
export const ListItem: FC<PropsWithChildren<ListItemProps>> = () => {
  return <></>;
};
