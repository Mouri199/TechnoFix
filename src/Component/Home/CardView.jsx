
import { useState } from 'react';
import AddUserModal from './AddUserModal';
import Card from './Card';

const CardView = () => {
    const [search, setSearch] = useState("")
    console.log(search)
    return (
        <>
            <div className="max-w-4xl mx-auto my-10 p-6">
                <h1 className="text-4xl font-bold mb-6 text-center">Welcome to your user cards!</h1>
                <div className="flex gap-4 mb-6">
                    <AddUserModal></AddUserModal>
                    <input onChange={(e) => { setSearch(e.target.value) }}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Search your card with name"
                    />
                </div>
            </div>
            <Card search={search} ></Card>

        </>
    );
};

export default CardView;