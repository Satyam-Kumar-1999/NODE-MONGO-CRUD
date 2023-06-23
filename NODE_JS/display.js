const establishConnection = require('./mongodb');
const displayData = async() => {
    let data = await establishConnection();
    data = await data.find().toArray();
    console.warn(data);
}
displayData();