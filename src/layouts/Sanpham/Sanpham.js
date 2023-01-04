import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './Sanpham.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Global } from '../../components/defaulayout/defaulayout'
import { AiOutlineDown } from 'react-icons/ai'

const cx = classNames.bind(styles)

function Items({ currentItems }) {

    const Item = useContext(Global)

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Row xs={3} md={3} lg={3}>
                    {currentItems && currentItems.map((res, index) => (
                        <div style={{ marginTop: '14px' }}>

                            <Col>
                                <div className={cx('animation')}>
                                    <div className={cx('middle')}>
                                        <div className={cx('middle1')}>
                                            <Link to='/chitietsanpham' className={cx('text')} onClick={() => Item.setItem(res)} > CHI TIẾT    </Link>
                                        </div>
                                    </div>
                                    <img className={cx('img')}  alt='img' src={res.img} />
                                </div>
                                <div className={cx('chitiet')}>
                                    <p><Link>{res.name}</Link></p>
                                    <span>{res.gia}₫</span>
                                </div>
                            </Col>


                        </div>
                    ))}
                </Row>
            </div>
        </>
    );
}




function Sanpham() {
    const Item = useContext(Global)
    const [item, setItem] = useState([])

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 9;
    const currentItems = Item.aolen.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(Item.aolen.length / 9)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 9) % Item.aolen.length;
        setItemOffset(newOffset);
    };

    const Gia = (price, price1) => {
        const abc = Item.tatca.filter((res, index) => {

            return res.price > price && res.price < price1
        })
        setItemOffset(0)
        Item.setAolen(abc)
    }
    const Gia500 = (price) => {
        if (typeof price == 'number') {
            const abc = Item.tatca.filter((res) => {
                return res.price < price
            })
            setItemOffset(0)
            Item.setAolen(abc)
        }
        else {
            const abc = Item.tatca.filter((res) => {
                return res.mausac == price
            })

            Item.setAolen(abc)
            setItemOffset(0)

        }
    }


    return (
        <div>
            <hr></hr>
            <div>
                <h5>TRANG CHỦ / TẤT CẢ SẢN PHẨM</h5>
            </div>
            <Row>
                <Col > <img style={{ width: '100%' }} alt='sd' src='https://file.hstatic.net/200000182297/file/z3824988104332_e30b6f149c965440666761b25c489464__1__dbc437c43a9b4e3892dfc3cfe78edd72.jpg' /></Col>
            </Row>
            <div className={cx('body')}>
                <div className={cx('panel')}>
                    <ul>Danh mục</ul>
                    <ul>Tất cả sản phẩm</ul>
                    <ul>Sale</ul>
                    <li>Sale up to 70%</li>
                    <li>Đồng giá từ 149k</li>
                    <ul>Đầm</ul>
                    <li>Đầm suông</li>
                    <li>Đầm dáng A</li>
                    <li>Đầm ôm</li>
                    <ul>Áo sơ mi</ul>
                    <li>Dài tay</li>
                    <li>Ngắn tay</li>
                    <li>Tay lỡ</li>
                    <li>Áo kiểu</li>
                    <ul>Áo dài</ul>
                    <ul>Quần</ul>
                    <li>Quần dài</li>
                    <li>Quần Jeans</li>
                    <li>Quần short</li>
                    <ul>Chân váy</ul>
                    <li>Chân váy xếp li</li>
                    <li>Chân váy bút chì</li>
                    <li>Chân váy chữ A</li>
                    <ul>Set bộ</ul>
                    <ul>Jumpsuit</ul>
                    <ul>Phụ kiện</ul>
                    <li>Giày </li>
                    <li>Túi xách</li>
                    <ul>Áo khoác</ul>
                    <li>Áo Vest</li>
                    <li>Áo Phao</li>
                    <li>Măng tô</li>
                    <li>Áo khoác kiểu</li>

                </div>
                <div>

                </div>
                <div className={cx('bodyright')}>
                    <div className={cx('content')}>
                        <div>
                            <h1>TẤT CẢ SẢN PHẨM</h1>
                        </div>
                        <div className={cx('colecsionsibar')}>

                            <div className={cx('gia')}>
                                <span>Màu sắc</span> <AiOutlineDown />
                                <div className={cx('hovergia1')}>
                                    <form>


                                        <div>
                                            <input onClick={() => Item.setAolen(Item.tatca)} name="fav_language" type='radio' />
                                            <label>Tất cả</label>
                                        </div>
                                        <div>
                                            <input value='Trắng' onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Trắng</label>
                                        </div>
                                        <div>
                                            <input value="Đen" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Đen</label>
                                        </div>
                                        <div>
                                            <input value="Nâu" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Nâu</label>
                                        </div>
                                        <div>
                                            <input value="Hồng" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Hồng</label>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className={cx('gia')}>
                                <span >Giá</span> <AiOutlineDown />
                                <div className={cx('hovergia')}>
                                    <div>
                                        <input name="fav_language" onClick={() => Item.setAolen(Item.tatca)} type='radio' />
                                        <span>Tất cả</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia500(0.5)} type='radio' />
                                        <span>Nhỏ hơn 500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(0.5, 1)} type='radio' />
                                        <span>Từ 500,000đ - 1,000,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(1, 1.5)} type='radio' />
                                        <span>Từ 1,000,000đ - 1,500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(2, 2.5)} type='radio' />
                                        <span>Từ 2,000,000đ - 2,500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" type='radio' />
                                        <span>Lớn hơn 2,500,000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product')}>
                        <Items currentItems={currentItems} />
                        {item &&

                            <div className={cx('pagination')}>

                                <ReactPaginate
                                    previousLabel={"Prew"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    activeClassName={"khanhdat"}
                                />
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sanpham;