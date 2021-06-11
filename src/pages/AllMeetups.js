import MeetupList from '../components/meetups/MeetupList';

import { useState, useEffect } from 'react';


function AllMeetupsPage() {
    const [isLoading, setIsloading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => { //needs 2 arguments a function and an array
        setIsloading(true);
        fetch(
            'https://react-getting-started-100b8-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
        )
        .then(response => {
            return response.json()
        })
        .then(data => {
            const meetups = []
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsloading(false);
            setLoadedMeetups(meetups);
        });
    }, []); //should add all external values your function relies on-in this case there isn't any as we're using fetch

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return(
        <section>
            <h1>All Meet Ups</h1>
                <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage;