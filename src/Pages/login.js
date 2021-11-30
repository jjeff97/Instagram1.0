import { useContext } from "react";
import { useNavigate } from "react-router";
import FirebaseContext from "../Context/firebase";

export default function Login() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    return(<p> I am the Login Page</p>)

};