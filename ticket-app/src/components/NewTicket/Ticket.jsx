import React , {useState} from 'react'
import styles from './Ticket.module.css'
import axios from 'axios'

export default function Ticket({isVisible,onClose}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [createdAt, setCreatedAt] = useState(null);
    const [updatedAt, setUpdatedAt] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const now = new Date();
      // setCreatedAt(now.toISOString());
      // setUpdatedAt(now.toISOString());
      // console.log('createdAt:', createdAt);
      // console.log('updatedAt:', updatedAt); 
      isVisible =true
      
      const dataForPost = {
        title,
        description,
        contactInfo,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    
      axios.post('http://localhost:1234/', dataForPost)
      .then(result =>{
        console.log(result);
        alert("New Ticket Created!")
        setTitle('');
        setDescription('');
        setContactInfo('');
        setCreatedAt(null);
        setUpdatedAt(null);
        onClose(true)
        
      })
      .catch(err => console.log(err))
    };

  return (
<div className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-300 bg-opacity-75 overflow-y-auto ${isVisible ? 'active' : ''}`}>    
<div className='bg-white shadow-lg rounded-md p-5 w-full max-w-md '>
<button onClick={onClose} className=' float-right '>X</button>
    <h2 className=' font-bold '>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-gray-700  mr-2 block w-min">Title:</label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="text-gray-700  mr-2 block w-min">Description:</label>
          <textarea
            required
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex" >
            <label htmlFor="contactInfo" className="text-gray-700 mr-2 flex-grow text-left">Contact Information:</label>
            <input
              required
              type="text"
              id="contactInfo"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>

          <button type="submit" className='m-0 mt-5 flex w-full bg-purple-500 text-white  py-2  justify-center rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300'>
            Create Ticket
          </button>

      </form>
      </div>
    </div>
  )
}
