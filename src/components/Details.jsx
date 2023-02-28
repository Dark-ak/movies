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
        <div className="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex-col flex justify-center items-center">
            <div className='flex justify-center w-[850px] items-center h-[400px]'>
                <div className="flex bg-white flex-row">
                    <img src={data.image?.original} alt="" className='w-[300px] ' />
                    <div className='m-5'>
                        <h2 className='font-[800] text-5xl mb-5'>{data.name}</h2>
                        <div>
                            {isBooking ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                                    <div className='flex gap-5'>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="name" className="font-bold text-lg">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={handleNameChange}
                                                className="border-2 border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />

                                            <label htmlFor="date" className='font-bold text-lg'>Date</label>
                                            <input
                                                type="date"
                                                id="name"
                                                value={date}
                                                onChange={handleDateChange}
                                                className="border-2 border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="font-bold text-lg">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                className="border-2 border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                            <label htmlFor="time" className='font-bold text-lg'>Time</label>
                                            <select value={time} onChange={handleTimeChange} className="p-1">
                                                <option value="">Select a show time</option>
                                                <option value="9am">9 am</option>
                                                <option value="12pm">12 pm</option>
                                                <option value="3pm">3 pm</option>
                                                <option value="6pm">6 pm</option>
                                                <option value="9pm">9 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Submit
                                    </button>

                                    <button
                                        type="button"
                                        className=" text-slate-600 py-2 px-4 rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
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