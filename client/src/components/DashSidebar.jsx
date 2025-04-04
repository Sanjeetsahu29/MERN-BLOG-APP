import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    
  },[location.search])
  return (
    <Sidebar className="w-full md:w-56" aria-label="Sidebar">
      <SidebarItems>
        <SidebarItemGroup>
          <Link to='/dashboard?tab=profile'>
            <SidebarItem active={tab === 'profile'} label={'user'} labelColor="dark"icon={HiUser} className="cursor-pointer">
              Profile
            </SidebarItem>
          </Link>
          <SidebarItem href="#" icon={HiArrowSmRight} className="cursor-pointer">
            Sign out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default DashSidebar;