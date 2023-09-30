import { useContext, useState } from "react";
import { post } from "../apiRequest";
import { User_URL } from "../Utilities/Data";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Appcontext";
export default function useForm(initialFormValue) {

    const [formValues, setFormValues] = useState(initialFormValue);
    const [psInValid, setPsInValid] = useState(false);
    const [usercreated, setUserCreated] = useState(false);
    const navigate = useNavigate();
    const {setUname} = useContext(Appcontext);

    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }

    function handleValidation() {
        if (formValues.Password !== formValues.ConPassword) setPsInValid(true);
        else setPsInValid(false);
    }

    function doLogin(e) {
      
        e.preventDefault(); 
        const auth = getAuth();
        signInWithEmailAndPassword(auth,formValues.Email,formValues.Password).then((userCredential)=>{
            const user = userCredential.user;
            setUname(user.email);
            console.log(user.email);
            navigate("/todo");
        }).catch((error)=>{
            console.log(error.message);
            alert(error.message.slice(9,));
        })
    }

    function handleSubmit() {

        post(formValues, User_URL);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,formValues.Email,formValues.Password).then(result=>{
            const user = result.user;
            console.log(user);
        })
        setTimeout(() => {
            setUserCreated(true);
        }, 1000);

    }
    return [formValues,
        handleChange,
        handleValidation,
        psInValid,
        handleSubmit,
        usercreated,
        doLogin
    ];
}