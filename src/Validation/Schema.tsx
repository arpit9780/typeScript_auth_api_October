import React from 'react';

import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
});

export const signupSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    cpassword: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .min(10, 'Wrong Number')
        .max(10, 'Wrong Number')
        .required('Required'),
    gender: Yup.string()
        .required('Required'),
    address: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .min(18, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Required'),

});