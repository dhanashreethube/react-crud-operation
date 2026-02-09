import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormFields } from "../config/userFormFields";
import { userSchema } from "../schema/userSchema";
import "../styles/form.css";

const UserForm = ({ onSubmit }) => {



 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Create User</h2>

      {userFormFields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input type={field.type} {...register(field.name)} />
          <p className="error">{errors[field.name]?.message}</p>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
 
};

export default UserForm;


