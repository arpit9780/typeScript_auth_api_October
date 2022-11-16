import React, { useEffect } from "react";
import { deletePost, seePosts } from "../Services/Slice";
import { useAppDispatch, useAppSelector } from "../Services/UseAppType";
import { dataField, signupField } from "./Interface";

export const AdminSeePosts = () => {
  const dispatch = useAppDispatch();
  const allPost = useAppSelector((state: any) => state?.post?.adminPost);
  const delPost = useAppSelector((state: any) => state?.post?.adminDeletePost);
  useEffect(() => {
    dispatch(seePosts());
  }, [delPost,allPost]);

  const postDelete = (data:dataField) => {
   console.log(125,data._id)
   const id = data._id
   dispatch(deletePost(data._id))
  }
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "#FF7F50" }}>All User's Post's</h1>
        <div className="container container-AdminDash">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Posted By</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Date</th>
                <th scope="col">Domain</th>
                <th scope="col">Salary</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {allPost
              ? allPost?.map((item: dataField, i: number) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <img
                            src={item?.image?.file_url}
                            alt=""
                            height="auto"
                            width={"100px"}
                          />
                        </td>
                        <td>{item.postedby.name}</td>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>{item.date}</td>
                        <td>{item.domain}</td>
                        <td>{item.salary}</td>
                        <td>
                          <button
                            onClick={() => {
                              postDelete(item);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </table>
        </div>
        {/* {allPost?.map((item:any,i:number) => {
        return(
            
            )
        })} */}
      </div>
    </>
  );
};
