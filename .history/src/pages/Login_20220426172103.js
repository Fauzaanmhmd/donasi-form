import Button from '@mui/material/Button';


const Login = () => {
    return (
        <div>
            <div>Mari Donasi</div>
            <form>
                <div>
                    <div>
                        <label>Email</label>
                        <div>
                            <input></input>
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
                    <Button  sx={{backgroundColor:"red"}}>Submit</Button>
                </div>
                <div>
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