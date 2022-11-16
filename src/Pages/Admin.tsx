import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { loginField } from '../Components/Interface';
import { adminLogin } from '../Services/Slice';
import { useAppDispatch, useAppSelector } from '../Services/UseAppType';
import { loginSchema } from '../Validation/Schema';
import { toast,ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    
    const SuccessMessage= useAppSelector((state:any)=>state?.post?.user)
    const failedMessage = useAppSelector((state:any) => state?.post?.error)
    console.log(93,SuccessMessage)

    useEffect(()=>{
      console.log(44,SuccessMessage)
         if (SuccessMessage.success) {
            toast.success(SuccessMessage.success)
            localStorage.setItem("adminToken",SuccessMessage.token)
            navigate("/adminDashboard")
         }
         else if (failedMessage) {
          toast.error(failedMessage?.response?.data?.error)
         }
    },[SuccessMessage])

    return (<>
        <div>
        <div className="container-box container">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values:loginField) => {
            console.log(values);
            dispatch(adminLogin(values))
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Admin</h1>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Enter Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label htmlFor="password">Password</label>
              <Field name="password" type='password' placeholder="Enter Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        </div>
        </div>
        <ToastContainer/>
    </>
    )
}