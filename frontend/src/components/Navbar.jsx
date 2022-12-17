import {React} from 'react';
import '../style.css'

const Navbar = () => {
    const user='Awais'
  return (
    <header className="header">
        <nav className='nav'>
            <div className="logo">
                <a href="#">Awais</a>
            </div>
            <ul className='nav-item'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">SignUp</a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar