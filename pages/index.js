import MeetupList from "../components/meetups/MeetupList";
import axios from "axios";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "A Fisrt Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 4, 1425 Some City",
    description: "This is a description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 4, 1425 Some City",
    description: "This is a second description",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
  const response = await axios.get("http://localhost:3000/api/meetups");
  console.log(response.data);
  const meetups = await response.data;
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.adress,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
