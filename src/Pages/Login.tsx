
import { Formik, Form, Field } from 'formik';
import { loginSchema } from '../Validation/Schema';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAuth } from '../Services/Slice';
import { loginField } from '../Components/Interface';
import '../Assets/Styles/PageStyle.css'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Services/UseAppType';

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const SuccessMessage= useAppSelector((state:any)=>state?.post?.user)
  const failedMessage = useAppSelector((state:any) => state?.post?.error)
  
  useEffect(()=>{
    console.log(44,SuccessMessage)
       if (SuccessMessage.status == 200) {
          toast.success(SuccessMessage.data.success)
          console.log(SuccessMessage.data)
          localStorage.setItem("userToken",SuccessMessage?.data?.token)
          navigate("/dashboard")
       }
       else if (failedMessage) {
        toast.error(failedMessage?.response?.data?.error)
       }
  },[SuccessMessage])


  return (<>
      <div className="container container-box">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values:loginField) => {
            dispatch(loginAuth(values))
            console.log(values);
          }}
        >
          {({ errors, touched  }) => (
            <Form>
              <h1>Log in</h1>
            
              <span>or use your account</span>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Enter Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label htmlFor="password">Password</label>
              <Field name="password" type='password' placeholder="Enter Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>
              <button >Forget Password</button>
            </Form>
          )}
        </Formik>
    </div>
    <ToastContainer />
  </>
  )
}
