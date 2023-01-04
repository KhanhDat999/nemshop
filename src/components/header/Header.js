import {  Link} from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect, useContext } from 'react';
import { Global } from '../defaulayout/defaulayout';
import Menu from './Menu';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const cx = classNames.bind(styles)

const config = {
  apiKey: 'AIzaSyCcwqVwpcKbzBNp3UN1Xo18lhVl55QBvRQ',
  authDomain: 'nemshop-b8fd2.firebaseapp.com',
  // ...
};

firebase.initializeApp(config);

function Header() {
  const Item = useContext(Global)
  const [item, setItem] = useState([])
  const [menu, setMenu] = useState(false)
  const [chu, setChu] = useState(true)
  const [user, setUser] = useState('')
  const  singin = JSON.parse(localStorage.getItem("singup"))

  const Getdata = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart.length > 0) {
      setChu(false)

    }
    else {
      setChu(true)
    }
    setItem(cart)
  }





  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {

      if (!user) {
   
        return;
      }
      setUser(user.displayName)
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);


  return (
    <div >


      <div className={cx('header')} >
        <div className={cx('bodyheader')}>
          <Link to='/' > <img className={cx('img')} alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/logo.png?v=283' data-aos="fade-up" data-aos-easing="ease-in-out"
            data-aos-duration="1200" /></Link>
          <div className={cx('responsive')}>
            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" > SẢN PHẨM </Link>
          </div>
          <div className={cx('responsive')}>

            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200" > SẢN PHẨM MỚI </Link>
          </div >
          <div className={cx('responsive')}>
            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1400" > BỘ SƯU TẬP </Link>
          </div>
          <div className={cx('responsive')}>
            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1600" > NEM ONLINE </Link>
          </div>
          <div className={cx('responsive')}>
            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1800" > SALE </Link>
          </div >
          <div className={cx('responsive')}>

            <Link to='/tatcasanpham' data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="2000" > SẢN PHẨM NHẬP KHẨU NHẬT BẢN </Link>
          </div>
          <AiOutlineSearch className={cx('search')} data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="2200" />
          <div className={cx('abc')}>

            <div className={cx('taikhoan')}>

              <img alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/account.png?v=283' data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="2400" />
              {
                user && 
                <span data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="2400">{user}</span>
              }
               {
                singin && 
                <span data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="2400">{singin.Họ} {singin.Tên}</span>
              }
              {
                user &&   <div className={cx('hoverdangky1')}>
                <a href='/' >  <div onClick={() => firebase.auth().signOut()} className={cx('div')}>Đăng xuất</div> </a>
              
              </div>
              }
               {
                singin &&   <div className={cx('hoverdangky1')}>
                <a href='/' >  <div onClick={() => localStorage.removeItem("singup")} className={cx('div')}>Đăng xuất</div> </a>
              
              </div>
              }
              {
                !user && !singin &&
                <span data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="2400">Tài khoản</span>
              }
              {!user && !singin &&
              <div className={cx('hoverdangky')}>
                <Link to='/login' >  <div className={cx('div')}>Đăng nhập</div> </Link>
                <Link to='/login'>  <div className={cx('div')}>Đăng ký</div>  </Link>
              </div>
              }
            </div>
          </div>
          <div onMouseOver={Getdata} className={cx('abc')}>
            <div className={cx('giohang')}>
              <Link data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="2600" to='/giohang'>
                <img alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/cart.png?v=283' data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="2600" />
                <span data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="2600">Giỏ hàng</span>
              </Link>
              <div className={cx('hovergiohang')}>
                <div className={cx('khanhdat')}>
                  {chu && <h4 style={{ margin: 'auto' }}>Bạn chưa có sản phẩm nào</h4>}
                  {item && item.map((res, index) => (
                    <Link to='/chitietsanpham' > <div onClick={() => Item.setItem(res)} className={cx('item')}>
                      <img alt='img' src={res.img} />
                      <div className={cx('content')}>
                        <p>{res.name}</p>
                        <p>{res.mausac}</p>
                        <p>tièn</p>
                        <h4>{res.gia}</h4>
                      </div>
                    </div></Link>
                  ))}
                </div>
                <div className={cx('xemgiohang')} >
                  <h4 ><Link to='/giohang'> Xem giỏ hàng </Link></h4>
                </div>
              </div>


            </div>
          </div>

          <div className={cx('abc')}>
            <div className={cx('menu')}>
              <AiOutlineMenu className={cx('menu1')} onClick={() => setMenu(true)} />

            </div>

          </div>

        </div>
      </div>

      <div >

        {
          menu &&
          <Menu setMenu={setMenu} />
        }
      </div>
    </div>
  );
}

export default Header;