import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';

import EventsList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventsByVenue from './components/EventsByVenue';

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
