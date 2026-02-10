import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//import { userFormFields } from "../config/userFormFields";
import { userSchema } from "../schema/userSchema";
import "../styles/form.css";
import { userFormFields } from "../config/userFormFields";
import { useEffect } from 'react';


const UserForm = ({ initialValues, onSubmit, isEdit }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  // ✅ THIS FIXES EDIT PREFILL
  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2>{isEdit ? "Edit User" : "Create User"}</h2>

      {userFormFields.map((field) => (
        <div key={field.name} className="form-group">
          <label>{field.label}</label>
          <input
            type={field.type}
            {...register(field.name)}
            required={field.required}
          />
        </div>
      ))}

      <button type="submit">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;


