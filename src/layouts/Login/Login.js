import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import Dangnhap from './Dangnhap';

const cx = classNames.bind(styles)

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        const cart = localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : []
        const abc = cart.some((res) => {
            return res.Email == data.Email
        })

        if (abc == true) toast.error("Tài khoản đã được đăng ký")
        else {

            cart.push({
                Họ: data.Họ,
                Tên: data.Tên,
                sdt: data.Sdt,
                Email: data.Email,
                matkhau: data.matkhau
            })

            localStorage.setItem("login", JSON.stringify(cart))
            toast.success('Đăng ký thành công')
        }



    }



    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <hr style={{ opacity: '0.1' }}></hr>

            <div style={{ marginLeft: '40px' }}>
                TRANG CHỦ / TÀI KHOẢN
            </div>
            <hr style={{ opacity: '0.1' }}></hr>


            <div className={cx('body')}>

                <div className={cx('dangnhap')}>
                        <Dangnhap/>
                </div>
                <div className={cx('hr')}>

                </div>

                <div className={cx('dangky')}>
                    <h2>ĐĂNG KÝ</h2>
                    <div>
                        Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <label>
                                Họ
                            </label>
                        </Row>

                        <Row>
                            <input {...register("Họ", { required: true, pattern: { value: /^[A-Za-z]+$/i, message: "Họ không hợp lệ" } })} placeholder='Họ' />
                            <p style={{ color: 'red', maxHeight: '0px' }}>{errors.Họ?.message}</p>
                        </Row>
                        <Row>
                            <label>Tên</label>
                        </Row>
                        <Row>
                            <input {...register("Tên", { required: true, pattern: { value: /^[A-Za-z]+$/i, message: "Tên không hợp lệ  " } })} placeholder='Tên' />
                            <p style={{ color: 'red', maxHeight: '0px' }}>{errors.Tên?.message}</p>
                        </Row>
                        <Row>
                            <label >Email</label>

                        </Row>
                        <Row>
                            <input {...register("Email", {
                                required: true, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email không hợp lệ"
                                }
                            })} placeholder='Email' />
                            <p style={{ color: 'red', maxHeight: '0px' }}> {errors.Email?.message}</p>
                        </Row>
                        <Row>
                            <label>Số điện thoại</label>
                        </Row>
                        <Row>
                            <input {...register("Sdt", { required: true, pattern: { value: /^(()?\d{3}())?(-|\s)?\d{6}(-|\s)?\d{4}$/, message: "Số điện thoại không hợp lệ" } })} placeholder='Số điện thoại' />
                            <p style={{ color: 'red', maxHeight: '0px' }}> {errors.Sdt?.message}</p>
                        </Row>
                        <Row>
                            <label >Mật khẩu</label>
                        </Row>
                        <Row>
                            <input {...register("matkhau", { required: "Vui lòng nhập Mật khẩu" })} type='password' placeholder='Mật khẩu' />
                            <p style={{ color: 'red', maxHeight: '0px' }}> {errors.matkhau?.message}</p>
                        </Row>
                        <div>
                            <Row><button type="submit"> Đăng ký </button>  </Row>
                        </div>
                    </form>
                </div>

            </div>
           
        </>
    );
}

export default Login;