import React, { useEffect } from "react";
import { useAppSelector } from "../Services/UseAppType";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export const Routers = () => {
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  // / const status = useAppSelector((state:any) => state?.post?.user)
  // useEffect(() => {

  // }, [status])

  return (
    <div>
      {!userToken && !adminToken ? <PublicRoute /> : null }
      {userToken ? <PrivateRoute /> : null}
      {adminToken ? <ProtectedRoute /> : null}

    </div>
  );
};
