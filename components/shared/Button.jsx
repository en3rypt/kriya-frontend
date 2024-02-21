import React, { useEffect, useState } from "react";

export default function Button({
  text,
  index,
  setquizIndexQnNumber,
  onclick,
  quizDataLength,
}) {
  const [showModal, setshowModal] = useState(true);

  useEffect(() => {
    if (index === quizDataLength) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  }, [index, quizDataLength]);

  return (
    <div className=" mb-[10%] cursor-pointer">
      {showModal && (
        <button
          className="text-6xl bg-gradient-to-r from-green-400 to-violet-400 text-transparent bg-clip-text"
          onClick={onclick}
        >
          {text}
        </button>
      )}
    </div>
  );
}
