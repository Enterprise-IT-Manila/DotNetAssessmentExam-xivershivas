/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { ShimmeredDetailsList } from "@fluentui/react/lib/ShimmeredDetailsList";
import "./UserList.css";

import { IRenderFunction } from "@fluentui/react/lib/Utilities";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";
import { IDetailsColumnRenderTooltipProps } from "@fluentui/react/lib/DetailsList";
import { GetUsersResult, UserModel } from "../../api";
import { apiConfig } from "./../../config/apiConfig";
import { UsersApiFp } from "../../api";
import { AxiosResponse } from "axios";
import { UserListCommandBar } from "./components/UserListCommandBar";
import { Text } from "@fluentui/react/lib/Text";

const columns: IColumn[] = [
  {
    key: "column_username",
    name: "Username",
    fieldName: "username",
    minWidth: 50,
    maxWidth: 250,
    isResizable: true,
  },
  {
    key: "column_givenName",
    name: "Given name",
    fieldName: "givenName",
    minWidth: 50,
    maxWidth: 250,
    isResizable: true,
  },
  {
    key: "column_middleName",
    name: "Middle name",
    fieldName: "middleName",
    minWidth: 50,
    maxWidth: 250,
    isResizable: true,
  },
  {
    key: "column_surname",
    name: "Surname",
    fieldName: "surname",
    minWidth: 50,
    maxWidth: 250,
    isResizable: true,
  },
  {
    key: "column_email",
    name: "Email",
    fieldName: "email",
    minWidth: 50,
    maxWidth: 250,
    isResizable: true,
  },
];

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (
  props,
  defaultRender
) => {
  if (!props) {
    return null;
  }
  const onRenderColumnHeaderTooltip: IRenderFunction<
    IDetailsColumnRenderTooltipProps
  > = (tooltipHostProps) => <TooltipHost {...tooltipHostProps} />;
  return defaultRender!({
    ...props,
    onRenderColumnHeaderTooltip,
  });
};

export const UserList: React.FunctionComponent = () => {
  const componentIsMounted = React.useRef(true);
  const [allItems, setListItems] = React.useState([] as UserModel[]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getUsers = () => {
    if (isLoading) return;
    setIsLoading(true);

    UsersApiFp(apiConfig)
      .apiUsersGet()
      .then((axios) => {
        axios()
          .then((value: AxiosResponse<GetUsersResult, any>) => {
            setListItems(value.data.users as UserModel[]);
          })
          .catch((reason) => {
            console.error(reason);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
  };

  React.useEffect(() => {
    if (componentIsMounted.current) getUsers();
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  return (
    <div style={{ flexGrow: 1, background: "white" }}>
      <UserListCommandBar getUsers={getUsers}></UserListCommandBar>

      <div className="page-container">
        <div>
          <Text variant="large" style={{ fontWeight: 600 }}>
            User Management
          </Text>
          <ShimmeredDetailsList
            items={allItems}
            columns={columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            constrainMode={ConstrainMode.horizontalConstrained}
            onRenderDetailsHeader={onRenderDetailsHeader}
            enableShimmer={isLoading}
            selectionPreservedOnEmptyClick
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
          />
        </div>
      </div>
    </div>
  );
};
