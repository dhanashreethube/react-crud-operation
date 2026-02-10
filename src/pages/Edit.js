import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { getUserById, updateUser } from "../api/userApi";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById(id);
      console.log("EDIT USER DATA:", data);
      setInitialData(data);
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async (updatedUser) => {
    await updateUser(id, updatedUser);
    navigate("/read");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Edit User</h2>

      {initialData && (
        <UserForm
          initialValues={initialData}
          onSubmit={handleUpdate}
          isEdit
        />
      )}
    </div>
  );
};

export default Edit;
