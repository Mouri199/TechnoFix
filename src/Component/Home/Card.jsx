import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { base_URL } from "../URL/Base_URL.js";


const Card = ({ search }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        fetch(`${base_URL}/users?firstName=${search}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [search])

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
                {
                    user?.map((userData) => (
                        <div key={userData?.id} className="card w-96 bg-base-100 shadow-xl max-w-md mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={userData?.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="my-8 mx-5 ">

                                <NavLink to={`/cardDetails/${userData?._id}`}> <h2 className='font-semibold text-xl' >Name: {userData?.firstName} {userData?.lastName}</h2></NavLink>
                                <p>Email: {userData?.email}</p>
                                <p>Address: {userData?.address?.address}, {userData?.address?.city},{userData?.address?.state}</p>
                                <p>Comapny : {userData?.company?.name}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Card;