import React from 'react';
import Header from '../components/header';


export default function result() {
    return (
        <div>
            <Header />
            <section
                class="out-feature text-gray-600 bg-white rounded-lg bg-opacity-50 shadow-sm my-4 py-5 md:px-10 px-5"
            >
                <p class="mb-4 text-xl font-bold text-center">
                    Your link created successfully!
                </p>
                <p class="list-disc tracking-widest px-5 text-center">
                    Now you can copy the link and paste it in your favorite social media
                    bio
                </p>
                <div class="my-6">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        class="base-input bg-gray-300 text-center font-semibold transition-all border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3 placeholder-gray-800"
                        placeholder="Whats your name?"
                        value="https://askme.id/awd123"
                        required
                    />
                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 text-center"
                        >
                            Open in new tab
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
