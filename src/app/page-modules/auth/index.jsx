import { Button, Flex } from "@chakra-ui/react";
import InputField from "@presensi/app/_globals/components/form-input/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateLogin } from "./auth.validation";
import useAuthentication from "@presensi/app/_globals/hooks/useAuthentication";

const Auth = () => {
  const methods = useForm({
    resolver: yupResolver(validateLogin),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { signIn } = useAuthentication();

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <Flex flexDir="column" py="10px">
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
          <Button type="submit" size="sm" mt="10px" colorScheme="purple">
            Log In
          </Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
};

export default Auth;
