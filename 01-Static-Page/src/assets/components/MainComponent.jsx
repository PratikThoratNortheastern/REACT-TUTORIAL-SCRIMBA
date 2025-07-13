// import React from 'react'

// function MainComponent() {
//   return (
//     <div>MainComponent</div>
//   )
// }

// export default MainComponent

import React from "react";

function MainComponent() {
  return (
    <>
      <main className="main-content">
        <section className="text-content">
          <h1> Fun facts about React!</h1>
          <ul className="facts-style">
            <li className="list-item-styles">Was first created in 2013</li>
            <li className="list-item-styles">
              Was orignally created by Jordan Walke
            </li>
            <li className="list-item-styles">
              Has well over 100k stars on github
            </li>
            <li className="list-item-styles">is maintained by facebook</li>
            <li className="list-item-styles">
              Powers thousands of enterprise apps including mobile apps
            </li>
            <li className="list-item-styles">It gives you high paying jobs</li>
          </ul>
        </section>
        <img
          className="img-style"
          src="src\assets\images\react-icon-large.png"
        />
      </main>
    </>
  );
}

export default MainComponent;
