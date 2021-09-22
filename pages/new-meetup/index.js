import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await axios.post("/api/new-meetup", enteredMeetupData);
    console.log(response.data.message);
    router.replace("/");
  }

  return <NewMeetupFrom onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
