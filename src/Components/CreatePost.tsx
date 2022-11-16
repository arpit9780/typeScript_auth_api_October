import React from "react";
import { Modal } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createNewPost } from "../Services/Slice";
import { PostField } from "./Interface";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Services/UseAppType";

interface props {
  opened : boolean;
  setOpened : React.Dispatch<React.SetStateAction<boolean>>
}

export const CreatePost: React.FC<props> = ({
  opened,
  setOpened,
}: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = (data : any)  => {
    console.log(62,data)
    dispatch(createNewPost(data));
  };
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create New Post 🥳"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="age">Age</label>
          <input
            type="number"
            {...register("age", {required: true, min: 18, max: 60 })}
          />
          {errors.age && <span>This field is required</span>}

          <label htmlFor="city">City</label>
          <input
            type="text"
            {...register("city", { required: true, maxLength: 20 })}
          />
          {errors.city && <span>This field is required</span>}

          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            {...register("salary", { required: true, maxLength: 6 })}
          />
          {errors.salary && <span>This field is required</span>}

          <label htmlFor="domain">Domain</label>
          <input
            type="text"
            {...register("domain", { required: true, maxLength: 20 })}
          />
          {errors.domain && <span>This field is required</span>}

          <label htmlFor="image">Image</label>
          <input type="file" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}

          <button type="submit" onClick={() => setOpened(false)}>Submit</button>
        </form>
      </Modal>
    </div>
  );
};
