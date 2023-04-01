import React from "react";
import { ProfileProvider } from "./ProfileContext";
import { SidebarProvider } from "./SidebarContext";

export const ContextProvider = (props) => {
  return (
    <SidebarProvider>
      <ProfileProvider>{props.children}</ProfileProvider>
    </SidebarProvider>
  );
};
