import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Parse from 'parse';

const EventsList = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventObject = Parse.Object.extend('Event');
    const query = new Parse.Query(eventObject);

    query.find().then((results) => {
      const eventsData = results.map((event) => ({
        id: event.id,
        ...event.attributes,
      }));
      setEvents(eventsData);
      setLoading(false);
    }, (error) => {
      console.error('Error while fetching events', error);
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Event List</h1>
      <p>Here's a list of all the events.</p>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/${event.id}`}>
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;