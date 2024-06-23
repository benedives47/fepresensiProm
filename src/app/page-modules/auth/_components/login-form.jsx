import { Button, Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@presensi/app/_globals/components/form-input/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { validateLogin } from "../auth.validation";

const LoginForm = ({ pending, onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(validateLogin),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        gap="10px"
      >
        <InputField
          id="username"
          name="password"
          label="Email / Username"
          size="xs"
          type="text"
          error={errors?.username?.message}
          required
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          size="xs"
          error={errors?.password?.message}
          required
        />
        <Button
          isLoading={pending}
          type="submit"
          size="sm"
          mt="10px"
          colorScheme="purple"
        >
          Log In
        </Button>
      </Flex>
    </FormProvider>
  );
};

export default LoginForm;
