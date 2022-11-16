import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { signupSchema } from '../Validation/Schema';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Assets/Styles/PageStyle.css"
import { signupUser } from '../Services/Slice';
import { signupField } from '../Components/Interface';
import { useAppDispatch, useAppSelector } from '../Services/UseAppType';

export const Signup = () => {

  const dispatch = useAppDispatch()

  const SuccessMessage = useAppSelector((state:any)=>state?.post?.user)
  const failedMessage = useAppSelector((state:any) => state?.post?.error)

  useEffect(()=>{
       if (SuccessMessage.status == 200) {
         if (SuccessMessage.data.message){
          toast.success(SuccessMessage.data.message)}
         else if (SuccessMessage.data.success) {
          toast.success(SuccessMessage.data.success)
          console.log(SuccessMessage.data)
         }
       }
       else if (failedMessage) {
        toast.error(failedMessage?.response?.data?.error)
       }
  },[SuccessMessage,failedMessage])

  return (
    <>
      <div className="container container-box">
      <div >
            <Formik
              initialValues ={{
                "name": '',
                "email": '',
                "password": '',
                "cpassword": '',
                "phone": null,
                "gender": '',
                "address": '',
                "age": null,
              }}
              validationSchema={signupSchema}
              onSubmit={(values:signupField) => {
                dispatch(signupUser(values))
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <h4>Create Account</h4>

                  <label htmlFor="name">Name</label>
                  <Field name="name" placeholder='Enter Name' />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}

                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" placeholder='Enter Email' />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}

                  <label htmlFor="password">Password</label>
                  <Field name="password" placeholder='Enter Password' />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <label htmlFor='cpassword'>Confirm Password</label>
                  <Field name="cpassword" placeholder='Confirm Password' />
                  {errors.cpassword && touched.cpassword ? (
                    <div>{errors.cpassword}</div>
                  ) : null}

                  <label htmlFor='phone'>Contact No.</label>
                  <Field name="phone" placeholder='Enter Mobile No.' />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}

                  <label htmlFor='gender'>Gender</label>
                  <Field component="select" name="gender" >
                  <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>

                  <label htmlFor='address'>Address</label>
                  <Field name="address" placeholder='Enter Address' />
                  {errors.address && touched.address ? (
                    <div>{errors.address}</div>
                  ) : null}

                  <label htmlFor='age'>Age</label>
                  <Field name="age" type='number' placeholder='Enter age' />
                  {errors.age && touched.age ? (
                    <div>{errors.age}</div>
                  ) : null}

                  <button type="submit">Submit</button>
                 
                </Form>
              )}
            </Formik>
          </div>

    </div>
    <ToastContainer />
  </>

  )
}