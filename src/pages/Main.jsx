import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import spinner from '../image/spinner.svg';

export default function Main() {
    let { link } = useParams()
    const [allData, setAllData] = React.useState([]);
    const [allMessage, setAllMessage] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const [errMsg, setErrMsg] = React.useState('');
    const [loading, setloading] = React.useState(false);

    const getData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/' + link);
        setAllData(response.data);
        setAllMessage(response.data.message);
    }
    useEffect(() => {

        console.log(allMessage);
        getData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link]);

    async function handleSendMessage(e) {
        e.preventDefault();

        if (msg.length === '' || msg.length === 0 || msg.length === null) {
            setErrMsg('Please enter a valid message');
            return false;
        } else if (msg.length < 4) {
            setErrMsg('Message must be at least 4 characters long');
            return false;
        }

        setloading(true);

        const data = {
            user_id: allData.id,
            msg: msg
        }
        const response = await axios.post(' http://127.0.0.1:8000/api/' + link + '/message', data)

        const dataMsg = response.data;

        // setAllMessage([...allMessage, {
        //     created_at: dataMsg.created_at,
        //     id: dataMsg.id,
        //     msg: dataMsg.msg,
        //     updated_at: dataMsg.updated_at,
        //     user_id: dataMsg.user_id
        // }]);

        getData()

        console.log(dataMsg);
        setMsg('')
        setloading(false);
    }

    async function handleReply(id, e) {
        e.preventDefault();


        const data = {
            user_id: allData.id,
            message_id: id,
            reply: e.target.name.value
        }

        await axios.post('http://127.0.0.1:8000/api/' + link + '/' + id + '/reply', data)

        e.target.name.value = ''
        // eslint-disable-next-line no-unreachable
        getData();

    }


    return <div>
        <Header />
        <section
            className="out-feature text-gray-600 bg-white rounded-lg bg-opacity-50 shadow-sm my-4 py-4 md:px-10 px-5"
        >
            <div className="text-center space-y-2">
                <p className="text-xl font-bold">SEND SECRET MESSAGE TO</p>
                <p className="text-lg">{allData.name}</p>
            </div>
            <div className="my-6" >
                <form onSubmit={handleSendMessage}>

                    <textarea
                        type="text"
                        id="name"
                        name="name"
                        className="base-input text-gray-900 bg-gray-300 transition-all border text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                        placeholder="Write secret message..."
                        onChange={((e) => {
                            setMsg(e.target.value)
                            setErrMsg('')
                        })}
                        value={msg}
                    ></textarea>
                    <p className="text-red-500 text-sm italic mt-4">{errMsg}</p>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`mt-8 text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 text-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            {...(loading ? { disabled: true } : {})}
                        >
                            {loading ? (<div className='flex items-center'>
                                <img src={spinner} alt="spinner" width='20' />
                                <span className="ml-2">Sending...</span>
                            </div>) : 'Send'}
                        </button>

                    </div>
                </form>
            </div>
        </section>
        <section>
            <h4 className="text-gray-400 text-left">Someone who asked you:</h4>
            {(allMessage < 1) ? (<p className="text-gray-400 text-center mt-8">No one has asked you yet</p>) : ''}

            {allData.message?.map((data, index) => {
                return (
                    <section
                        className="out-feature text-gray-800 bg-white shadow-sm rounded-lg bg-opacity-50 my-4 py-6 md:px-10 px-5"
                        key={index}
                    >

                        <div>
                            <p className="text-lg text-left">{data.msg}</p>
                        </div>
                        {data.reply.flatMap((r) => {
                            return (

                                <div key={r.id} className='w-full flex justify-end'>
                                    <p className="text-sm rounded-lg mt-2 w-36 text-left text-white bg-gray-400 py-2 px-4">{r.msg}</p>
                                </div>
                            )
                        })}

                        <form onSubmit={(e) => handleReply(data.id, e)}>
                            <div className="my-6 flex items-center space-x-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="base-input text-gray-900 bg-gray-300 transition-all border text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-6 py-3"
                                    placeholder="Reply this question..."

                                    required
                                // onChange={((e) => setReply(e.target.value))}
                                />
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="text-white transition-all bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 text-center"
                                    >

                                    </button>
                                </div>
                            </div>
                        </form>

                    </section>
                )
            })}
        </section>
    </div >;
}
