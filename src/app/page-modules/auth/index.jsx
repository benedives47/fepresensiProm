import { Button, Flex } from "@chakra-ui/react";
import InputField from "@presensi/app/_globals/components/form-input/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Auth = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("data", data);
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
            required
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            size="xs"
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
