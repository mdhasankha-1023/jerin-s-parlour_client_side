import { Box, TextField } from "@mui/material";
import Buttons from "../Components/uI/Buttons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Form({type}) {


    // signUp form
    const signUpForm = (
        <>
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
                {/* email */}
                <TextField
                    id="standard-email-input"
                    label="User Email*"
                    type="email"
                    variant="standard"
                />
                {/* password */}
                <TextField
                    id="standard-password-input"
                    label="New Password*"
                    type="password"
                    variant="standard"
                />
                {/* confirm password */}
                <TextField
                    id="standard-password-input"
                    label="Confirm Password*"
                    type="password"
                    variant="standard"
                />

                {/* submit button */}
                <Buttons value={'Sign Up'} />
                <p>Already have an account? <Link className='text-btnPrimary underline'>Sign Up</Link></p>
            </div>
        </>
    )
    // signUp form
    const signInForm = (
        <>
            <div className='flex flex-col gap-2 justify-center items-center'>
                {/* email */}
                <TextField
                    id="standard-email-input"
                    label="User Email*"
                    type="email"
                    variant="standard"
                />
                {/* password */}
                <TextField
                    id="standard-password-input"
                    label="New Password*"
                    type="password"
                    variant="standard"
                />

                {/* submit button */}
                <Buttons value={'Sign Up'} />
                <p>Don&rsquo;t have an account? <Link className='text-btnPrimary underline'>Create an account</Link></p>
            </div>
        </>
    )

    
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
                {type === 'signUp' ? signUpForm : signInForm}
            </Box>
        </div>
    );
}
