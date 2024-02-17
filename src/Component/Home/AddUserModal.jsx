import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { base_URL } from "../URL/Base_URL.js";


const AddUserModal = () => {
    const [openModal, setOpenModal] = useState(false)
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            address: {
                address: data.address,
                state: data.state,
                city: data.city
            },
  
            email: data.email, 
            image: data.image,
            company: {
                name: data.name
            }
        }
        console.log(userData);
        axios.post(`${base_URL}/user`, userData)
            .then((res) => {
                console.log(res);
                Swal.fire("You added a user successfully!");
                setOpenModal(false)

            })
            .catch((error) => console.error("Error updating status:", error));
    }


    return (
        <div>
            <div className="flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">Add Card</button>
                <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[700px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-12">
                            <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                            <h1 className="backdrop-blur-sm text-4xl pb-8">Add New User</h1>
                            <div className="space-y-5">
                                <label>User Avater</label>
                                <div className="relative">
                                    <input placeholder="Enter User Avater" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("image")} />
                                </div>
                                <div className="lg:flex items-center gap-2">
                                    <label>First Name</label>
                                    <div className="relative">
                                        <input placeholder="Enter first name" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("firstName")} />
                                    </div>
                                    <label>Last Name</label>
                                    <div className="relative">
                                        <input placeholder="Enter last name" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("lastName")} />
                                    </div>
                                </div>

                                <label>Email</label>
                                <div className="relative">
                                    <input placeholder="Enter email" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("email")} />
                                </div>
                            </div>
                            <h1 className="backdrop-blur-sm text-xl py-3">Address</h1>
                            <div className="space-y-5">
                                <div className="lg:flex items-center gap-2">
                                    <label className="lg:pr-5">Address</label>
                                    <div className="relative">
                                        <input placeholder="Enter your Address" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("address")} />
                                    </div>
                                    <label className="lg:pr-11">City</label>
                                    <div className="relative">
                                        <input placeholder="Enter City" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("city")} />
                                    </div>
                                </div>
                                <div className="lg:flex items-center gap-2">
                                    <label className="lg:pr-10">State</label>
                                    <div className="relative">
                                        <input placeholder="Enter City" className="p-3 block w-full drop-shadow-lg rounded-lg outline-none" {...register("state")} />
                                    </div>
                                </div>
                            </div>
                            {/* button type will be submit for handling form submission*/}
                            <button type="submit" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;