
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// const cx = classNames.bind(styles)

function Dangnhap() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        
        const login = JSON.parse(localStorage.getItem("login"))
      
          const abc = login.find((res ) =>{

            return res.Email == data.Email && res.Email == data.Email
        })
         localStorage.setItem("singup", JSON.stringify(abc))
         navigate('/nemshop')
         window.location.reload();
    }
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',

        signInSuccessUrl: '/nemshop',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
       
      };
    
    return (
        <>
            <h2>ĐĂNG NHẬP</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
                </div>
                <Row>
                    <label>Email</label>
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
                    <label>Mật khẩu</label>
                </Row>
                <Row>
                    <input {...register("matkhau", { required: "Vui lòng nhập Mật khẩu" })} type='password' placeholder='Mật khẩu' />
                    <p style={{ color: 'red', maxHeight: '0px' }}> {errors.matkhau?.message}</p>
                </Row>
                <div>
                    <Row><button type='submit'  > Đăng nhập  </button>  </Row>
                </div>
            </form>
               <h3 style={{textAlign : 'center' , marginTop : '20px' , marginBottom : '-20px'}}>Hoặc</h3>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>

    );
}

export default Dangnhap;