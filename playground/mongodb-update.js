const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log("Unable to connect to MongoDB server")
    }

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5b28413c2494bb34b4efb4b9')
    },{
        $set : {
            completed : false
        }
    },{
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
    })

    //client.close();
});
