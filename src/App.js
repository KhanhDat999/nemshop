import Router from "./Router";
import { BrowserRouter} from "react-router-dom";
import Defautlayout from "./components/defaulayout/defaulayout";


function App() {
  return (
    <BrowserRouter >
      <Defautlayout>
        <Router />
      </Defautlayout>
    </BrowserRouter>
  )
}

export default App;
