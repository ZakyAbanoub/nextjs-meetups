import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
// import axios from 'axios';

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'A Fisrt Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some Address 4, 1425 Some City',
//         description: 'This is a description',
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Some Address 4, 1425 Some City',
//         description: 'This is a second description',
//     },
// ];

const HomePage = props => {
    return (
        <Fragment>
            <Head>
                <title>Next.js Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React Meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
};

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //Fetch Data from an API
//     return {
//         props: {
//             meetups: DUMMY_DATA
//         }
//     }
// }

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://abanoub_zaky:bebobebo@cluster0.oxo4t.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    let meetups = await meetupsCollection.find().toArray();

    // const response = await axios.get('http://localhost:3000/api/meetups');
    // console.log(response.data);
    meetups = meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
    }));
    return {
        props: {
            meetups: meetups,
        },
        revalidate: 1,
    };
}

export default HomePage;
