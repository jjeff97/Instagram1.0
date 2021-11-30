import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import FirebaseContext from "../Context/firebase";

export default function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [ error, setError ] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
      document.title = 'Login - Instagram';
      }, []);

  return <p> I am the Login Page</p>;
}
