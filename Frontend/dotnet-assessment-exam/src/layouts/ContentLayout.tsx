import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserList } from "./../pages/user-list/UserList";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Stack, IStackTokens } from "@fluentui/react";

const containerStackTokens: IStackTokens = {
  padding: "56px 0 0 0",
};

const ContentLayout = () => {
  return (
    <Stack tokens={containerStackTokens}>
      <Header></Header>
      <Stack horizontal>
        <NavBar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="users" element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </Stack>
    </Stack>
  );
};

export default ContentLayout;
