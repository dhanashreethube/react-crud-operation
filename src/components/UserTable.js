import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/userApi";

const UserTable = ({ users, onDelete }) => {
  const navigate = useNavigate();

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th colSpan="2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u, index) => (
          <tr key={u.id}>
            <td>{index + 1}</td>
            <td>{u.firstName} {u.lastName}</td>
            <td>{u.email}</td>

            <td>
              <button
                className="btn-edit"
                onClick={() => navigate(`/edit/${u.id}`)}
              >
                Edit
              </button>
            </td>

            <td>
              <button
                className="btn-delete"
                onClick={() => onDelete(u.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
