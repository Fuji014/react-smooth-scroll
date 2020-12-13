import React from "react";

import ScrollToTop from "./ScrollToTop";

import {
  Container,
  FormWrap,
  FormContent,
  Icon,
  FormH1,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";

function SignIn() {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
