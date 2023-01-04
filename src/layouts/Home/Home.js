import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from 'react';
import { Global } from '../../components/defaulayout/defaulayout';
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Home() {
    const [next, setNext] = useState(4)
    const [prew, setPrew] = useState(0)
    const [next1, setNext1] = useState(10)
    const [prew1, setPrew1] = useState(6)


    const Item = useContext(Global)


    const Prew = () => {
        if (prew === 0) {

            setNext(Item.list.length)
            setPrew(Item.list.length - 4)
            return
        }


        setNext(next - 1)
        setPrew(prew - 1)

    }


    const Next = () => {
        if (window.innerWidth > 576 && next === Item.list.length) {
            setNext(4)
            setPrew(0)
          
            return
        }
        if (window.innerWidth <= 576 && next === Item.list.length) {
            setNext(2)
            setPrew(0)
        
            return

        }
        setNext(next + 1)
        setPrew(prew + 1)
    }

    const Prew1 = () => {
        if (prew1 === 6) {
            setNext1(11)
            setPrew1(7)
            return
        }
        setNext1(next1 - 1)
        setPrew1(prew1 - 1)

    }

    const Next1 = () => {
        if (prew1 === 7) {
            setNext1(10)
            setPrew1(6)
            return
        }
        setNext1(next1 + 1)
        setPrew1(prew1 + 1)
    }

    useEffect(() => {

        const handleNext = () => {
            if (window.innerWidth < 576) {
                setNext(2)
                setNext1(8)
                setPrew(0)
                setPrew1(6)


                return
            }
            if (window.innerWidth > 576) {
                setNext(4)
                setNext1(10)
                setPrew(0)
                setPrew1(6)
            }
        }

        const handleScroll = () => {

        }

        window.addEventListener('resize', handleNext)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', handleNext)
        }
    }, [])
    return (
        <div>
            <div className={cx('body')}>
                <div className={cx('banner')} >
                    <Row>
                        <img className={cx('banner')} alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2.jpg?v=286' />
                    </Row>
                </div>
                <div className={cx('image')}>
                    <Row sm={2} xs={2}>
                        <Col className={cx('banner1')} data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="0"
                            data-aos-duration="1000" >
                            <img className={cx('img')} alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=286' />
                            <div className={cx('titlebtn')}>
                                <div className={cx('title')}>
                                    New decolation
                                </div>
                                <div className={cx('btnshopnow')}>
                                    SHOP NOW
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-left"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="0"
                            data-aos-duration="1000" >
                            <img className={cx('img')} alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=286' />
                            <div className={cx('titlebtn')}>
                                <div className={cx('title')}>
                                    BEST SELECTER
                                </div>
                                <div className={cx('btnshopnow')}>
                                    SHOP NOW
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div >
                    <h2 className={cx('sanphammoi')} data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                    >
                        SẢN PHẨM MỚI
                    </h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={cx('btnprew')}>
                        <button className={cx('nextimg')} onClick={Prew} >  <GrFormNext /> </button>
                    </div>
                    <Row className={cx('product')} sm={4} xs={2}>

                        {Item.list && Item.list.slice(prew, next).map((res, index) => (
                            <div key={index}>
                                <Col>
                                    <div key={index} className={cx('container')}>
                                        <div className={cx('animation')}>
                                            <div className={cx('middle')}>
                                                <div className={cx('middle1')}>
                                                    <Link to='/chitietsanpham' className={cx('text')} onClick={() => Item.setItem(res)} > CHI TIẾT    </Link>
                                                </div>
                                            </div>
                                            <img className={cx('img')} alt='img' src={res.img} />
                                        </div>
                                    </div>
                                    <div> {res.name} </div>
                                    <span>{res.gia}₫</span>
                                </Col>
                            </div>
                        ))}
                    </Row>
                    <div className={cx('btnnext')}>
                        <button className={cx('nextimg')}  onClick={Next}  >  <GrFormNext /> </button>
                    </div>

                </div>
                <div >
                    <h2 className={cx('sanphammoi')} data-aos="fade-left"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                        data-aos-offset="10">
                        Áo Len cao cấp
                    </h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={cx('btnprew')}>
                        <button className={cx('nextimg')} onClick={Prew1} >  <GrFormNext /> </button>
                    </div>
                    <Row className={cx('product')} sm={4} xs={2}>
                        {Item.aolen && Item.list.slice(prew1, next1).map((res, index) => (
                            <div key={index}>
                                <Col>
                                    <div key={index} className={cx('container')}>
                                        <div className={cx('animation')}>
                                            <div className={cx('middle')}>
                                                <div className={cx('middle1')}>
                                                    <Link to='/chitietsanpham' className={cx('text')} onClick={() => Item.setItem(res)} > CHI TIẾT    </Link>
                                                </div>
                                            </div>
                                            <img className={cx('img')} alt='img' src={res.img} />
                                        </div>
                                    </div>
                                    <div> {res.name} </div>
                                    <span>{res.gia}₫</span>
                                </Col>
                            </div>
                        ))}
                    </Row>
                    <div className={cx('btnnext')}>
                        <button className={cx('nextimg')} onClick={Next1} >  <GrFormNext /> </button>
                    </div>
                </div>

                <div className={cx('banner')} >
                    <Row>

                        <img className={cx('banner')} alt='img' src='https://theme.hstatic.net/200000182297/1000887316/14/hb_image1.jpg?v=286' />
                    </Row>

                </div>


            </div>

        </div >
    );
}

export default Home;