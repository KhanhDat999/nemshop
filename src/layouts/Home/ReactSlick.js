import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState , useRef} from 'react';
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux';
import React from "react";
import Slider from "react-slick";



const cx = classNames.bind(styles)

function ReactSlick() {
    const Item = useSelector(state => state.data.users)

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
                    slidesToScroll: 3,
                    infinite: false,
                  
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
            },
            
        ]
    };

    return (
       
            <div style={{ display: 'flex' }}>
                <div className={cx('btnprew')}>
                    <button className={cx('nextimg')} onClick={previous} >  <GrFormNext /> </button>
                </div>
                <div className={cx('product')} sm={4} xs={2}>
                    <Slider ref={slider} {...settings}>
                        {Item && Item.map((res, index) => (
                            <div key={index}>
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
                                    <div> {res.name} </div>
                                    <span>{res.gia}₫</span>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={cx('btnnext')}>
                    <button className={cx('nextimg')} onClick={next}  >  <GrFormNext /> </button>
                </div>

            </div>



    
    );
}

export default ReactSlick;