import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
<header>
  <nav>
    <ul>
      <li><Link to='/user/priyam'>Home</Link></li>
      <li><Link to='/roster'>Roster</Link></li>
      <li><Link to='/schedule'>Schedule</Link></li>
    </ul>
  </nav>
</header>
);
export default Header;
