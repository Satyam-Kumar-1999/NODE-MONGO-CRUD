const establishConnection = require('./mongodb');
const updateData = async() => {
    const connect = await establishConnection();
    let updatedData = await connect.updateOne({ Code: 'VISTA03' }, {
        $set: {
            Designation: 'Senior Developer'
        }
    });
    if (updatedData.matchedCount) {
        console.log("Data Have Been Updated Successfully..");
    }

}
updateData();