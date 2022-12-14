import { FC } from "react";
import { Controller } from "react-hook-form";
import { HookFormProps } from "./HookFormProps";
import { ITextFieldProps, TextField } from "@fluentui/react";

export const ControlledTextField: FC<HookFormProps & ITextFieldProps> = (
  props
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ""}
      render={({
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error },
      }) => (
        <TextField
          {...props}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          name={fieldName}
          errorMessage={error && error.message}
          defaultValue={undefined}
        />
      )}
    />
  );
};
