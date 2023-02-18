import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import ReactSlick from './ReactSlick';

const cx = classNames.bind(styles)

function Home() {
    const Item = useSelector(state => state.data.users)
    const item = Item.slice(6, 11)
   
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
                <div>
                    <ReactSlick Item={Item} />
                </div>
                <div >
                    <h2 className={cx('sanphammoi')} data-aos="fade-left"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                        data-aos-offset="10">
                        Áo Len cao cấp
                    </h2>
                </div>
                <div>
                    <ReactSlick Item={item} />
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