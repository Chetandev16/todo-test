import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';


// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, closeModal, saveTask, selectedImage, setSelectedImage }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                    <h2 className="text-black text-2xl font-bold mb-2">Add Task</h2>
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    >
                        &times;
                    </button>
                    <form onSubmit={saveTask}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                name="description"
                                required
                                className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Select Background Image</label>
                            <div className="flex justify-between mt-2">
                                {[image1, image2, image3].map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`p-1 border-2 rounded-lg ${selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                                            } cursor-pointer`}
                                    >
                                        <img src={img} alt={`bg-${index}`} className="h-16 w-16 object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Modal;
