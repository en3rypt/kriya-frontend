import React, { useEffect, useState } from "react";

export default function Forms({ domain }) {
  const [formsURL, setformsURL] = useState("");
  useEffect(() => {
    domain === "cyber"
      ? setformsURL("https://forms.gle/sYJXxuy34sJ4Czmk7")
      : "";
  }, []);
  return (
    <div className=" ">
      <main className=" grid  place-content-center h-[100vh]  ">
        <a
          href={formsURL}
          target="_blank"
          className=" bg-gradient-to-br from-violet-500 via-pink-600 to-green-400 text-transparent bg-clip-text font-bold text-8xl "
        >
          Click To Start the Quiz
        </a>
      </main>
    </div>
  );
}
