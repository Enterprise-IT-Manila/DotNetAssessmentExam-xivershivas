import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import { Text } from "@fluentui/react";

const navStyles: Partial<INavStyles> = {
  root: {
    height: "calc(100vh - 56px)",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    minWidth: "300px",
    background: "#FFFFFF",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "User Management",
        url: "/users",
        key: "userManagement",
      },
      {
        name: "Placeholder page",
        url: "#",
        key: "placeholder",
      },
    ],
  },
];

export const NavBar: React.FunctionComponent = () => {
  return (
    <div>
      <div
        style={{
          height: "44px",
          background: "#f3f2f1",
          paddingLeft: "33px",
          lineHeight: "44px",
        }}
      >
        <Text
          variant="mediumPlus"
          style={{
            fontWeight: "bold",
            verticalAlign: "center",
          }}
        >
          Administrator
        </Text>
      </div>
      <Nav
        selectedKey="userManagement"
        ariaLabel="Navigation"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </div>
  );
};
