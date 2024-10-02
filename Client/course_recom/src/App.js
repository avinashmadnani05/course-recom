import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './login';
import Home from './Home';
import UserInput from "./UserInput";

function App() {
  return (
  <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />
      <Route path="/UserInput" element={<UserInput />} />

      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
</>
  );
};

export default App;
