import styles from './Giohang.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../../components/defaulayout/defaulayout';
import toast, { Toaster } from 'react-hot-toast';

const cx = classNames.bind(styles)

function Giohang() {

    const Item = useContext(Global)
    const [item, setItem] = useState()
    const [total, setTotal] = useState(0)


    const Xoa = (index) => {
        const Delete = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        const Deletes = Delete.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(Delete))
        toast.success('Đã xoá sản phẩm khỏi giỏ hàng')
        Getdata()
    }

    const Getdata = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        setItem(cart)

  
        const abc = cart.reduce((total, item) => {
         
            return total + item.price

        }, 0)
  
        
        setTotal(abc)
    }


    useEffect(() => {
        Getdata()
    }, [])

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <hr style={{ opacity: '0.1' }}></hr>
            <div style={{ marginLeft: '40px' }}>
                TRANG CHỦ / GIỎ HÀNG CỦA BẠN - NEM FASHION
            </div>
            <hr style={{ opacity: '0.1' }}></hr>
            <div className={cx('body')}>

                <div >
                    <h1>GIỎ HÀNG</h1>
                </div>

                <hr style={{ opacity: '0.1' }}></hr>
                <Row >

                    <div className={cx('chitiet')}>
                        <Col lg={6}>
                            <div>
                                Sản phẩm
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div>
                                Giá
                            </div>
                        </Col>
                        
                        <Col lg={2}>
                            <div>
                                Tổng tiền
                            </div>
                        </Col>
                    </div>
                </Row>
                <hr style={{ opacity: '0.1' }}></hr>


                {item && item.map((res, index) => (

                    <div>
                        <div className={cx('order')}>
                            <div >
                                <Row className={cx('chitiet1')}>
                                    <Col className={cx('img1')} lg={2}>
                                        <Link to='/chi-tiet-san-pham'>  <img onClick={() => Item.setItem(res)} className={cx('img')} src={res.img} />  </Link>

                                    </Col>
                                    <Col className={cx('gia')} lg={4}>
                                        <h4>{res.name}</h4>
                                        <p>Phiên bản: Free size / {res.mausac}</p>
                                        <p>Thương hiệu: NEM</p>
                                     
                                    </Col>
                                    <Col className={cx('gia')} lg={2}><h3>{res.gia}₫</h3></Col>
                                  
                                    <Col className={cx('gia')} lg={2}><h4  onClick={() => Xoa(index)}>Xoá</h4></Col>
                                </Row>
                            </div>
                        </div>
                        <hr style={{ opacity: '0.1' }}></hr>
                    </div>

                ))}


                {/* <div style={{ float: 'right' }}> <h4>Tổng tiền {total}.000₫ </h4></div> */}
            </div>
        </div >
    );
}

export default Giohang;