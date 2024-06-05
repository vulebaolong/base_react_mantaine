import * as React from "react";
import classes from "./TableTantask.module.css";
import cx from "clsx";
import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";

import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from "@tanstack/react-table";
import { ActionIcon, ScrollArea, Stack, Table } from "@mantine/core";
import DrawerUserEdit from "../../../../common/drawers/DrawerUserEdit";
import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";

type Person = {
   username: string;
   email: string;
   phone: string;
   dateOfBirth: string;
};

const defaultData: Person[] = [
   {
      username: "Athena Weissnat",
      email: "Elouise.Prohaska@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Deangelo Runolfsson",
      email: "Kadin_Trantow87@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Danny Carter",
      email: "Marina3@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Trace Tremblay PhD",
      email: "Antonina.Pouros@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Derek Dibbert",
      email: "Abagail29@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Viola Bernhard",
      email: "Jamie23@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Austin Jacobi",
      email: "Genesis42@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Hershel Mosciski",
      email: "Idella.Stehr28@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Mylene Ebert",
      email: "Hildegard17@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Lou Trantow",
      email: "Hillard.Barrows1@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Dariana Weimann",
      email: "Colleen80@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Dr. Christy Herman",
      email: "Lilyan98@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Katelin Schuster",
      email: "Erich_Brekke76@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Melyna Macejkovic",
      email: "Kylee4@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Pinkie Rice",
      email: "Fiona.Kutch@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Brain Kreiger",
      email: "Rico98@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Myrtice McGlynn",
      email: "Julius_Tremblay29@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Chester Carter PhD",
      email: "Jensen_McKenzie@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Mrs. Ericka Bahringer",
      email: "Lisandro56@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Korbin Buckridge Sr.",
      email: "Leatha9@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Dr. Daisy Becker",
      email: "Keaton_Sanford27@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Derrick Buckridge Sr.",
      email: "Kay83@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Ernie Hickle",
      email: "Americo.Leffler89@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Jewell Littel",
      email: "Hester.Hettinger9@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Cyrus Howell",
      email: "Rick0@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Dr. Orie Jast",
      email: "Anna56@hotmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Luisa Murphy",
      email: "Christine32@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Lea Witting",
      email: "Ford_Kovacek4@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Kelli Runolfsson",
      email: "Dimitri87@yahoo.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
   {
      username: "Brook Gaylord",
      email: "Immanuel77@gmail.com",
      phone: `123456789`,
      dateOfBirth: `2024-06-03T06:10:11.002465`,
   },
];

const columnHelper = createColumnHelper<Person>();

export default function TableTantask() {
   const [scrolled, setScrolled] = React.useState(false);
   const [data, _setData] = React.useState(() => [...defaultData]);
   const [userEdit, setUserEdit] = React.useState<Person | null>(null);
   const [
      openDrawerUserEdit,
      { open: handleOpenDrawerUserEdit, close: handleCloseDrawerUserEdit },
   ] = useDisclosure(false);

   const handleClickEdit = (value: Person) => {
      setUserEdit(value);
      handleOpenDrawerUserEdit();
   };

   const columns = [
      columnHelper.accessor((row) => row.username, {
         id: "username",
         cell: (info) => <>{info.getValue()}</>,
         header: () => <span>Username</span>,
      }),
      columnHelper.accessor((row) => row.email, {
         id: "email",
         cell: (info) => <>{info.getValue()}</>,
         header: () => <span>Email</span>,
      }),
      columnHelper.accessor((row) => row.phone, {
         id: "phone",
         cell: (info) => <>{info.getValue()}</>,
         header: () => <span>Phone</span>,
      }),
      columnHelper.accessor((row) => row.dateOfBirth, {
         id: "dateOfBirth",
         cell: (info) => <>{dayjs( info.getValue()).format(`DD/MM/YYYY`)}</>,
         header: () => <span>Date of birth</span>,
      }),
      columnHelper.accessor((row) => row, {
         id: "action",
         cell: (info) => {
            return (
               <Stack>
                  <ActionIcon
                     onClick={() => {
                        handleClickEdit(info.row.original);
                     }}
                     color="blue"
                     variant="light"
                  >
                     <IconEdit stroke={2} />
                  </ActionIcon>
                  <ActionIcon color="red" variant="light">
                     <IconTrash />
                  </ActionIcon>
               </Stack>
            );
         },
         header: () => <span>Action</span>,
      }),
   ];

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
   });

   return (
      <>
         <ScrollArea
            style={{ height: `100%` }}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
         >
            <Table miw={700}>
               <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <Table.Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                           <Table.Th key={header.id}>
                              {header.isPlaceholder
                                 ? null
                                 : flexRender(header.column.columnDef.header, header.getContext())}
                           </Table.Th>
                        ))}
                     </Table.Tr>
                  ))}
               </Table.Thead>

               <Table.Tbody>
                  {table.getRowModel().rows.map((row) => (
                     <Table.Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                           <Table.Td key={cell.id}>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                           </Table.Td>
                        ))}
                     </Table.Tr>
                  ))}
               </Table.Tbody>
            </Table>
         </ScrollArea>
         <DrawerUserEdit
            handleCloseDrawerUserEdit={handleCloseDrawerUserEdit}
            openDrawerUserEdit={openDrawerUserEdit}
            userEdit={userEdit}
         />
      </>
   );
}
