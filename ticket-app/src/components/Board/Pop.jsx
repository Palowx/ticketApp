import React,{useState} from 'react'
import axios from 'axios';

export default function Pop({ visible, onClose, initialData, onSubmit,description,contactInfo,createdAt, title, _id,status, updatedAt,}) {
    const [dataTitle, setDataTitle] = useState(title);
    const [dataDescription, setDataDescription] = useState(description);
    const [dataContactInfo, setDataContactInfo] = useState(contactInfo);
    const [dataStatus, setStatus] = useState(status);
    console.log('Curr id: ',_id)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            title: dataTitle ,
            description:dataDescription,
            contactInfo: dataContactInfo ,
            status: dataStatus,
            updatedAt: new Date().toISOString()
    };
    
    console.log(updatedData)
    try {
        console.log("ID:",_id)
        const response = await axios.put(`http://localhost:1234/${_id}`, updatedData);
        console.log("Response ",response)
        onClose();
        console.log('Ticket updated !');
    } catch (error) {
        console.error('Error updating ticket:', error);
        alert('Failed to update ticket.');
        }
    };

  return (
    <>
     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 overflow-y-auto h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        <button onClick={onClose} className="text-gray-100 float-right hover:text-purple-300 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Update Ticket</h2>
        <div className='flex flex-col text-left '>
          <p className=''>ID: {_id}</p>
          <p className=''>Date Created: {createdAt.slice(0, 10)}</p>
          <p className=''>Last Update: {updatedAt.slice(0, 10)}</p>
        </div>
        <form id="updateForm" onSubmit={handleFormSubmit}>
            <div className="flex items-center mt-4">
                <label htmlFor="status" className='mr-2'>Status:</label>
                <select 
                id="status" 
                name="status" 
                value={dataStatus} 
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
                </select>
            </div>


            <label htmlFor="updateTitle" className=" float-left">Title:</label>
            <input 
                type="text" 
                id="updateTitle" 
                name="title" required
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                />
    
            <label htmlFor="updateDescription" className=" float-left">Description:</label>
            <textarea 
                id="updateDescription" 
                name="description" 
                required
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                >
            </textarea>
    
            <label htmlFor="updateContactInfo"className=" float-left">Contact:</label>
            <input 
                type="text" 
                id="updateContactInfo" 
                name="contactInfo" 
                required
                value={dataContactInfo}
                onChange={(e) => setDataContactInfo(e.target.value)}
            />
    
            <button type="submit" className='w-full m-0 bg-violet-600 text-white px-4 py-2 rounded-md font-bold hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>Update</button>
      </form>
      </div>
    </div>
  </>
  )
}
