import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const InputField = ({
  id,
  name,
  value,
  placeholder,
  label,
  onChange,
  type,
  helperText,
  rightElement,
  leftElement,
  rightAddon,
  leftAddon,
  error,
  required,
  minLength,
  maxLength,
  min,
  max,
  isDisabled,
  autocomplete,
  size,
}) => {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(error)}>
      {label && (
        <FormLabel htmlFor={id}>
          {label}{" "}
          {required && (
            <Text color="orange" fontWeight="600" as="span">
              *
            </Text>
          )}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddon && (
          <InputLeftAddon bg="transparent">{leftAddon}</InputLeftAddon>
        )}
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        <Input
          size={size}
          autoComplete={autocomplete ? "on" : "off"}
          id={id}
          value={value}
          placeholder={placeholder}
          borderRadius="8px"
          min={min}
          max={max}
          type={type}
          isDisabled={isDisabled}
          {...register(id, {
            required: {
              value: !!required,
              message: `${name} is required`,
            },
            minLength: {
              value: minLength ? minLength : 0,
              message: `${name} must be greater than ${minLength} character`,
            },
            maxLength: {
              value: maxLength ? maxLength : 999,
              message: `${name} must be less than ${maxLength} character`,
            },
            onChange: onChange,
          })}
        />
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
      {helperText && (
        <FormHelperText color="wool-neutral.70">{helperText}</FormHelperText>
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
