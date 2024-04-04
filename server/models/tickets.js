const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    contactInfo: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted','resolved','rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const TicketModel = mongoose.model('tickets', TicketSchema);
module.exports = TicketModel