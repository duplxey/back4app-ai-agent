import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Parse from 'parse';

const EventsByVenue = () => {

  const {venueId} = useParams();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Parse.Cloud.run('eventsByVenue', {venueId}).then(
      (results) => {
        setEvents(results);
        setLoading(false);
      },
      (error) => {
        console.error('Failed to fetch events by venue', error);
        setError(error);
        setLoading(false);
      }
    );
  }, [venueId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Events at Venue</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Link to={`/${event.id}`}>
                {event.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found for this venue.</p>
      )}
      <Link to={`/`}>
        ← Event list
      </Link>
    </div>
  );
};

export default EventsByVenue;