import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";
import LoginPresentation from "./LoginPresentation";

function Login() {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    function handleUserInput(e) {
        const {name, value} = e.target;
        setLoginData({
         ...loginData,
         [name]: value
        })
        console.log("Hi");
     }

     async function handleFormSubmit(e) {
        console.log("In handle submit");
        e.stopPropagation() // prevent the form from reloading the page
        console.log(loginData);

        // Add validations for the form input
        if(!loginData.email || !loginData.password ) {
            toast.error("Missing values from the form")
            return;
        }

        // check email
        if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

        const apiReponse = await dispatch(login(loginData));
        console.log("Api response", apiReponse);
    }

    return (
        <LoginPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />
    )
}

export default Login;