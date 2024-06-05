import { Box, Button, Drawer, Stack, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { BREAK_POINT_LG } from "../constants/setting.constant";

type TProps = {
   openDrawerUserCreate: boolean;
   handleCloseDrawerUserCreate: () => void;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerUserCreate({
   openDrawerUserCreate,
   handleCloseDrawerUserCreate,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT_LG})`);

   const userCreateForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         name: ``,
         email: ``,
      },
      validationSchema: Yup.object().shape({
         name: Yup.string().trim().required(`Page is required`),
         email: Yup.string().trim().required(`Name is required`),
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

         // handleCloseDrawerUserCreate();
         // userCreateForm.resetForm()

         // toast.success(result.message);
      },
   });

   return (
      <Drawer
         position={`right`}
         opened={openDrawerUserCreate}
         onClose={handleCloseDrawerUserCreate}
         overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
         withCloseButton={false}
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
               }}
            >
               <Text fz={`xl`} fw={`bold`}>
                  Create User
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
                  label="Name"
                  placeholder="Name"
                  name="name"
                  value={userCreateForm.values.name}
                  onChange={userCreateForm.handleChange}
                  error={userCreateForm.touched.name && userCreateForm.errors.name}
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
            </Stack>

            {/* footer */}
            <Stack
               style={{
                  height: `${heightFooter}`,
                  padding: `10px 20px 20px`,
                  gap: `20px`,
                  alignItems: `center`,
                  justifyContent: `start`,
               }}
            >
               <Button variant="light" onClick={handleCloseDrawerUserCreate}>
                  Cancel
               </Button>

               <Button
                  onClick={() => {
                     userCreateForm.handleSubmit();
                  }}
                  loading={loading}
               >
                  Create
               </Button>
            </Stack>
         </Box>
      </Drawer>
   );
}
