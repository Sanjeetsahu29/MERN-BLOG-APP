import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full">
        
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <div className="text-sm text-gray-600 sm:text-center"><span>&#169;</span> {new Date().getFullYear()} Created by Sanjeet Sahu</div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon 
                href="https://www.facebook.com/" 
                target="_blank"
                icon={BsFacebook} 
                className="hover:text-blue-600"
            />
            <FooterIcon 
                href="https://www.instagram.com/sanjeetsahu29/?hl=en" 
                target="_blank"
                icon={BsInstagram} 
                className="hover:text-pink-600"
            />
            <FooterIcon 
                href="https://x.com/sanjeetsahus29" 
                icon={BsTwitter} 
                target="_blank"
                className="hover:text-blue-400"
            />
            <FooterIcon 
                href="https://github.com/Sanjeetsahu29" 
                target="_blank"
                icon={BsGithub} 
                className="hover:text-gray-900"
            />
            
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterComponent;