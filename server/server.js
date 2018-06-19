var mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required:true,
        minlenth:1,
        trim: true
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

// var newTodo = new Todo({
//     text:'cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo',doc)
// },(e)=>{
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//     text: 'feed the cat',
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(err)=>{
//     console.log('Unable to save',e);
// })


var User = mongoose.model('user',{
    email:{
        type: String,
        required:true,
        trim:true,
        minlenth:1
    }
});

var user = new User({
    email:'ygogo@gmail.com'
});

user.save().then((doc)=>{
    console.log('user saved' ,doc)
},(err)=>{
    console.log('Unable to add user',err);
})