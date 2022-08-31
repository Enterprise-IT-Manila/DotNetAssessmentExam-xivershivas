/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  CommandBar,
  ICommandBarStyles,
  ICommandBarItemProps,
} from "@fluentui/react/lib/CommandBar";
import {
  DefaultButton,
  PrimaryButton,
  IButtonProps,
} from "@fluentui/react/lib/Button";
import { Panel } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";
import { UserListCommandBarModel } from "./UserListCommandBarModel";
import { ControlledTextField } from "../../../components/ControlledTextField";
import { useForm } from "react-hook-form";
import { UsersApiFp } from "../../../api";
import { apiConfig } from "./../../../config/apiConfig";
import { RegisterUserCommand } from "../../../api";

const overflowButtonProps: IButtonProps = { ariaLabel: "More commands" };
const commandBarStyles: Partial<ICommandBarStyles> = {
  root: {
    padding: "0px 12px 0px 40px",
    background: "#f3f2f1",
  },
};

const buttonStyles = { marginRight: 8 };

type Form = {
  username: string;
  password: string;
  confirmPassword: string;
  givenName: string;
  middleName: string;
  surname: string;
  email: string;
};

export const UserListCommandBar: React.FunctionComponent<
  UserListCommandBarModel
> = ({ getUsers }) => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const [submittedCommand, setSubmittedCommand] = React.useState(
    null as RegisterUserCommand | null
  );

  const { handleSubmit, control, watch } = useForm<Form>({
    reValidateMode: "onChange",
    mode: "all",
  });

  const passwordRef = React.useRef({});
  passwordRef.current = watch("password", "");

  const _items: ICommandBarItemProps[] = [
    {
      key: "newItem",
      text: "New",
      iconProps: { iconName: "Add" },
      ariaLabel: "New",
      style: { background: "#f3f2f1", marginRight: 10 },
      onClick: () => openPanel(),
    },
    {
      key: "delete",
      text: "Delete",
      iconProps: { iconName: "Delete" },
      style: { background: "#f3f2f1" },
      ariaLabel: "Delete",
      disabled: true,
    },
  ];

  React.useEffect(() => {
    if (!submittedCommand) return;

    UsersApiFp(apiConfig)
      .apiUsersPost(submittedCommand)
      .then((axios) => {
        axios()
          .then(() => {
            getUsers();
            dismissPanel();
          })
          .catch((reason) => {
            console.error(reason);
          });
      });
  }, [submittedCommand]);

  const onSubmit = () => {
    handleSubmit(
      (data) => {
        setSubmittedCommand({
          username: data.username,
          password: data.password,
          givenName: data.givenName,
          middleName: data.middleName,
          surname: data.surname,
          email: data.email,
        } as RegisterUserCommand);
      },
      (err) => {
        console.error(err);
      }
    )();
  };

  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <PrimaryButton onClick={onSubmit} style={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
      </div>
    ),
    [dismissPanel]
  );

  const addUserForm = () => {
    return (
      <div>
        <ControlledTextField
          required={true}
          label="Username"
          control={control}
          name={"username"}
          maxLength={250}
          rules={{
            required: "This field is required",
            minLength: { value: 5, message: "Minimum of 5 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
        <ControlledTextField
          required={true}
          label="Password"
          type="password"
          control={control}
          name={"password"}
          maxLength={250}
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          rules={{
            required: "This field is required",
            minLength: { value: 2, message: "Minimum of 2 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
        <ControlledTextField
          required={true}
          label="Confirm password"
          type="password"
          control={control}
          name={"confirmPassword"}
          maxLength={250}
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          rules={{
            required: "This field is required",
            maxLength: { value: 250, message: "Maximum of 250 characters" },
            validate: (value) =>
              value === passwordRef.current || "The passwords do not match",
          }}
        />
        <ControlledTextField
          required={true}
          label="Given name"
          control={control}
          name={"givenName"}
          maxLength={250}
          rules={{
            required: "This field is required",
            minLength: { value: 2, message: "Minimum of 2 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
        <ControlledTextField
          label="Middle name"
          control={control}
          name={"middleName"}
          maxLength={250}
          rules={{
            minLength: { value: 2, message: "Minimum of 2 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
        <ControlledTextField
          required={true}
          label="Surname"
          control={control}
          maxLength={250}
          name={"surname"}
          rules={{
            required: "This field is required",
            minLength: { value: 2, message: "Minimum of 2 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
        <ControlledTextField
          required={true}
          label="Email"
          control={control}
          maxLength={250}
          name={"email"}
          rules={{
            minLength: { value: 10, message: "Minimum of 10 characters" },
            maxLength: { value: 250, message: "Maximum of 250 characters" },
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <CommandBar
        items={_items}
        styles={commandBarStyles}
        overflowButtonProps={overflowButtonProps}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      <Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        headerText="Add User"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
      >
        {addUserForm()}
      </Panel>
    </div>
  );
};
