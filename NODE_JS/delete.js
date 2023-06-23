const establishConnection = require('./mongodb');
const deletedData = async() => {
    const connect = await establishConnection();
    let deletedData = connect.deleteOne({ Name: "Ritesh" });
    if ((await deletedData).deletedCount) {
        console.warn("Data Has Been Deleted Successfully..");
    } else {
        console.warn("No Data");
    }
}
deletedData();