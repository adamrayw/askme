import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function createUser(e) {
        e.preventDefault();

        setLoading(true);

        const response = await axios.post('http://127.0.0.1:8000/api/user', {
            name: name,
        })

        setLoading(false);
        return navigate('/result/' + response.data.link);
    }
    return (
        <div>

            <Header />
            <section
                className="out-feature text-gray-600 bg-white rounded-lg bg-opacity-50 shadow-sm my-4 py-4 md:px-10 px-5"
            >
                <p className="mb-4 text-xl font-bold text-left">Our Features</p>
                <ul className="list-disc text-left tracking-widest px-5 md:text-base space-y-2 text-sm">
                    <li>Get secret feedback from anyone</li>
                    <li>Simple, type your name and get the link</li>
                    <li>No register required</li>
                    <li>No <span className="line-through">fckin</span> ads</li>
                </ul>
                <div className="my-6">
                    <form action="" onSubmit={createUser}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="base-input text-gray-900 bg-gray-300 transition-all border text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                            placeholder="Whats your name?"
                            required
                            onChange={(e) => setName(e.target.value)}
                            {...(loading ? { disabled: true } : {})}
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className={`mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 text-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                {...(loading ? { disabled: true } : {})}

                            >
                                {loading ? 'Loading...' : 'Start using Askme'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    )
}
