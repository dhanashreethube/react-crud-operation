import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import UserForm from "../components/UserForm";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await updateUser(id, data);
    navigate("/read");
  };

  return <UserForm onSubmit={handleSubmit} userId={id} />;
};

export default Edit;
