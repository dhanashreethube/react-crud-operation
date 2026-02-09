import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userApi";
import UserTable from "../components/UserTable";
import { Link } from "react-router-dom";
import "../styles/table.css";

const Read = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers(); // refresh table
  };

  return (
    <div className="read-container">
      <h2 style={{ textAlign: "center" }}>Read Operation</h2>

      <Link to="/" style={{ float: "right", marginRight: "100px" }}>
        <button>Create</button>
      </Link>

      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
};

export default Read;
