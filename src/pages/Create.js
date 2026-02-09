import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../api/userApi";


const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await createUser(data);
    navigate("/read");
  };

  return <UserForm onSubmit={handleSubmit} />;
};

export default Create;
