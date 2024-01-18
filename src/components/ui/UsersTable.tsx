import { Table } from "antd";
import type { TableColumnsType } from "antd";
import more from "../../assets/icons/more.svg";
import user from "../../assets/icons/image.png";
import { ReactElement } from "react";

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
    dataIndex: "name",
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
const data: DataType[] = [
  {
    id: 1,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        John Doe
      </div>
    ),
    email: "john@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 2,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        Jane Smith
      </div>
    ),
    email: "jane@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 3,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        Bob Johnson
      </div>
    ),
    email: "bob@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 4,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        Alice Williams
      </div>
    ),
    email: "alice@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 5,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        Charlie Brown
      </div>
    ),
    email: "charlie@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 6,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        Eva Davis
      </div>
    ),
    email: "eva@example.com",
    options: <img src={more} alt="" />,
  },
  {
    id: 7,
    name: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            marginRight: "20px",
          }}
          src={user}
          alt=""
        />
        New User
      </div>
    ),
    email: "newuser@example.com",
    options: <img src={more} alt="" />,
  },
];

const UsersTable: React.FC = () => {
  return (
    <div>
      <Table bordered={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default UsersTable;
