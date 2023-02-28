import { useState } from 'react';


const Details = ({ data, set }) => {

    const [isBooking, setBooking] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleBookShow = () => {
        setIsBooking(true);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with name and email values, e.g. submit to server
        const bookingData = {
            name,
            email,
            date,
            time,
        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        alert('Booking Successful!');
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setBooking(false);
    };

    const handleCancel = () => {
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setBooking(false);
    }



    if (data.length === 0) return null

    const summary = data.summary.replace(/<[^>]*>/g, '');

    return (
        <div className="fixed inset-0 z-20 bg-black overflow-y-auto bg-opacity-25 backdrop-blur-sm flex-col flex justify-center items-center">
            <div className='w-full max-w-md'>
                <div className="bg-white p-4 max-h-full rounded-md shadow-md">
                    <img src={data.image?.original} alt="" className='w-full rounded-md' />
                    <div className='p-4'>
                        <h2 className='font-bold text-3xl mb-4'>{data.name}</h2>
                        <div>
                            {isBooking ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor="name" className="font-bold text-lg">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={handleNameChange}
                                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <label htmlFor="email" className="font-bold text-lg">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <label htmlFor="date" className='font-bold text-lg'>Date</label>
                                        <input
                                            type="date"
                                            id="name"
                                            value={date}
                                            onChange={handleDateChange}
                                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <label htmlFor="time" className='font-bold text-lg'>Time</label>
                                        <select value={time} onChange={handleTimeChange} className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">Select a show time</option>
                                            <option value="9am">9 am</option>
                                            <option value="12pm">12 pm</option>
                                            <option value="3pm">3 pm</option>
                                            <option value="6pm">6 pm</option>
                                            <option value="9pm">9 pm</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-4 mt-4'>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                        >
                                            Submit
                                        </button>

                                        <button
                                            type="button"
                                            className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) :
                                <div>
                                    <p className="text-gray-700 mb-3">{summary}</p>
                                    <p><strong>Language:</strong> {data.language}</p>
                                    <p><strong>Genres: </strong>{data.genres.join(', ')}</p>
                                    <p><strong>Rating: </strong>{data.rating?.average}</p>
                                    <div>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md mt-6" onClick={() => setBooking(true)}>Book a Show</button>
                                        <button className=" hover:bg-slate-200 text-slate-500  m-2 font-semibold py-2 px-4 rounded-md shadow-md mt-6" onClick={() => set([])}>Close</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>



        </div >
    )
}

export default Details