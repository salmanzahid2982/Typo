import React from 'react'
import image from '../Logo/typo.png'
import profile from '../Logo/ResumeImage.png'

const Header=()=> {
  const property={width:"50%",height: "auto"}
    return (
        <div>
          <header style={{position:"initial"}}class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="">
                <span><img src={image} style={property} alt="Logo" /></span>
              </a>
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-white" href="">Home</a>
                <a class="mr-5 hover:text-white" href="">SignUp</a>
                <a class="mr-5 hover:text-white" href="">Login</a>
                <a class="mr-5 hover:text-white" href="">SignOut</a>
              </nav>
            </div>
          </header>
        </div>
    )
}
export default Header;
