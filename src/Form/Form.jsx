import { Box, TextField } from "@mui/material";
import Buttons from "../Components/uI/Buttons";
import { Link } from "react-router-dom";

export default function Form() {
    return (
        <div className='border-2 border-solid w-full max-w-md mx-auto py-[24px] px-[50px]'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* title */}
                <h2>Create an account</h2>

                {/* input filed */}
                <div className='flex flex-col gap-2 justify-center items-center'>
                    {/* first name */}
                    <TextField
                        id="standard-text-input"
                        label="First Name*"
                        type="text"
                        variant="standard"
                    />
                    {/* last name */}
                    <TextField
                        id="standard-text-input"
                        label="Last Name*"
                        type="text"
                        variant="standard"
                    />
                    {/* first name */}
                    <TextField
                        id="standard-email-input"
                        label="User Email*"
                        type="email"
                        variant="standard"
                    />
                    {/* first name */}
                    <TextField
                        id="standard-password-input"
                        label="New Password*"
                        type="password"
                        variant="standard"
                    />
                    {/* first name */}
                    <TextField
                        id="standard-password-input"
                        label="Confirm Password*"
                        type="password"
                        variant="standard"
                    />

                    {/* submit button */}
                    <Buttons value={'Sign Up'} />
                    <p>Already have an account? <Link className='text-btnPrimary underline'>Sign in</Link></p>
                </div>
            </Box>
        </div>
    );
}
