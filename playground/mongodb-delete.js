const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log("Unable to connect to MongoDB server")
    }

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text : 'walk with dog'}).then((result)=>{
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'watching tv' }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed : true}).then((result)=>{
        console.log(result);
    });

    //client.close();
});
