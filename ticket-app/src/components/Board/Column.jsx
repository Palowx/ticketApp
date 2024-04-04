import React from 'react'
import TicketDisplay from './TicketDisplay.jsx';


export default function Column({
    title, headingColor, status, tickets, _id, setTickets,sortBy,setSortBy
}){

    //filter first so that we know that it goes to the correct column (status column)
    const filteredTickets = tickets.filter((s) => s.status === status);

    //sort
    const sortedTickets = sortBy === 'updatedAtLatestFirst'
    ? filteredTickets.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    : filteredTickets.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));

    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-00">
                    {filteredTickets.length}
                </span>
                
            </div>
            <div className={'h-full w-full transition-colors'}>
                {
                    filteredTickets.map((t)=>{
                        return <TicketDisplay key={t._id} {...t} />
                    })
                }
            </div>
        </div>

    )
}

