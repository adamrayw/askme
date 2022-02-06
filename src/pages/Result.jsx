import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';


export default function Result() {

    let { link } = useParams();

    return (
        <div>
            <Header />
            <section
                className="out-feature text-gray-600 bg-white rounded-lg shadow-sm my-4 py-8 md:px-10 px-5 mx-2"
            >
                <p className="mb-4 text-xl font-bold text-center">
                    Your link created successfully!
                </p>
                <p className="list-disc text-sm tracking-widest px-5 text-center">
                    Now you can copy the link and paste it in your favorite social media
                    bio
                </p>
                <div className="my-6">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="base-input bg-gray-300 text-center font-semibold transition-all border border-gray-300 text-gray-900 md:text-base text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3 placeholder-gray-800"
                        placeholder="Whats your name?"
                        defaultValue={`https://askme.vercel.app/${link}`}
                        required
                        disabled
                    />
                    <div className="flex justify-center">
                        <Link
                            to={`/${link}`}
                            className="mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg md:text-base text-sm px-5 py-2.5 text-center"
                        >
                            Open in new tab
                        </Link>
                    </div>
                </div>
            </section>
            <footer className='h-20 flex justify-center items-center'>
                <small className='text-gray-300'>Made by <a className='underline text-blue-500' href="https://adamrw.me/" rel='noreferrer' target='_blank'>adamrw.me</a></small>
            </footer>
        </div>
    );
}
