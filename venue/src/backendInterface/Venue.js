import axios from 'axios';

export const getVenues = () => {
        return axios.get('http://localhost:5000/api/venue')
            .then(res =>{
                console.log(res.data);
            }).data;
};

export const bookVenue = (venueID, date, userID) => {
    axios.put(`http://localhost:5000/api/venue/book/${venueID}`, { "date": date, "userID": userID })
        .then((res) => {
            if (res.status == 200)
                alert("Booking successful")
        })
        .catch(err => {
            alert("Booking Failed: " + err);
        })
}

export const unbookVenue = (venueID, date) => {
    axios.put(`http://localhost:5000/api/venue/unbook/${venueID}`, {"date": date})
        .then((res) => {
            console.log(date);
            console.log(venueID);
            if (res.status == 200)
                alert("Unbooking successful")
        })
        .catch(err => {
            alert("Unbooking Failed: " + err);
        })
}
