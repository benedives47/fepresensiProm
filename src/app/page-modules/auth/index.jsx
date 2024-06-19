import { Button, Flex } from "@chakra-ui/react";
import InputField from "@presensi/app/_globals/components/form-input/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Auth = () => {
  const methods = useForm();
  return (
    <Flex flexDir="column" py="10px">
      <FormProvider {...methods}>
        <Flex flexDir="column" gap="10px">
          <InputField
            id="username"
            name="password"
            label="Email / Username"
            size="xs"
            type="text"
            required
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            size="xs"
            required
          />
          <Button size="sm" mt="10px" colorScheme="purple">
            Log In
          </Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
};

export default Auth;
