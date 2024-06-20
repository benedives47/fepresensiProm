import * as Yup from "yup";

export const validateLogin = Yup.object().shape({
  username: Yup.string().required("Please fill your username / email"),
  password: Yup.string().required("Please fill your password"),
});
