import React from "react";
import { ProfileProvider } from "./ProfileContext";
import { SidebarProvider } from "./SidebarContext";
import { LoggedInProvider } from "./AuthContext";

// combines all context providers in the app

export const ContextProvider = (props) => {
  return (
    <LoggedInProvider>
      <SidebarProvider>
        <ProfileProvider>{props.children}</ProfileProvider>
      </SidebarProvider>
    </LoggedInProvider>
  );
};
