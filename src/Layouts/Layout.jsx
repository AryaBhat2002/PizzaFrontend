/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import PizzaLogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';
import CartIcon from '../assets/Images/cart.svg'

function Layout({children}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { cartsData } = useSelector((state) => state.cart);

    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout());
    }

    return(
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center hover:cursor-pointer" onClick={() => navigate('/')}>
                    <p>Pizza App</p>
                    <img src={PizzaLogo} alt="Pizza logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex items-center justify-around gap-4'>
                        <li className='hover:text-[#FF9110] hover:cursor-pointer'>
                            {' '}
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110] hover:cursor-pointer'>
                            {' '}
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110] hover:cursor-pointer'>
                            {' '}
                            <p>About {' '}</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <li className='hover: text-[#b56810]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ): (
                                <Link to={'/auth/login'}>Login</Link>
                            )}
                        </li>

                        {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline'/>
                                    {' '}
                                    <p className='text-black inline'>{cartsData?.items?.length}</p>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>


            </nav>

                {children}

            <Footer />
        </div>
    )
}

export default Layout;