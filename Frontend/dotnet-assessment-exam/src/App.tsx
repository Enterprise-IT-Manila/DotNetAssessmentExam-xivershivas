import React from "react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import ContentLayout from "./layouts/ContentLayout";
import { createTheme, ThemeProvider } from "@fluentui/react";

export const App: React.FunctionComponent = () => {
  initializeIcons(/* optional base url */);
  const customTheme = createTheme({
    palette: {
      themePrimary: "#c02032",
      themeLighterAlt: "#fcf4f5",
      themeLighter: "#f5d4d8",
      themeLight: "#ecb1b8",
      themeTertiary: "#d96d79",
      themeSecondary: "#c73647",
      themeDarkAlt: "#ac1d2e",
      themeDark: "#911927",
      themeDarker: "#6b121d",
      neutralLighterAlt: "#faf9f8",
      neutralLighter: "#f3f2f1",
      neutralLight: "#edebe9",
      neutralQuaternaryAlt: "#e1dfdd",
      neutralQuaternary: "#d0d0d0",
      neutralTertiaryAlt: "#c8c6c4",
      neutralTertiary: "#a19f9d",
      neutralSecondary: "#605e5c",
      neutralPrimaryAlt: "#3b3a39",
      neutralPrimary: "#323130",
      neutralDark: "#201f1e",
      black: "#000000",
      white: "#ffffff",
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <ContentLayout />
    </ThemeProvider>
  );
};
