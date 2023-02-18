import Header from "../header/Header";
import Footer from "../footer/footer";
import './global.scss';
import { useEffect } from 'react'
import { fectData, fectData1 } from "../../Redux/Reduce";
import { useDispatch } from 'react-redux';


function Defautlayout({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fectData())
        dispatch(fectData1())
    }, [])


    return (
        <div className="body">
            <div >
                <Header />
            </div>
            <div className="children">
                {children}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Defautlayout;