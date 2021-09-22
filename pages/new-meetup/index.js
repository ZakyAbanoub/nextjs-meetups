import NewMeetupFrom from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head'
import axios from 'axios';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await axios.post('/api/new-meetup', enteredMeetupData);
        console.log(response.data.message);
        router.replace('/');
    }

    return (
        <Fragment>
            <Head>
                <title>New Meetup</title>
                <meta name="description" content="Add Yout meetups and create amazing networking opportunities." />
            </Head>
            <NewMeetupFrom onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
};

export default NewMeetupPage;
