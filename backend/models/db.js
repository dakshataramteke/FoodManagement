const mongoose = require('mongoose');

const Mongo_Url = 'mongodb+srv://dakshataramteke00:goFood@gofood.x96v2av.mongodb.net/goFood?retryWrites=true&w=majority&appName=goFood'

main()
.then(() => {
    console.log("Mongo DB Connected");
   
  })
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(Mongo_Url);

}



