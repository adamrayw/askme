import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';

export default function Main() {
    let { link } = useParams()
    const [allData, setAllData] = React.useState([]);
    const [msg, setMsg] = React.useState('');

    const getData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/' + link);
        setAllData(response.data);
        console.log(response.data);
    }

    useEffect(() => {

        getData();
    }, [link]);

    function handleSendMessage(e) {
        e.preventDefault();
        console.log('loading');
        const data = {
            user_id: allData.id,
            msg: msg
        }
        const response = axios.post(' http://127.0.0.1:8000/api/' + link + '/message', data)
        console.log(response);
        console.log('fininsh');
        getData()
    }


    return <div>
        <Header />
        <section
            className="out-feature text-gray-600 bg-white rounded-lg bg-opacity-50 shadow-sm my-4 py-4 md:px-10 px-5"
        >
            <div className="text-center space-y-2">
                <p className="text-xl font-bold">SEND SECRET MESSAGE TO</p>
                <p className="text-lg">{data.name}</p>
            </div>
            <div className="my-6" >
                <form onSubmit={handleSendMessage}>

                    <textarea
                        type="text"
                        id="name"
                        name="name"
                        className="base-input text-gray-900 bg-gray-300 transition-all border text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                        placeholder="Write secret message..."
                        required
                        onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 text-center"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <section>
            <h4 className="text-gray-400 text-left">Someone who asked you:</h4>

            <div className="text-center mt-4">
                <p className="text-gray-400">No Message</p>
            </div>


            {allData.message?.map((e) => {
                return (
                    <section
                        className="out-feature text-gray-800 bg-white shadow-sm rounded-lg bg-opacity-50 my-4 py-6 md:px-10 px-5"
                        key={e.id}
                    >

                        <div>
                            <p className="text-lg text-left">{e.msg}</p>
                        </div>
                        {e.reply.map((r) => {
                            return (
                                <div key={r.id} className='w-full flex justify-end'>
                                    <p className="text-sm rounded-lg mt-2 w-36 text-left text-white bg-gray-400 py-2 px-4">{r.msg}</p>
                                </div>
                            )
                        })}

                        <div className="my-6 flex items-center space-x-2">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="base-input text-gray-900 bg-gray-300 transition-all border text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                                placeholder="Reply this question..."
                                required
                            />
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 text-center"
                                >
                                    Reply
                                </button>
                            </div>
                        </div>

                    </section>
                )
            })}
        </section>
    </div>;
}
