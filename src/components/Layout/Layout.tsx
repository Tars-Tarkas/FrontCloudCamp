import { FC } from "react";
import { Container } from "../Container/Container";

import { ILayoutProps } from "./interface";

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return <Container>{children}</Container>;
};
