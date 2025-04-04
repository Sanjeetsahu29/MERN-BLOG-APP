import { useSelector } from "react-redux"
import { Button, TextInput } from 'flowbite-react';
function DashProfile() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
       <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
       <form className='flex flex-col gap-4'>
         <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
           <img
             src={currentUser.profilePicture}
             alt='user'
             className='rounded-full w-full h-full object-cover border-4 border-[lightgray]'
           />
         </div>
         <TextInput
           type='text'
           id='username'
           placeholder='username'
           defaultValue={currentUser.username}
           
         />
         <TextInput
           type='email'
           id='email'
           placeholder='email'
           defaultValue={currentUser.email}
         />
         <TextInput type='password' id='password' placeholder='password' />
         <Button type='submit' className="bg-slate-600 hover:bg-slate-700 text-white cursor-pointer">
             Update
         </Button>
       </form>
       <div className="text-red-500 flex justify-between mt-5 text-sm bg-stone-100 py-2 px-2 rounded-lg">
         <span className='cursor-pointer hover:underline '>Delete Account</span>
         <span className='cursor-pointer hover:underline'>Sign Out</span>
       </div>
     </div>
  )
}

export default DashProfile