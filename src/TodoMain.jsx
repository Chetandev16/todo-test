import { useEffect, useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import { Check, Trash } from 'lucide-react';

const TodoMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const saveTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const newTask = {
            title: form.title.value,
            description: form.description.value,
            backgroundImage: selectedImage,
            done: false,
        };
        setTasks([...tasks, newTask]);
        setIsModalOpen(false);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const toggleTaskDone = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) => {
            if (taskIndex === index) {
                return { ...task, done: !task.done }; // Toggle the done state
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    return (
        <>
            <Header openModal={openModal} />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden shadow-lg bg-white transition duration-300 ${task.done ? 'opacity-50' : ''}`}
                    >
                        <div
                            className="h-48"
                            style={{
                                backgroundImage: `url(${task.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>

                        <div className="p-4 relative">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
                            <p className="text-gray-600">{task.description}</p>
                            <div className="flex justify-between items-center">
                                {!task.done && <Check
                                    className={`absolute right-8 cursor-pointer bottom-4 mt-2 ${task.done ? 'text-green-500' : 'text-gray-500'} hover:text-green-700`}
                                    onClick={() => toggleTaskDone(index)} />}

                                <Trash
                                    className={`absolute right-2 cursor-pointer bottom-5 mt-2 text-red-500 hover:text-red-700 ${task.done ? `z-20` : ''}`}
                                    onClick={() => deleteTask(index)}
                                    size={20}
                                />
                            </div>
                        </div>

                        {task.done && (
                            <div className="absolute inset-0 bg-green-500 bg-opacity-75 flex items-center justify-center">
                                <p className="text-white font-bold text-2xl">Done</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                saveTask={saveTask}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </>
    );
}

export default TodoMain;
