import * as React from 'react';
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Search from './components/Search';
import Analysis from './components/Analysis';
export default function App() {
  const [tab,setTab] = React.useState(0)
  const handleChange = (event, value) => {
    setTab({ value });
  }
  
  return( 
    
    <BrowserRouter>
        <div>
        
          <AppBar position="static" color="default">
            <Tabs
              value={tab}
              onChange={handleChange}>
              <Tab label="Search" component={Link} to="/" />
              <Tab label="Overall Analysis" component={Link} to="/analysis" />
              {/* <Tab label="Poi Analysis" component={Link} to="/poi" /> */}
            </Tabs>
          </AppBar>

          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/analysis" element={<Analysis/>} />
            {/* <Route path = "/poi" element = {<POI/>} /> */}
          </Routes>

        </div>
    </BrowserRouter>
  )
}