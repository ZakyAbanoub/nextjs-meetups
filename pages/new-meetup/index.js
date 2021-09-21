import NewMeetupFrom from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () =>{
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupFrom onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage