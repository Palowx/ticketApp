import React from 'react'

export default function SortButtonGroup({ currentSort, onSortChange }) {
    return (
      <div className="flex-box items-center  ">
        <button
          className={`px-2 py-1 rounded-md ml-4 mb-4 ${
            currentSort === 'updatedAtLatestFirst' ? 'bg-purple-900 text-white' : 'text-gray-600'
          }`}
          onClick={() => onSortChange('updatedAtLatestFirst')}
        >
          Sort by Latest Update
        </button>
        <button
          className={`px-2 py-1 rounded-md ml-4 mb-4 ${
            currentSort === 'updatedAt-desc' ? 'bg-purple-900 text-white' : 'text-gray-600'
          }`}
          onClick={() => onSortChange('updatedAt-desc')}
        >
          Sort By Oldest Update
        </button>
      </div>
    )
  }
