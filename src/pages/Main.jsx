import React from 'react';
import Header from '../components/header';

export default function Main() {
    return <div>
        <Header />
        <section
            class="out-feature text-gray-600 bg-white rounded-lg bg-opacity-50 shadow-sm my-4 py-4 md:px-10 px-5"
        >
            <div class="text-center space-y-2">
                <p class="text-xl font-bold">SEND SECRET MESSAGE TO</p>
                <p class="text-lg">adamrwib</p>
            </div>
            <div class="my-6">
                <textarea
                    type="text"
                    id="name"
                    name="name"
                    class="base-input text-gray-900 bg-gray-300 transition-all border text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                    placeholder="Write secret message..."
                    required
                ></textarea>
                <div class="flex justify-center">
                    <button
                        type="submit"
                        class="mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 text-center"
                    >
                        SEND
                    </button>
                </div>
            </div>
        </section>
        <section>
            <h4 class="text-gray-400 text-left">Someone who asked you:</h4>

            <div class="text-center mt-4">
                <p class="text-gray-400">No Message</p>
            </div>


            <section
                class="out-feature text-gray-800 bg-white shadow-sm rounded-lg bg-opacity-50 my-4 py-6 md:px-10 px-5"
            >
                <div>
                    <p class="text-lg text-left">Hi, how old are you?</p>
                </div>
                <div class="my-6 flex items-center space-x-2">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        class="base-input text-gray-900 bg-gray-300 transition-all border text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                        placeholder="Reply this question..."
                        required
                    />
                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 text-center"
                        >
                            Reply
                        </button>
                    </div>
                </div>
            </section>
        </section>
    </div>;
}
