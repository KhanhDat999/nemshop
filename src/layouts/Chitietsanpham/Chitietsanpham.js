import styles from './Chitietsanpham.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Global } from '../../components/defaulayout/defaulayout';
import toast, { Toaster } from 'react-hot-toast';


const cx = classNames.bind(styles)

function GiohangChitiet() {

    const [img, setImg] = useState()
    const [soluong, setSoluong] = useState(1)
    const Item = useContext(Global)

    const { item } = Item
    useEffect(() =>{
        document.documentElement.scrollTop = 0;
    },[])

    const Prew = () => {
        if (soluong == 1) return;
        setSoluong(soluong - 1)
    }

    const Cart = async () => {

        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

        const abc = cart.some((res) => {
            return res.id == item.id
        })

        if (abc == true) toast.error("Sản phẩm đã được thêm vào giỏ hàng")
        else {

            cart.push({
                id: item.id,
                img: item.img,
                img1: item.img1,
                img2: item.img2,
                kieudang: item.kieudang,
                masp: item.masp,
                phuhop: item.phuhop,
                chatlieu: item.chatlieu,
                name: item.name,
                gia: item.gia,
                mausac: item.mausac,
                price : item.price,
                soluong : soluong
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            toast.success('Đã thêm sản phẩm vào giỏ hàng')
        }
    }
    return (

        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <hr style={{ opacity: '0.1' }}></hr>
            <div style={{ marginLeft: '40px' }}>
                TRANG CHỦ / TẤT CẢ SẢN PHẨM / CHI TIẾT
            </div>
            <hr style={{ opacity: '0.1' }}></hr>
            <div className={cx('body')}>
                <div className={cx('hinhnho')}>

                    <div className={cx('chitiet')}>
                        <img onClick={() => setImg(item.img)} src={item.img} alt='img' />
                    </div>
                    <div className={cx('chitiet')}>
                        <img onClick={() => setImg(item.img1)} src={item.img1} alt='img' />
                    </div>
                    <div className={cx('chitiet')}>
                        <img onClick={() => setImg(item.img2)} src={item.img2} alt='img' />
                    </div>
                </div>
                <div className={cx('hinhlon')} >
                    <img src={img || item.img} alt='img' />
                </div>
                <div className={cx('giohang')}>
                    <div>
                        <h5>{item.name}</h5>
                    </div>
                    <p>Thương hiệu : Nem</p>
                    <p>Mã SP: {item.masp}</p>
                    <h2>{item.gia}₫</h2>
                    <h4> Màu sắc : {item.mausac}</h4>
                    <div style={{ marginTop : '20px' , marginBottom : '30px'}} >
                        <Row >
                            <Col>
                                <button onClick={Cart} className={cx('Btn')}> Thêm vào giỏ </button>
                            </Col>
                        </Row>
                    </div>
                    <p>Chất liệu: {item.chatlieu}</p>
                    <p>Kiểu dáng: {item.kieudang}</p>
                    <p>Phù hợp: {item.phuhop}</p>
                    <p>Sản phẩm thuộc dòng sản phẩm:  NEM NEW</p>
                    <p>Thông tin người mẫu: mặc sản phẩm size 2</p>
                </div>
            </div>
        </div>
    );
}

export default GiohangChitiet;