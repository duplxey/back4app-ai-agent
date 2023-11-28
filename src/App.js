import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import EventsList from './components/EventList';
import EventDetails from './components/EventDetails';
import Parse from 'parse';
import EventsByVenue from "./components/EventsByVenue";

const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY,
);
Parse.serverURL = 'https://parseapi.back4app.com/';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<EventsList/>}/>
        <Route path='/:objectId' element={<EventDetails/>}/>
        <Route path="/venue/:venueId" element={<EventsByVenue/>}/>
      </Routes>
    </Router>
  );
}

export default App;