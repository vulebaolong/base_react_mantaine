import { Box, Button, Drawer, Stack, Text, TextInput, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { BREAK_POINT_LG } from "../constants/setting.constant";
import { DateInput, DateValue } from "@mantine/dates";
import dayjs from "dayjs";
type Person = {
   username: string;
   email: string;
   phone: string;
   dateOfBirth: string;
};
type TProps = {
   openDrawerUserEdit: boolean;
   handleCloseDrawerUserEdit: () => void;
   userEdit: Person | null;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerUserEdit({
   openDrawerUserEdit,
   handleCloseDrawerUserEdit,
   userEdit,
}: TProps) {
   const { colorScheme } = useMantineColorScheme();
   const [loading, setLoading] = useState<boolean>(false);
   const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT_LG})`);

   const userCreateForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         username: userEdit?.username || "",
         email: userEdit?.email || "",
         phone: userEdit?.phone || "",
         dateOfBirth: userEdit?.dateOfBirth || new Date().toDateString(),
      },
      validationSchema: Yup.object().shape({
         username: Yup.string().trim().required(`Username is required`),
         email: Yup.string().trim().required(`Email is required`),
         phone: Yup.string().trim().required(`Phone is required`),
         dateOfBirth: Yup.string().trim().required(`Date of birth is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         setLoading(true);
         setLoading(false);

         // const payload: TUserCreate = {
         //    page: valuesRaw.page,
         //    description: valuesRaw.description,
         //    title: valuesRaw.title,
         // };

         // const result = await createTextInPageAction(payload);
         // console.log(result);
         // setLoading(false);

         // if (!result.status) return toast.error(result.message);

         // handleCloseDrawerUserEdit();
         // userCreateForm.resetForm()

         // toast.success(result.message);
      },
   });
   return (
      <Drawer
         position={`right`}
         opened={openDrawerUserEdit}
         onClose={handleCloseDrawerUserEdit}
         overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
         withCloseButton={false}
         transitionProps={{ transition: "rotate-left", duration: 150, timingFunction: "linear" }}
         styles={{
            body: {
               padding: 0,
            },
         }}
      >
         <Box
            style={{ width: isMobile ? `90vw` : `100%`, height: `100vh` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={userCreateForm.handleSubmit}
         >
            {/* header */}
            <Stack
               style={{
                  height: `${heightHeader}`,
                  alignItems: `start`,
                  padding: `20px 20px 10px`,
                  borderBottom: `1px solid ${
                     colorScheme === "dark"
                        ? `var(--mantine-color-dark-4)`
                        : `var(--mantine-color-gray-3)`
                  }`,
               }}
            >
               <Text fz={`xl`} fw={`bold`}>
                  Create Edit
               </Text>
            </Stack>

            <Stack
               style={{
                  height: `calc(100vh - (${heightHeader} + ${heightFooter}))`,
                  padding: `10px 20px`,
                  rowGap: `20px`,
                  overflowY: `auto`,
                  flexDirection: `column`,
                  width: `100%`,
               }}
            >
               <TextInput
                  width={`100%`}
                  label="Username"
                  placeholder="Username"
                  name="username"
                  value={userCreateForm.values.username}
                  onChange={userCreateForm.handleChange}
                  error={userCreateForm.touched.username && userCreateForm.errors.username}
                  inputWrapperOrder={["label", "input", "error"]}
               />
               <TextInput
                  width={`100%`}
                  label="Email"
                  placeholder="Email"
                  name="email"
                  value={userCreateForm.values.email}
                  onChange={userCreateForm.handleChange}
                  error={userCreateForm.touched.email && userCreateForm.errors.email}
                  inputWrapperOrder={["label", "input", "error"]}
               />
               <TextInput
                  width={`100%`}
                  label="Phone"
                  placeholder="Phone"
                  name="phone"
                  value={userCreateForm.values.phone}
                  onChange={userCreateForm.handleChange}
                  error={userCreateForm.touched.phone && userCreateForm.errors.phone}
                  inputWrapperOrder={["label", "input", "error"]}
               />
               <DateInput
                  value={new Date(userCreateForm.values.dateOfBirth)}
                  onChange={(date) => {
                     userCreateForm.setFieldValue('dateOfBirth', date?.toISOString());
                   }}
                  label="Date input"
                  placeholder="Date input"
                  valueFormat="DD/MM/YYYY"
               />
            </Stack>

            {/* footer */}
            <Stack
               style={{
                  height: `${heightFooter}`,
                  padding: `20px 20px`,
                  gap: `20px`,
                  alignItems: `center`,
                  justifyContent: `start`,
                  borderTop: `1px solid ${
                     colorScheme === "dark"
                        ? `var(--mantine-color-dark-4)`
                        : `var(--mantine-color-gray-3)`
                  }`,
               }}
            >
               <Button variant="light" onClick={handleCloseDrawerUserEdit}>
                  Cancel
               </Button>

               <Button
                  onClick={() => {
                     userCreateForm.handleSubmit();
                  }}
                  loading={loading}
               >
                  Edit
               </Button>
            </Stack>
         </Box>
      </Drawer>
   );
}
