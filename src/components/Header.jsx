import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section className="header text-center md:mx-2">
            <Link to="/"
                className="w-full text-gray-600 p-4 bg-white flex justify-center md:rounded-lg shadow-sm items-center space-x-3"
            >
                <i className="fas fa-user-secret fa-lg" />
                <h2 className="md:text-2xl text-xl font-bold tracking-wider">Askme</h2>
            </Link>
        </section>
    )
}
