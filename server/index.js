const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TicketModel = require('./models/tickets.js')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors()); //access server side from front-end
app.use(express.json()); //force to json format

//Put password here
const pwd = ''
mongoose.connect(`mongodb+srv://ploy:${pwd}@atlascluster.bwuedr5.mongodb.net/cru`)

app.post('/tickets', (req, res)=>{
    TicketModel.create(req.body)
    .then(tickets => res.json(tickets))
    .catch(err => res.json(err))
})

app.get('/tickets', async (req, res) => {
    try {
      const tickets = await TicketModel.find({});
      console.log(tickets);
      res.json(tickets);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  app.put('/tickets/:_id', async (req, res) => {
    const {_id} = req.params; 
    const { title, description, contactInfo, updatedAt,status } = req.body; 
//   console.log({id})

  try {
    const updatedTicket = await TicketModel.findByIdAndUpdate(_id, { title, description, contactInfo, updatedAt,status }, { new: true });

    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found!' });
    }

    console.log(`Updated ticket: ${updatedTicket}`);

    res.status(200).json({ message: 'Ticket updated successfully!', ticket: updatedTicket });
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
});


app.listen(1234, ()=>{
    console.log('Server is Running!')
})