const establishConnection = require('./mongodb');

const insertData = async() => {
    let data = await establishConnection();
    const dataItems = await data.insertOne({ Name: "Kushal", Designation: "Network Engineer", Code: "VISTA13" });
    if (dataItems.acknowledged) {
        console.log("Your Data Has Been Successfully Inserted.");
    }

}
insertData();