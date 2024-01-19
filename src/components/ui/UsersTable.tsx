import { Table } from "antd";
import type { TableColumnsType } from "antd";
// import more from "../../assets/icons/more.svg";
// import user from "../../assets/icons/image.png";
import { ReactElement, useState } from "react";
import { useGetAllUsersQuery } from "../../redux/users/usersApi";

interface DataType {
  id: number;
  name: ReactElement;
  email: string;
  options: ReactElement;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "#ID",
    dataIndex: "id",
  },
  {
    title: "NAME",
    dataIndex: `first_name`,
  },
  {
    title: "EMAIL",
    dataIndex: "email",
  },
  {
    title: "OPTIONS",
    dataIndex: "options",
  },
];

//! Fake Data
// const fateData: DataType[] = [
//   {
//     id: 1,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         John Doe
//       </div>
//     ),
//     email: "john@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 2,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         Jane Smith
//       </div>
//     ),
//     email: "jane@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 3,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         Bob Johnson
//       </div>
//     ),
//     email: "bob@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 4,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         Alice Williams
//       </div>
//     ),
//     email: "alice@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 5,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         Charlie Brown
//       </div>
//     ),
//     email: "charlie@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 6,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         Eva Davis
//       </div>
//     ),
//     email: "eva@example.com",
//     options: <img src={more} alt="" />,
//   },
//   {
//     id: 7,
//     name: (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "15px",
//             marginRight: "20px",
//           }}
//           src={user}
//           alt=""
//         />
//         New User
//       </div>
//     ),
//     email: "newuser@example.com",
//     options: <img src={more} alt="" />,
//   },
// ];
const UsersTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetAllUsersQuery({ page: currentPage });
  // console.log(data);

  return (
    <div>
      <Table
        bordered={false}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: 6,
          total: data?.total,
          onChange: (total_pages) => {
            setCurrentPage(total_pages);
          },
        }}
        dataSource={data?.data}
      />
    </div>
  );
};

export default UsersTable;
