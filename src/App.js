import LoginPage from "./pages/LoginPage";
import DashBoardPage from "./pages/DashboardPage"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<DashBoardPage/>}/>
    </Routes>
  );
}

export default App;