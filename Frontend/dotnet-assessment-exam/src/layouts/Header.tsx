import * as React from "react";
import { AnimationClassNames, mergeStyles } from "@fluentui/react/lib/Styling";
import { Layer } from "@fluentui/react/lib/Layer";
import ulLogo from "../assets/ul-logo-black.svg";
import { useTheme } from "@fluentui/react";
import { Text } from "@fluentui/react/lib/Text";

const logoClass = mergeStyles([
  { verticalAlign: "middle", marginRight: "20px", marginBottom: "5px" },
]);

export const Header: React.FunctionComponent = () => {
  const theme = useTheme();
  const contentClass = mergeStyles([
    {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white,
      lineHeight: "55px",
      paddingLeft: "40px",
    },
    AnimationClassNames.scaleUpIn100,
  ]);

  return (
    <Layer>
      <div className={contentClass}>
        <img className={logoClass} src={ulLogo} alt="UL" />
        <Text style={{ color: theme.palette.white }} variant="large">
          Assessment Exam
        </Text>
      </div>
    </Layer>
  );
};
