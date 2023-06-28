import { memo } from 'react';
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>Trai</div>
                    <div className='col-6 header_top_right'>
                        <div>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                        <span>Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Header);