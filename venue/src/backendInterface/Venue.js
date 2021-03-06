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

export const getPaymentInformation = () => {
    return axios.get('http://localhost:5000/api/paymentInformation')
        .then(res =>{
            console.log(res.data);
        }).data;
};

export const storeVenuePayment = (cardType, cardNumber, expirationDate, CVV, userID, date, venueID) => {
    axios.post(`http://localhost:5000/api/paymentInformation`, { 
        "cardType": cardType,
        "cardNumber": cardNumber, 
        "expirationDate": expirationDate,
        "CVV": CVV, 
        "userID": userID,
        "date": date,
        "venueID": venueID
    }) 
        .then((res) => {
            if (res.status == 200)
                alert("Payment successful")
        })
        .catch(err => {
            alert("Payment Failed: " + err);
        })
}

export const updateVenuePayment = (paymentInformationID, date, venueID) => {
    axios.put(`http://localhost:5000/api/paymentInformation/book/${paymentInformationID}`, { 
        "date": date,
        "venueID": venueID, 
    })
        .then((res) => {
            if (res.status == 200)
                alert("Payment successful")
        })
        .catch(err => {
            alert("Payment Failed: " + err);
        })
}

export const createVenue = (ownerID, zipCode, streetAddress, pricePerDay) => {
    axios.post('http://localhost:5000/api/venue', {
        "ownerID": ownerID,
        "zipCode": zipCode,
        "streetAddress": streetAddress,
        "pricePerDay": pricePerDay
    })
    .then((res) => {
        if (res.status == 200)
                alert("Venue created")
        })
        .catch(err => {
            alert("Creation Failed: " + err);
    })
}

export const deleteVenue = (venueID) => {
    axios.delete(`http://localhost:5000/api/venue/${venueID}`)
    .then((res) => {
        if (res.status == 200)
                alert("Venue deleted")
        })
    .catch(err => {
        alert("Deletion Failed: " + err);
    })
}

export const updateVenue = (venueID, description, pricePerDay, photoURL) => {
    axios.put(`http://localhost:5000/api/venue/${venueID}`, { 
        "description": description,
        "pricePerDay": pricePerDay,
        "photoURL": photoURL, 
    })
        .then((res) => {
            if (res.status == 200)
                alert("Update successful")
        })
        .catch(err => {
            alert("Update Failed: " + err);
        })
    }