import {Link} from 'react-router-dom'
const SignUp = () => {
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
              Welcome to this demo blog application! You can sign up and log in using your email and password or simply with Google authentication for a seamless experience.
              Explore the platform, interact with content, and experience how a modern MERN stack authentication system works in action. Enjoy your journey! 😊
              <br/>Let me know if you’d like any refinements! 🚀
            </p>
        </div>
        <div className="flex-1 bg-slate-100 p-4 rounded-lg">
          {/*right*/}
          <form className="flex flex-col gap-2">
              <h1 className="text-4xl tracking-[1px] font-semibold my-4 ">Sign Up</h1>
              <div className="flex flex-col gap-1">
                <label htmlFor="username">User name</label>
                <input
                  type="text"
                  placeholder="Your username"
                  id="username"
                  className="block w-full rounded-md border-1 border-gray-300 px-2 py-1.5"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Your email address"
                    id="email"
                    className="block w-full rounded-md border-1 border-gray-300 px-2 py-1.5"
                  />
              </div>
              <div className="flex flex-col gap-1">
              <label htmlFor="email">Password</label>
                <input
                    type="password"
                    placeholder="Your password"
                    id="password"
                    className="block w-full rounded-md border-1 border-gray-300 px-2 py-1.5"
                  />
              </div>
              <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer py-2 rounded-lg" type="submit">Sign Up</button>
          </form>
          <div className='flex gap-3 text-sm mt-2'>
            <span>Have an account?</span>
            <Link to="/sign-in">
              <span className="text-blue-500">Sign In</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp