import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const details = useLoaderData()
    const { image, firstName, lastName, email, address, company } = details
    const { id } = useParams()
    console.log(details);
    console.log(id);
    return (
        <div className="max-w-2xl mx-auto my-8 px-4">
            <div className="col-span-2">
                <h1 className="text-3xl font-bold mb-4 text-center">Card Details</h1>
                <img
                    src={image}
                    alt="Tech is growing"
                    className="mb-4"
                    width="440"
                    height="400"

                />
                <div className="text-sm my-3">
                    <p className="font-semibold text-2xl my-2">Name: {firstName} {lastName}</p>
                    <p className="text-xl ">Email: {email}</p>
                    <h2 className="text-xl my-2 ">Address: {address?.address} ,{address?.city}, {address?.state}</h2>
                    <h1 className="text-xl">Company: {company?.name}</h1>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;