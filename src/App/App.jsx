import { Route,Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

import MainLayout from '../layouts/MainLayout/MainLayout';
import './App.css'

function App () {
    return(
        <div className="app">
          <Routes>
            <Route path='/' element={ <MainLayout /> }>
             <Route index element={ <DashboardPage />} />
            </Route>
          </Routes>
        </div>
    )
}
export default App;