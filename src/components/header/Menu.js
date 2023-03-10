import styles from './Menu.module.scss'
import classNames from 'classnames/bind';
import { MdClear } from 'react-icons/md'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Menu({ setMenu }) {
   
    return (
        <div className={cx('body')} >
            <div >
                <MdClear className={cx('menu1')} onClick={() => setMenu(false)} /><br></br>
                <Link to='/sanpham' >
                    <h3>SẢN PHẨM</h3>
                </Link>
                <Link to='/tatcasanpham' >
                    <h3>SẢN PHẨM MỚI</h3>
                </Link>
                <Link to='/bosuutap' >
                    <h3>BỘ SƯU TẬP</h3>
                </Link>
                <Link to='/nemonline' >
                    <h3>NEW ONLINE</h3>
                </Link>
                <Link to='/nhapkhaunhatban' >
                    <h3>SẢN PHẨM NHẬP KHẨU TỪ NHẬT BẢN</h3>
                </Link>
            </div>
        </div>
    );
}

export default Menu;