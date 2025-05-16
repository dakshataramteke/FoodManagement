const mongoose = require('mongoose');

const Mongo_Url = 'mongodb+srv://dakshataramteke00:goFood@gofood.x96v2av.mongodb.net/goFood?retryWrites=true&w=majority&appName=goFood'

main()
.then(() => {
    console.log("Mongo DB Connected");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else{ console.log(data)}
    });
    // You can use fetched_data here or export/use it as needed
  })
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(Mongo_Url);

}



