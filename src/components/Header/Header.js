import './Header.css'
import {Link, NavLink } from 'react-router-dom';
function Header() {

  return (
    <div className="header">
<div className='container'>
    <div className="logo">
        <Link to="/">Movies</Link>
    </div>
    <ul className="list-unstyled">
    <li><NavLink to="/" exact="true" >watch list</NavLink></li>
    <li><NavLink to="/watched">watched</NavLink></li>
    <li><NavLink  to="/add" className="btn btn-success">add</NavLink></li>
        </ul>
</div>
     </div>
  );
}

export default Header;
