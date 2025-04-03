import { SiGoogle } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from '../firebase.js';
import { useDispatch } from "react-redux";
import { signInSuccess, signInFailure } from "../redux/User/userSlice.js";


const OAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = async() => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'});
        try{
            const resultFromGoogle = await signInWithPopup(auth, provider);
            // console.log(resultFromGoogle.user);
            const res = await fetch('/api/auth/google', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:resultFromGoogle.user.displayName,
                    email:resultFromGoogle.user.email,
                    photoURL:resultFromGoogle.user.photoURL
                })
            })
            const data = await res.json();
            console.log(data);
            if(res.ok){
                dispatch(signInSuccess(data))
                return navigate('/');
            }
        }catch(error){
            dispatch(signInFailure(error.message));
            console.log(error); 
        }
    }
  return (
    <button type="button" className="flex items-center justify-center  bg-slate-500 hover:bg-slate-600 text-white cursor-pointer gap-2 w-full py-2 rounded-lg" onClick={handleClick}>
        <SiGoogle />
        <span>Continue with Google</span>
        
    </button>
  )
}

export default OAuth