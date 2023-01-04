import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';




const cx = classNames.bind(styles)
function Footer() {
    return (
        <div>
            <div className={cx('header')}>
                <div className={cx('body')}>
                    <h2> ĐĂNG KÝ BẢN TIN </h2>
                    <p>Đăng ký nhận bản tim Nem để được cập nhật những mẫu thiết kế mới nhất</p>
                    <input placeholder='Vui lòng nhập email...'  />
                    <button>Đăng ký</button>
                    <div className={cx('icon')}>
                        <a rel="noreferrer" href='https://www.facebook.com/nemfashion.official' target="_blank" >   <BsFacebook  color='#007AFF' /> </a>
                      <a rel="noreferrer" href='https://www.instagram.com/nemfashion.official/?hl=vi' target="_blank" ><AiFillInstagram color='#E83349' /></a>
                      <a rel="noreferrer" href='https://www.youtube.com/channel/UCrDQ6euiL9CekivZmD9-MCA' target="_blank" >
                           <AiFillYoutube color='#EB1111' />
                      </a>
                     
                    </div>
                </div>


            </div>
        

         
        </div>
    );
}

export default Footer;