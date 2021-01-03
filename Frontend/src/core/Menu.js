import React from 'react'

const Menu=()=> {
    return (
        <div>
        <nav class="navbar  bg-dark  navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item  text-white active">
                <a class="nav-link bg-dark text-white "  href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link bg-dark text-white" href="#">SignUp</a>
                </li>
                <li class="nav-item">
                <a class="nav-link bg-dark text-white" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav> 
        </div>
    )
}

export default Menu;
