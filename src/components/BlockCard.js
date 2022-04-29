import React from 'react'

function BlockCard() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
                            Wifi Speed Checker

                        </h1>
                        <p className="mb-8 leading-relaxed">

                            The quickest, easiest, and most painless way to gauge your Wi-Fi speed is to use a free, browser-based test like the one offered by Internet metrics company Speedy at Speedy.netlify.app.

                        </p>
                        <div className="flex justify-center">
                            <button className=" inline-flex text-white bg-slate-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg cursor-pointer" disabled="true">
                                wifi service
                            </button>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlockCard