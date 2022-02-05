import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section className="header text-center">
            <Link to="/"
                className="w-full text-gray-600 p-4 bg-white bg-opacity-50 flex justify-center rounded-lg shadow-sm items-center space-x-4"
            >
                <i className="fas fa-user-secret fa-lg"></i>
                <h2 className="text-2xl font-bold tracking-wider">Askme</h2>
            </Link>
        </section>
    )
}
