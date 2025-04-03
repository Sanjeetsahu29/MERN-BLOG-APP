import { Navbar, TextInput, Button, NavbarCollapse, NavbarLink, NavbarToggle, Avatar } from "flowbite-react";
import {Link, useLocation} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import {useSelector} from 'react-redux'
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";



const Header = () => {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state=>state.user);
    
  return (
    <Navbar className="border-b-2 border-gray-300">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 hover:bg-gradient-to-l hover:from-purple-500 hover:to-lime-200 focus:ring-lime-200 rounded-md tracking-[0.7px] text-white">Sanjeet's</span>
            Blog
        </Link>
        <form>
            <TextInput
                type="text"
                placeholder="Search..."
                rightIcon={CiSearch}
                className="hidden lg:inline"
            />
        </form>
        <Button className="text-xl bg-gray-200 lg:hidden hover:bg-gray-300" pill>
            <CiSearch className="text-black"/>
        </Button>

        <div className="flex gap-2 md:order-2 ">
            {currentUser ? (
                <Dropdown
                    arrowIcon={false}
                    inline
                    dismissOnClick={false}
                    label={
                        <Avatar
                            alt="user"
                            img={currentUser.profilePicture}
                            rounded
                        />
                    }
                >
                <DropdownHeader>
                  <span className="block text-sm">@{currentUser.username}</span>
                  <span className="block truncate text-sm font-medium">{currentUser.email}</span>
                </DropdownHeader>
                <Link to='/dashboard?tab=profile'>
                    <DropdownItem>Profile</DropdownItem>
                </Link>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
            ):(
                <Link to="/sign-in">
                <Button  className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 ">
                    Sign In
                </Button>
            </Link>
            )}
            <NavbarToggle/>
        </div>
        
        <NavbarCollapse>
            <NavbarLink active={path === "/"} as={'div'}>
                <Link to='/'>Home</Link>
            </NavbarLink>
            <NavbarLink active={path === "/about"} as={'div'}>
                <Link to='/about'>About</Link>
            </NavbarLink>
            <NavbarLink active={path === "/projects"} as={'div'}>
                <Link to='/projects'>Projects</Link>
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

export default Header  