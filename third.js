var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotel");
  var myobj = { name: "Nidhi", email: "nidhi@gmail.com" , phone_number: "9829531350", password: "12345", is_active: "true"};
  dbo.collection("registration").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 