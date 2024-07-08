import { useState } from "react";
import toast from 'react-hot-toast'
import SignUpPresentation from "./SignUpPresentation";
//contaier

function Signup() {

    const [signUpState, setSignUpState] = useState({
        firstName: '',
        email: '',
        mobileNumber: '',
        password: ''
    })

    function handleUserInput(e){
        const {name, value} = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(signUpState);

        //Add validations for the form input
        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName){
            toast.error('Missing values from the form');
            return;
        }

        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20){
            toast.error('First name should be minimum 5 characters long and maximum 20 characters long');
            return;
        }

        //check email
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error('Invald email address');
            return;
        }

        //check mobile number length
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12){
            toast.error('Mobile number should be between 10-12 characters');
            return;
        }
    }

    return (
        <SignUpPresentation 
            handleFormSubmit={handleFormSubmit} 
            handleUserInput={handleUserInput} 
        />
    )

}

export default Signup;