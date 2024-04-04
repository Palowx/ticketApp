import React, { useState , useEffect} from 'react'
import Column from './Column.jsx';
import axios from 'axios';
import SortButtonGroup from './BtnGroup.jsx';
import Ticket from '../NewTicket/Ticket.jsx'

export default function Kanban() {
    const [tickets, setTickets] = useState([]);
    const [sortBy, setSortBy] = useState('updatedAt-desc');
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1234/');
                setTickets(response.data);
                // console.log(response.data);
            } catch (err) {
                console.log('err:', err);
            } 
        }
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
        //  fetchData();
        // to do
        // try something else later
    },[])


    const [isVisible, setIsVisible] = useState(false);

    const handleOpenTicket = () => {
        setIsVisible(true);
    };
    const handleCloseTicket = () => {
        setIsVisible(false);
      };

  return (
    <div className='h-screen w-full bg-neutral-50 text-neutral-900 border-solid border-2 shadow-2xl rounded-lg'>
        <div className='flex h-full w-full gap-3 overflow-scroll p-12'>
            <Column
                title='Pending'
                headingColor='text-orange-500'
                status='pending'
                tickets={tickets}
                setTickets={setTickets}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <Column
                title='Accepted'
                headingColor='text-green-500'
                status='accepted'
                tickets={tickets}
                setTickets={setTickets}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <Column
                title='Resolved'
                headingColor='text-blue-500'
                status='resolved'
                tickets={tickets}
                setTickets={setTickets}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <Column
                title='Rejected'
                headingColor='text-red-500'
                status='rejected'
                tickets={tickets}
                setTickets={setTickets}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <div >
            <SortButtonGroup currentSort={sortBy} onSortChange={setSortBy} />
            
            <button onClick={handleOpenTicket} className='bg-green-300 border-b-indigo-950 px-2 py-1 rounded-md ml-4 mb-4'>Add New Ticket</button>
                {isVisible && (
                    <Ticket onClose={handleCloseTicket} 
                        isVisible={isVisible}
                    />
                )}
            </div>
            
        </div>
    </div>
  );
}



  