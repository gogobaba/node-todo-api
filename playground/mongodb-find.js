const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client)=>{
    if(error){
     return console.log("Unable to connect to MongoDB server")
    }

    const db  = client.db('TodoApp');

    // db.collection('Todos').find({
        
    // }).toArray().then((res)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(res,undefined,2));
    // },(err)=>{
    //     console.log(`Unable to fetch todos ${err}`);
    // });

    db.collection('Todos').find().count().then((res)=>{
        console.log(res);
    })

    //client.close();
});
