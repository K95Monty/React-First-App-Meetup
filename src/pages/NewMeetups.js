import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-100b8-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: {
                'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/'); //makes us go back to the homepage
        });
    }

    return(
        <section>
            <h1>Add New Meetups</h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;