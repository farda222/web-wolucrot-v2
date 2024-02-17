import { useState, useRef } from "react";
import Icon from "../assets/img/Account.jpg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [className, setClassName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [background, setBackground] = useState("");
  const [classes, setClasses] = useState([]);
  const inputFileRef = useRef(null);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleAddClass = () => {
    if (className === "" || classDescription === "") {
      return;
    }

    const newClass = {
      name: className,
      description: classDescription,
      background: background,
    };

    setClasses([...classes, newClass]);
    setClassName("");
    setClassDescription("");
    setBackground("");
    setShowOverlay(false);
  };

  const handleBackgroundChange = (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setBackground(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen z-0 relative font-custom">
      <button className="fixed z-50 bottom-10 right-10 w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg" onClick={handleButtonClick}>
        +
      </button>

      {/* Menampilkan Kartu Kelas */}
      <div className="h-full mt-14 z-0">
        <div className="w-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((classItem, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-4 border-2 border-solid border-neutral-300 ${classes.length === 1 && index === 0 ? "mt-20" : ""}`}>
              {classItem.background && <img src={classItem.background} alt="Background" className="w-full h-28 object-cover flex mb-2 rounded-t-lg z-0" />}
              <img className="h-14 w-14 rounded-full -mt-10 ml-44 z-50" src={Icon}></img>
              <h1 className="text-2xl font-bold mb-2 -mt-1 -mr-20">{classItem.name}</h1>
              <p className="text-sm text-gray-600 mb-2">0 Member</p>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Options
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button type="submit" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm")}>
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay untuk Menambahkan Kelas */}
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 rounded-md shadow-lg p-7">
            <h2 className="text-xl font-bold mb-4">Add Class</h2>
            <form>
              <div className="mb-4 mt-7">
                <input placeholder="Class name" type="text" id="className" value={className} onChange={(e) => setClassName(e.target.value)} className="w-full h-14 p-2 border border-gray-300 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4 mt-10">
                <textarea
                  id="classDescription"
                  placeholder="Description"
                  value={classDescription}
                  onChange={(e) => setClassDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none h-14"></textarea>
              </div>
              <label htmlFor="background" className="flex w-40 h-14 bg-indigo-600 text-white rounded-md text-center justify-center items-center cursor-pointer mb-10 mt-10">
                Background
                <input ref={inputFileRef} type="file" id="background" accept="image/*" onChange={handleBackgroundChange} className="sr-only" />
              </label>
              <div className="flex justify-end mt-16 gap-4">
                <button type="button" onClick={handleOverlayClose} className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <button type="button" onClick={handleAddClass} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600">
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
