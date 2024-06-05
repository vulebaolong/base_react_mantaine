import {
   Box,
   Button,
   Container,
   Paper,
   PasswordInput,
   Stack,
   TextInput,
   Title,
} from "@mantine/core";
import { Logo } from "../../../common/logo/Logo";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { post } from "../../../api/api";
import { ROUTER_ADMIN } from "../../../common/constants/router.constant";
import { ENDPOINT_ADMIN } from "../../../common/constants/endpoint.constant";
import { setAccessToken } from "../../../api/auth";
import rootRouter from "../../../routes/rootRouter";
import { toast } from "react-toastify";

export default function Login() {
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const loginForm = useFormik({
      initialValues: {
         username: "",
         password: "",
      },
      validationSchema: Yup.object().shape({
         username: Yup.string().trim().required("Username is required."),
         password: Yup.string().required("Password is required."),
      }),
      onSubmit: (valuesRaw) => {
         if (isLoading) return;
         const payload = {
            username: valuesRaw.username.trim(),
            password: valuesRaw.password,
         };
         console.log(payload);

         setIsLoading(true);
         post(
            ENDPOINT_ADMIN.AUTH.LOGIN(),
            payload,
            (data) => {
               console.log(data);
               setAccessToken(data);
               rootRouter.navigate(ROUTER_ADMIN.HOME());
               toast.success(`Login successfully`);
            },
            () => {
               console.log(123);
               toast.error(`Login failed`);
            },
            () => {
               setIsLoading(false);
            }
         );
      },
   });
   return (
      <Container size={420} style={{ marginTop: `20vh` }}>
         <Stack
            style={{
               width: `100%`,
               alignItems: `center`,
               justifyContent: `center`,
            }}
         >
            <Logo />
         </Stack>
         <Title
            mt={20}
            ta="center"
            style={{ fontFamily: `Greycliff CF,   var(--mantine-font-family)`, fontWeight: `900` }}
         >
            Welcome back!
         </Title>

         <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
            style={{
               display: `flex`,
               height: `300px`,
               flexDirection: `column`,
               justifyContent: `space-between`,
            }}
         >
            <Box>
               <TextInput
                  required
                  label="Username"
                  placeholder="username"
                  name="username"
                  value={loginForm.values.username}
                  onChange={loginForm.handleChange}
                  error={loginForm.touched.username && loginForm.errors.username}
                  inputWrapperOrder={["label", "input", "error"]}
                  style={{ height: `90px` }}
               />
               <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  required
                  name="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  error={loginForm.touched.password && loginForm.errors.password}
                  inputWrapperOrder={["label", "input", "error"]}
               />
            </Box>
            <Button
               loading={isLoading}
               onClick={() => {
                  loginForm.handleSubmit();
               }}
               fullWidth
               style={{ flexShrink: `0` }}
            >
               Login
            </Button>
         </Paper>
      </Container>
   );
}
