import { useState } from 'react'
import { PlusIcon } from "lucide-react"

// eslint-disable-next-line react/prop-types
const Header = ({ openModal }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold tracking-tight">My Todo List</h1>
                        <p className="mt-1 text-lg text-purple-200">Stay organized, boost productivity</p>
                    </div>
                    <button
                        onClick={(e) => openModal(e)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`flex justify-center items-center p-2 pr-4 rounded-lg bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 ease-in-out transform ${isHovered ? 'scale-105' : 'scale-100'
                            }`}
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        <span className='font-semibold'>Add Task</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header