import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blockUser, showUserToAdmin, unblockUser } from "../Services/Slice";
import { useAppDispatch, useAppSelector } from "../Services/UseAppType";
import { signupField } from "./Interface";
import { TbLogout } from 'react-icons/tb';
import { ToastContainer,toast } from "react-toastify";

export const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const dataOfUsers = useAppSelector((state: any) => state?.post?.posts);
  const Message = useAppSelector((state:any) => state?.post?.adminUser)
  
  const [token,setToken] = useState<any>(localStorage.getItem("adminToken"))
  
  useEffect(() => {
    console.log("use");
    if(token !== null || undefined){
      dispatch(showUserToAdmin());
    }
    else{
      navigate("/admin")
    }
    if (Message?.success) {
      toast.success(Message.success)
    }
    else {
      toast.error(Message?.response?.data?.message)
    }
  }, [Message,token])
  
  
  
  

  const goToLogout = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin")
  }

  const goToBlock = (userData: signupField ) => {
   dispatch(blockUser(userData))
  }
  const goToUnblock = (userData : signupField) => {
    dispatch(unblockUser(userData))
  }
  return (<>

      <h1 style={{'backgroundColor':"#FF7F50"}}>All User's Detail's</h1>
      <TbLogout className="logoutButton" onClick={goToLogout}/>
    <div className="container container-dash">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {dataOfUsers && dataOfUsers?.map((item: signupField, i: number) => {
          return(
            <tbody key={i}>
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => goToBlock(item)}>Block</button>
                <button onClick={() => goToUnblock(item)}>Unblock</button>
              </td>
            </tr>
          </tbody>
            )
        })}
      </table>
    </div>
    <ToastContainer />
  </>
  );
}
