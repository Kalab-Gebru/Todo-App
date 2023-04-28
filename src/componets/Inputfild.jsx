import React, { useState } from "react";

function Inputfild() {
  const [userName, setName] = useState("");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="h-16 w-full rounded-lg my-5 md:my-8 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6"
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        ></input>
      </form>
    </div>
  );
}

export default Inputfild;
