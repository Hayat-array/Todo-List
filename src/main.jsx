// import ReactDom from 'react-dom/client'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import App from './App';
// import Signup from './components/pages/signup';
// import Login from './components/pages/login'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function Root() {
//   const [user, setUser] = useState(null);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App user={user} setUser={setUser}/>}/>
//         <Route path="/signup" element={<signup navigate={useNavigate()}/>}/>
//         <Route path="/login" element={<Login setUser={setUser} navigate={useNavigate()}/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Root/>);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
