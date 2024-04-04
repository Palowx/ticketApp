import React,{useState} from 'react'
import Pop from './Pop';

export default function TicketDisplay({title,description,contactInfo,createdAt, updatedAt,_id,col,status,filteredTicket}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleEditClick = () => {
        setIsModalOpen(true);
      };
    
    const handleUpdateFormSubmit = async () => {
        setIsModalOpen(false);
    };

  return (
    <>
    <div 
    className='cursor-grab rounded border border-r-violet-500 p-3 active:cursor-grabbing text-left'>
        <button className='text-sm text-white float-right' onClick={handleEditClick} >Edit</button>
        <p className='text-sm text-gray-950'>Status: {status}</p>
        <p className='text-sm text-gray-950'>Ticket ID: {_id}</p>
        <p className='text-sm text-gray-950'>Title: {title}</p>
        <p className='text-sm text-gray-800'>Description: {description}</p>
        <p className='text-sm text-gray-800'>Contact: {contactInfo}</p>
        <p className='text-sm text-gray-800'>Date Created: {createdAt.slice(0, 10)}</p>
        <p className='text-sm text-gray-800'>Last Update: {updatedAt.slice(0, 10)}</p>
    </div>
    {isModalOpen && (
        <Pop
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialData={filteredTicket} 
            onSubmit={handleUpdateFormSubmit} 
            _id = {_id}
            title = {title}
            description = {description}
            contactInfo = {contactInfo}
            createdAt = {createdAt}
            updatedAt ={updatedAt}
            status = {status}
        />
      )}
    </>
  )
}
