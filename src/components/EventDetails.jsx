import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Parse from 'parse';

const EventDetails = () => {

  const {objectId} = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventObject = Parse.Object.extend('Event');
    const query = new Parse.Query(eventObject);

    query.include('venue').get(objectId)
      .then((obj) => {
        setEvent({
          id: obj.id,
          ...obj.toJSON()
        });
        setLoading(false);
      }, (error) => {
        console.error('Something went wrong', error);
        setError(error);
        setLoading(false);
      });
  }, [objectId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      {event.date && (
        <p>Date: {new Date(event.date.iso).toLocaleString()}</p>
      )}
      {event.venue && (
        <p>Venue: <Link to={`/venue/${event.venue.objectId}`}>{event.venue.name}</Link></p>
      )}
      <Link to={'/'}>
        ← Event list
      </Link>
    </div>
  );
};

export default EventDetails;