import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../redux';
import React from "react";
import Slider from "react-slick";

const cx = classNames.bind(styles)

function ReactSlick({Item}) {

    const dispatch = useDispatch()
    const slider = useRef(null);
    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev();
    };
    const settings = {
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },

        ]
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className={cx('btnprew')} onClick={previous}>
                <button className={cx('nextimg')}  >  <GrFormNext /> </button>
            </div>
            <Slider className={cx('product')} ref={slider} {...settings}>
                {Item && Item.map((res, index) => (
                    <div key={index} className={cx('productchild')}>
                        <div key={index} className={cx('container')}>
                            <div className={cx('animation')}>
                                <div className={cx('middle')}>
                                    <div className={cx('middle1')}>
                                        <Link to='/chitietsanpham' className={cx('text')} onClick={() => dispatch(increment(res))} > CHI TIẾT    </Link>
                                    </div>
                                </div>
                                <img className={cx('img')} alt='img' src={res.img} />
                            </div>
                        </div>
                        <div className={cx('name')}> {res.name} </div>
                        <span>{res.gia}₫</span>
                    </div>
                ))}
            </Slider>
            <div className={cx('btnnext')}  onClick={next}>
                <button className={cx('nextimg')}  >  <GrFormNext /> </button>
            </div>
        </div>
    );
}

export default ReactSlick;