let messages = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
      },
    read: function(req, res, next){
        res.json(messages);
    },
    update: function (req, res, next){
        const { text, time } = req.body;
        const messageIndex = messages.findIndex( message => message.id == req.params.id );
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
          };
      
          res.json( messages );
    },
    delete: function(req, res, next){
        messageIndex = messages.findIndex( message => message.id == req.params.id );
        messages.splice(messageIndex, 1);
    }
}