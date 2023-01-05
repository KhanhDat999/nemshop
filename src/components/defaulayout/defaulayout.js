import Header from "../header/Header";
import Footer from "../footer/footer";
import  './global.scss';
import { createContext , useState , useEffect } from 'react'
import { instance } from "../../Uttils/requid";




export const Global = createContext()

function Defautlayout({ children }) {
   const [ item , setItem ] = useState( )
    const [ list , setList] = useState([])
    const [ aolen , setAolen] = useState([])
    const [ tatca , setTatca] = useState([])

  useEffect(() =>{
    instance.get(`sanphammois`)
   .then(res => setList(res.data))

  },[])
  useEffect(() => {

    instance.get('tatcarsanpham')
        .then(res => {
            setAolen(res.data)
            setTatca(res.data)
        }
        )

}, [])



const value ={
    list,
    item,
    setItem,
    aolen,
    setAolen ,
    setTatca,
    tatca
}



    return (
        <Global.Provider  value={value}>
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
        </Global.Provider>
    );
}

export default Defautlayout;