import { Modal } from "@mantine/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateNewPost } from "../Services/Slice";
import { useAppDispatch } from "../Services/UseAppType";
import { PostField } from "./Interface";

interface props {
  updateModelOpen: boolean;
  setUpdateModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: PostField | undefined;
}

export const UpdatePost: React.FC<props> = ({
  updateModelOpen,
  setUpdateModelOpen,
  data,
}: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = (values: any) => {
    values["_id"] = data?._id;
    dispatch(updateNewPost(values));
  };
  return (
    <div>
      <Modal
        opened={updateModelOpen}
        onClose={() => setUpdateModelOpen(false)}
        title="Update Post 🥳"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue={data?.name}
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="age">Age</label>
          <input
            type="number"
            defaultValue={data?.age}
            {...register("age", { required: true, maxLength: 3 })}
          />
          {errors.age && <span>This field is required</span>}

          <label htmlFor="city">City</label>
          <input
            type="text"
            defaultValue={data?.city}
            {...register("city", { required: true, maxLength: 20 })}
          />
          {errors.city && <span>This field is required</span>}

          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            defaultValue={data?.salary}
            {...register("salary", { required: true, maxLength: 6 })}
          />
          {errors.salary && <span>This field is required</span>}

          <label htmlFor="domain">Domain</label>
          <input
            type="text"
            defaultValue={data?.domain}
            {...register("domain", { required: true, maxLength: 20 })}
          />
          {errors.domain && <span>This field is required</span>}

          <label htmlFor="image">Image</label>
          <input type="file" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}

          <button type="submit" onClick={() => setUpdateModelOpen(false)}>Submit</button>
        </form>
      </Modal>
    </div>
  );
};
