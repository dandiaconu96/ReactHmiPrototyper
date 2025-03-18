import { PropsWithChildren } from "react";
import Wrapper from "./Display14.styles";

export interface Display14Props extends PropsWithChildren {}

const Display14 = ({ children }: Display14Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Display14;
