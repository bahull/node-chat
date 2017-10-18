const express = require ('express');
const { json } = require('body-parser')
const port = 3000;
const  messages_controllers = require('./controllers/messages_controllers')


const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));

app.get('/api/messages', messages_controllers.read);
app.post('/api/messages', messages_controllers.create);
app.put('/api/messages:id', messages_controllers.update);
app.delete('/api/messages:id', messages_controllers.delete);


app.listen(port, console.log(`We running on port: ${port}`));