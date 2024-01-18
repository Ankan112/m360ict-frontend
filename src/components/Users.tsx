import UsersTable from "./ui/UsersTable";

const Users = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "23px",
          fontWeight: 600,
          color: "#323B4B",
          marginBottom: "42px",
        }}
      >
        Users List
      </h1>
      {/* Users Table */}
      <UsersTable />
    </div>
  );
};

export default Users;
