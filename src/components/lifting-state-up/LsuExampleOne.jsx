import { useState } from 'react';

export default function LsuExampleOne() {
    const [searchQuery, setSearchQuery] = useState('');
    const [users] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Doe' },
    ]);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="section-title">
                <h2>Search Filter </h2>
            </div>
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <UserListDisplay users={filteredUsers} />
        </div>
    );
}

function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <input
            type="text"
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search for a user"
            className='input-for-lsu'
        />
    );
}

function UserListDisplay({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
