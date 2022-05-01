import Button from '@mui/material/Button';


const Login = () => {
    return (
        <div className="MuiBox-root css-1xwnwfu">
            <div className="MuiTypography-root MuiTypography-h5 css-1i7fjut">Mari Donasi</div>
            <form>
                <div className="css-g9qomu">
                    <div className="MuiFormControl-root MuiTextField-root full css-1fors79">
                        <label className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-p0rm37" data-shrink="false" for="outlined-email-input" id="outlined-email-input-label">Email</label>
                        <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                            <input id="outlined-email-input" name="email" placeholder="Masukkan Email Kamu" type="text" className="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"></input>
                            <fieldset>
                                <legend>
                                    <span>email</span>
                                </legend>
                            </fieldset>
                        </div>
                        <p>Email tidak boleh kosong</p>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input></input>
                            <fieldset>
                                <legend>
                                    <span>Password</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Donasi</label>
                        <div>
                            <input></input>
                            <fieldset>
                                <legend>
                                    <span>Donasi</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
                <div style="width: 350px; display: flex; padding-left: 50px; flex-direction: column; align-content: center;">
                    <div>
                        Quotes of the day
                    </div>
                    <div>Dari Api</div>

                </div>
            </form>
        </div>
    )
}

export default Login