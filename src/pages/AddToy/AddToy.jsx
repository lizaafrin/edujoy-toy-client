import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContext);
   
    useTitle('AddToy');
    // console.log(user);
    const toyCategories = [
        "Science Kits",
        "Learning Kits",
        "Engineering Kits",
      ];

      const [selectedCategory, setselectedCategory] = useState(toyCategories[0]);
      const handleSelectedValue = (event) => {
        console.log(event.target.value);
        setselectedCategory(event.target.value);
      };

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.floating_name.value;
        const description = form.floating_description.value;
        const price = form.floating_price.value;
        const picURL = form.floating_URL.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email ? user.email : form.floating_email.value;
        const availableStock = form.floating_quantity.value;
        const category = form.floating_category.value;
        const rating = form.floating_rating.value;
        const newToy = { toyName, description, price, picURL, sellerName, sellerEmail, rating, availableStock, category };
        console.log(newToy);

        fetch('http://localhost:5000/addNewToy', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Yeey...",
                  text: "You Added Your Toy Succesfully!",
                });
              }
        })
    }
    return (
        <div className="container mx-auto px-2 lg:px-0">
            <form
                onSubmit={handleAddToy}
                className="bg-white p-10 lg:p-14  border-2 rounded-lg w-full lg:w-2/5 mx-auto my-10 lg:my-16"
            >
                <h1 className="text-xl md:text-2xl font-bold leading-tight mb-5">
                    Add a Toy
                </h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="name"
                        name="floating_name"
                        id="floating_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Toy Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="floating_URL"
                        id="floating_URL"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_URL"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product Image URL
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        name="floating_email"
                        defaultValue={`${user?.email || ''}`}
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <select
                        type="category"
                        name="floating_category"
                        id="floating_category"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                        >
                            {toyCategories.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                    <label
                        htmlFor="floating_category"
                        className="text-right peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Select Your Category
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="price"
                        name="floating_price"
                        id="floating_price"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_price"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Price
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="rating"
                        name="floating_rating"
                        id="floating_rating"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_rating"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Rating
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="quantity"
                        name="floating_quantity"
                        id="floating_quantity"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_quantity"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Available Quantity
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="description"
                        name="floating_description"
                        id="floating_description"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_description"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product Description
                    </label>
                </div>

                <div className="text-center mt-10">
                    <button
                        type="submit"
                        className="bg-fuchsia-500 focus:outline-none font-medium rounded-lg text-sm w-full lg:mt-10 px-5 py-2.5 text-center"
                    >
                        Add Your Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;