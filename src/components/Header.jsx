import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            {/* why position relative is used dont know */}
         <div className='relative flex items-center justify-between'>
               {/* logo section */}
               <Link to='/' className='inline-flex items-center'>
            <BoltIcon className="h-6 w-6 text-blue-500" />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>NextPage</span>
            </Link>
            {/* nav Items section */}
            <ul className='hidden lg:flex space-x-8 items-center'>
                <li>
                    <NavLink to='/' className={({isActive})=>isActive? 'active':'default'}>Home</NavLink>
                </li>
                
                <li>
                    <NavLink to='/about' className={({isActive})=>isActive? 'active':'default'}>About</NavLink>
                </li>
                
                <li>
                    <NavLink to='/books' className={({isActive})=>isActive? 'active':'default'}>Books</NavLink>
                </li>
                
            </ul>

         </div>
        </div>
    );
};

export default Header;