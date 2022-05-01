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


    return (
        <Box className={classes.boxContainer}>
            <Typography variant='h5' className={classes.header}>Mari Donasi</Typography>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Email Tidak Boleh Kosong'
                    }
                    if (!values.password) {
                        errors.password = 'Password Tidak Boleh Kosong'
                    }
                    if (!values.donasi) {
                        errors.donasi = 'Email Tidak Boleh Kosong'
                    } else {
                        console.log("success")
                    }
                    return errors
                }}

                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email">
                            {({ input, meta }) => (
                                <Box className={classes.content}>
                                    <Grid item xs={12} className={classes.contentForm}>
                                        <TextField
                                            {...input}
                                            onChange={handleOnChange}
                                            value={email}
                                            type="email"
                                            placeholder="Enter email"
                                            label="Email"
                                            variant="outlined"
                                            error={meta.error && meta.touched}
                                            fullWidth
                                            className={classes.textField}

                                        />
                                        {(meta.error && meta.touched && !email && !isErrorEmail) && (<Typography className={classes.errorMessage}>{meta.error}</Typography>)}
                                        {isErrorEmail && <Typography className={classes.errorMessage}>Format email salah dan hanya menerima gmail</Typography>}
                                    </Grid>
                                </Box>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <Box className={classes.content}>
                                    <Grid
                                        item xs={12}
                                        className={classes.contentForm}>
                                        <TextField
                                            {...input}
                                            type="password"
                                            placeholder="Masukkan Password Kamu"
                                            label="Password"
                                            variant="outlined"
                                            error={meta.error && meta.touched}
                                            fullWidth
                                            className={classes.textField}
                                        />
                                        {meta.error && meta.touched && <Typography className={classes.errorMessage}>{meta.error}</Typography>}
                                    </Grid>
                                </Box >
                            )}
                        </Field>
                        <Field name="donasi">
                            {({ input, meta }) => (
                                <Box className={classes.content}>
                                    <Grid className={classes.donasiContainer} item xs={12}>
                                        {
                                            (focusDonasi && donasi) && (
                                                <Typography className={classes.valueDonasi}>RP</Typography>
                                            )
                                        }
                                        <TextField
                                            {...input}
                                            className={classes.donasi}
                                            onKeyPress={handleFocus}
                                            onChange={handleOnChangeDonasi}
                                            value={donasi}
                                            type="number"
                                            placeholder="Masukkan Donasi Kamu Kamu"
                                            label="Donasi"
                                            variant="outlined"
                                            error={meta.error && meta.touched}
                                            fullWidth
                                        />
                                        {(meta.error && meta.touched && !donasi && !!setDonasi) && (<Typography className={classes.errorMessage}>{meta.error}</Typography>)}
                                    </Grid>
                                </Box>
                            )}
                        </Field>

                        <Box className={classes.content}>
                            <Grid item xs={12} className={classes.contentForm}>
                                <Button variant='contained' onClick={handleSubmit} className={classes.btnSubmit} fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                            <Grid className={classes.containerQuotes}>
                                <Typography variant='h5'>Quotes of the day:</Typography>
                                <Typography className={classes.quotes}>"{quote}"</Typography>
                            </Grid>
                        </Box>
                    </form>
                )}
            />
        </Box >
    )
}

export default Login