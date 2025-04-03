import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {Spinner} from 'flowbite-react'
import {useDispatch, useSelector} from 'react-redux';
import { signInSuccess, signInFailure, signInStart } from '../redux/User/userSlice';
import OAuth from '../components/OAuth';

const SignIn= () => {
  const [formData, setFormData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const {loading, error} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange=(e)=>{
      setFormData({...formData, [e.target.id]:e.target.value.trim()})   
  }
  // console.log(formData);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields and then try signing in'));
    }
    try{
      // setLoading(true);
      // setError(null);
      dispatch(signInStart());
      const response = await fetch('/api/auth/signin', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data = await response.json();
      if(data.success === false){
        // setLoading(false);
        // return setError(data.message);
        dispatch(signInFailure(data.message));
      }
      console.log(data);
      // setLoading(false);
      if(response.ok){
        dispatch(signInSuccess(data))
        return navigate('/');
      }
    }catch(err){
      // setError(err.message);
      // setLoading(false);
      dispatch(signInFailure(err.message))
    }
  }
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="flex max-w-6xl gap-5 mx-auto flex-col md:flex-row ">
        <div className="flex-1">
          {/*left*/}
            <h1 className="text-4xl tracking-[1px] font-semibold my-4 ">
              Sanjeet's Blog
            </h1>
            <p className="text-sm">
              {/* This blog is a space where ideas, insights, and innovation come together. Whether you're a tech enthusiast, developer, or just curious about the latest trends, you'll find valuable content on web development, MERN stack, JavaScript, and beyond.
              Stay updated with industry-standard practices, coding tutorials, and real-world project insights—all in one place. Let’s learn, build, and grow together! */}
              Welcome to this demo blog application! You can sign In using your email and password or simply with Google authentication for a seamless experience.
              Explore the platform, interact with content, and experience how a modern MERN stack authentication system works in action. Enjoy your journey! 😊
              <br/>Let me know if you’d like any refinements! 🚀
            </p>
        </div>
        <div className="flex-1 bg-linear-to-r from-slate-200 to-slate-200 p-4 rounded-lg pb-10 shadow-xl">
          {/*right*/}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <h1 className="text-4xl tracking-[1px] font-semibold my-4 ">Sign In</h1>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Your email address"
                    id="email"
                    className="block text-sm w-full rounded-md border-1 border-gray-300 px-2 py-1.5 bg-white"
                    onChange={handleChange}
                     
                  />
              </div>
              <div className="flex flex-col gap-1">
              <label htmlFor="email">Password</label>
                <input
                    type="password"
                    placeholder="Your password"
                    id="password"
                    className="block text-sm w-full rounded-md border-1 border-gray-300 px-2 py-1.5 bg-white"
                    onChange={handleChange}
                    
                  />
              </div>
              <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer py-2 rounded-lg uppercase text-white font-semibold tracking-[1px] mt-4" disabled={loading} type="submit">
                {loading ? 
                  (<Spinner aria-label="Alternate spinner button example" size="sm" />) 
                  : 'Sign In'}
              </button>
              <OAuth/>
          </form>
          <div className='flex gap-3 text-sm mt-4'>
            <span>Do not have an account?</span>
            <Link to="/sign-up">
              <span className="text-blue-500 cursor-pointer hover:underline ">Sign Up</span>
            </Link>
          </div>
          {error && 
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg relative mt-2" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn;