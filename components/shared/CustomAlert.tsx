import React,{useState} from 'react'

export default function CustomAlert() {
    const [showAlert, setShowAlert] = useState(false);

    const showCustomAlert = () => {
      setShowAlert(true);
    };
  
    const closeCustomAlert = () => {
      setShowAlert(false);
    };
  return ( 
    <div>
        <button onClick={showCustomAlert} className="bg-blue-500 text-white px-4 py-2 rounded">Show Custom Alert</button>
        {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 text-red-800 border border-red-500 px-4 py-2 rounded">
            <span className="absolute top-0 right-0 cursor-pointer" onClick={closeCustomAlert}>&times;</span>
            <p>This is a custom alert!</p>
        </div>
        )}
    </div>
  )
}
