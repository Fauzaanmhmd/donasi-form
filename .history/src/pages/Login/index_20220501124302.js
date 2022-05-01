import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field } from 'react-final-form';
import { useState, useEffect } from "react";
import root from "../../service"
import { useLoginStyles } from '../../style/pages/Login'

const Login = () => {
    const classes = useLoginStyles();
    const [focusDonasi, setFocusDonasi] = useState(false)
    const [email, setEmail] = useState("");
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [quote, setQuote] = useState("")
    const [donasi, setDonasi] = useState("");


    const getQodDatas = async () => {
        try {
            const response = await root.get('qod?language=en')
            setQuote(response.data.contents.quotes[0].quote)
        } catch (e) {
            alert(e.message)
        }
    }

    useEffect(() => {
        getQodDatas()
    }, [])


    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setIsErrorEmail(false);
        } else {
            setIsErrorEmail(true);
        }
    };


    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }

    const handleFocus = () => {
        setFocusDonasi(true)
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value);
        emailValidation(e.target.value)
    };

    const handleOnChangeDonasi = (e) => {
        setDonasi(e.target.value)
    }

    const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
    const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
    const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')


    return (
        <Box className={classes.boxContainer}>
            <Typography variant='h5' className={classes.header}>Mari Donasi</Typography>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    else if (!values.password) {
                        errors.password = 'Required'
                    }
                    else (!values.donasi) {
                        errors.confirm = 'Required'
                    } else if (values.confirm !== values.password) {
                errors.confirm = 'Must match'
            }
            return errors
                 }}
            />
        </Box >

    )
}

export default Login