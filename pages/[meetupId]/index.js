import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
    return <MeetupDetail image={props.meetupData.image} title="A Fisrt Meetup" address="Some Address 4, 1425 Some City" description="This is a description" />;
};


//When i want to create a dynamic Page
export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
} 

// When i want to create a static page - Revalidate: after how many seconds the page will be built on the server
// If i want to build the page every request so i have to use getServerSideProps
export async function getStaticProps(context){

    const meetupId = context.params.meetupId

    console.log(meetupId)

    return {
        props:{
            meetupData:{
                id: 'm1',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
                title: 'A Fisrt Meetup',
                address: 'Some Address 4, 1425 Some City',
                description: 'This is some Description'
            }
        }
    }
}

export default MeetupDetails;
