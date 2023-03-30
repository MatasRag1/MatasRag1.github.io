import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav_container'>
        <a className='nav_item' href='#Home'>
          home
        </a>
        <a className='nav_item' href='#About'>
          about
        </a>
        <a className='nav_item' href='#Projects'>
          projects
        </a>
        <a className='nav_item' href='#Contact'>
          contact
        </a>
      </div>
    </div>
  );
}
