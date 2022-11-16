import { useState } from "react";
import { useEffect } from "react";
import { showPost } from "../Services/Slice";
import { useAppDispatch, useAppSelector } from "../Services/UseAppType";
import { CreatePost } from "./CreatePost";
import { IMapType, interReducer, PostField } from "./Interface";
import { UpdatePost } from "./UpdatePost";
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from "react-router-dom";
import { TbLogout } from 'react-icons/tb';

export const Dashboard = () => {
  const [opened, setOpened] = useState(false);
  const [isVisibleCreate, setIsVisibleCreate] = useState(false);

  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
  const [postData, setPostData] = useState<PostField>();

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createPosts: IMapType = useAppSelector((state: any) => state.post.createPost);
  const updatePosts: IMapType = useAppSelector((state: any) => state.post.updatePost);
  const posts: IMapType = useAppSelector((state: any) => state.post.posts);
  
  // const status: string = useAppSelector((state: any) => state.post.status);
  // console.log(69,status);

  useEffect(() => {
  // debugger;
    if (localStorage.getItem("userToken") !== null) {
      setLoading(true);
      dispatch(showPost());
    }
   
  }, [ createPosts , updatePosts]);

  // useEffect(()=>{

  // },[,posts])
  const goToCreate = () => {
    setOpened(true);
    setIsVisibleCreate(true);
  };

  const goToUpdate = (data: PostField) => {
    console.log(25, data);
    setIsVisibleUpdate(true);
    setUpdateModelOpen(true);
    setPostData(data);
  };

  const goToLogout = () => {
   localStorage.removeItem("userToken")
   navigate("/login")
  };

  return (
    <>
      <button onClick={goToCreate}>Create New Post</button>
      <TbLogout className="logoutButton" onClick={goToLogout}/>
      <div className="container container-dash">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Domain</th>
                <th scope="col">Salary</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
        {loading ? (
          posts &&  posts?.map((item: PostField, i: number) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>
                      <img
                        src={item.image.file_url}
                        alt="No Image Uploaded"
                        height="100px"
                        width="auto"
                      />
                    </td>
                    <td>{item?._id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.age}</td>
                    <td>{item?.city}</td>
                    <td>{item?.domain}</td>
                    <td>{item?.salary}</td>
                    <td>
                      <button onClick={() => goToUpdate(item)}>Update</button>
                    </td>
                  </tr>
                </tbody>
              )}  )): (<RingLoader/>) }
          </table>
      </div>

      {isVisibleCreate ? (
        <CreatePost opened={opened} setOpened={setOpened} />
      ) : null}

      {isVisibleUpdate ? (
        <UpdatePost
          updateModelOpen={updateModelOpen}
          setUpdateModelOpen={setUpdateModelOpen}
          data={postData}
        />
      ) : null}
    </>
  );
};
