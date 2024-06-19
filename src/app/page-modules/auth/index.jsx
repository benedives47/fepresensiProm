import { Button, Flex } from "@chakra-ui/react";
import InputField from "@presensi/app/_globals/components/form-input/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Auth = () => {
  const methods = useForm();
  return (
    <Flex flexDir="column" py="20px">
      <FormProvider {...methods}>
        <Flex flexDir="column" gap="20px">
          <InputField
            id="username"
            name="password"
            label="Email / Username"
            size="sm"
            type="text"
            required
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            size="sm"
            required
          />
          <Button size="sm" mt="20px" colorScheme="blue" shadow="sm">
            Log In
          </Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
};

export default Auth;
