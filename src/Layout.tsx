import React, { ReactElement } from "react";
interface Props {
  children?: ReactElement;
}
export default function Layout({ children }: Props) {
  return <div className="bg-black h-screen ">{children}</div>;
}
