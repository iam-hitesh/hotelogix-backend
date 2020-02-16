var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotel");
  var myobj = [
      { name: "Nidhi", email: "nidhi@gmail.com" , phone_number: "9829531350", password: "12345", is_active: "true"},
      { name: "Neha", email: "n@gmail.com" , phone_number: "987878350", password: "12345", is_active: "true"},
      { name: "Nishika", email: "ni@gmail.com" , phone_number: "9878901350", password: "12345", is_active: "true"},
      { name: "Rakhi", email: "nsg@gmail.com" , phone_number: "9812341350", password: "12345", is_active: "true"}
      
      
      ];
  dbo.collection("registration").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
