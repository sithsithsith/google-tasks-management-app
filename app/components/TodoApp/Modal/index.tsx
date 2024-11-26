import { useState } from "react";

const FullScreenModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-md mx-auto h-full overflow-y-auto shadow-lg rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-lg font-semibold">New Task</h2>
              <button
                className="text-blue-500 font-medium hover:underline"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6 mt-4">
              {/* Title and Description */}
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Text"
                  rows={4}
                  className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Starts
                  </label>
                  <div className="flex items-center space-x-2 mt-1">
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      defaultValue="2024-06-21"
                    />
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      defaultValue="09:00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ends
                  </label>
                  <div className="flex items-center space-x-2 mt-1">
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      defaultValue="2024-06-21"
                    />
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      defaultValue="10:00"
                    />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  value="Not start"
                  disabled
                  className="w-full p-3 mt-1 border border-gray-300 bg-gray-100 rounded-md"
                />
              </div>

              {/* Notification Toggle */}
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700">
                  Notification
                </label>
                <input
                  type="checkbox"
                  className="w-6 h-6 text-blue-500 focus:ring-blue-500 rounded-full border-gray-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
