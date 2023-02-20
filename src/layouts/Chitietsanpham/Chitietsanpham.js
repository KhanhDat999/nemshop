import styles from './Chitietsanpham.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles)

function GiohangChitiet() {
    const Item = useSelector(state => state.props)

    const [img, setImg] = useState()
    const [soluong, setSoluong] = useState(1)

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, [])

    const Prew = () => {
        if (soluong === 1) return;
        setSoluong(soluong - 1)
    }

    const Cart = async () => {

        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

        const abc = cart.some((res) => {
            return res.id === Item.id
        })

        if (abc === true) toast.error("Sản phẩm đã được thêm vào giỏ hàng")
        else {

            cart.push({
                id: Item.id,
                img: Item.img,
                img1: Item.img1,
                img2: Item.img2,
                kieudang: Item.kieudang,
                masp: Item.masp,
                phuhop: Item.phuhop,
                chatlieu: Item.chatlieu,
                name: Item.name,
                gia: Item.gia,
                mausac: Item.mausac,
                price: Item.price,
                soluong: soluong
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
                        <img onClick={() => setImg(Item.img)} src={Item.img} alt='img' />
                    </div>
                    <div className={cx('chitiet')}>
                        <img onClick={() => setImg(Item.img1)} src={Item.img1} alt='img' />
                    </div>
                    <div className={cx('chitiet')}>
                        <img onClick={() => setImg(Item.img2)} src={Item.img2} alt='img' />
                    </div>
                </div>
                <div className={cx('hinhlon')} >
                    <img src={img || Item.img} alt='img' />
                </div>
                <div className={cx('giohang')}>
                    <div>
                        <h5>{Item.name}</h5>
                    </div>
                    <p>Thương hiệu : Nem</p>
                    <p>Mã SP: {Item.masp}</p>
                    <h2>{Item.gia}₫</h2>
                    <h4> Màu sắc : {Item.mausac}</h4>
                    <div style={{ marginTop: '20px', marginBottom: '30px' }} >
                        <Row >
                            <Col>
                                <button onClick={Cart} className={cx('Btn')}> Thêm vào giỏ </button>
                            </Col>
                        </Row>
                    </div>
                    <p>Chất liệu: {Item.chatlieu}</p>
                    <p>Kiểu dáng: {Item.kieudang}</p>
                    <p>Phù hợp: {Item.phuhop}</p>
                    <p>Sản phẩm thuộc dòng sản phẩm:  NEM NEW</p>
                    <p>Thông tin người mẫu: mặc sản phẩm size 2</p>
                </div>
            </div>
        </div>
    );
}

export default GiohangChitiet;