// Count.js

import React from 'react';
import './Count.css';
import partnersIcon from '../../assets/why (1).png';
import nationsIcon from '../../assets/why (6).png';
import projectsIcon from '../../assets/why (3).png';

const useCountAnimation = (finalCount, interval = 40) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let animation;

    const startAnimation = () => {
      animation = setInterval(() => {
        setCount((prevCount) => (prevCount < finalCount ? prevCount + 1 : finalCount));
      }, interval);
    };

    startAnimation();

    return () => {
      clearInterval(animation);
    };
  }, [finalCount, interval]);

  return count;
};

const Count = () => {
  // const partnersCount = useCountAnimation(40, 150);
  // const nationsCount = useCountAnimation(8, 350);
  const projectsCount = useCountAnimation(499, 100);

  return (
    <div className="count-container">
      <div className="count-heading">
        <h2>  <h1 className="shining-text" style={{ color: 'white', fontSize: '24px', fontFamily: 'El Messiri' }}>
        Rupasinghe Steels
      </h1>
      Best Steel structure company <br/> <h3>Sri Lanka & South Asia<br/></h3> </h2>
      </div>
      {/* {createItem("Partners", partnersIcon, partnersCount)}
      {createItem("Nations", nationsIcon, nationsCount)}
      {createItem("Projects", projectsIcon, projectsCount)} */}
      {createItem("Partners", partnersIcon)}
      {createItem("Nations", nationsIcon)}
      {createItem("Projects", projectsIcon, projectsCount)}
    </div>
  );
};

function createItem(text, iconSrc, number) {
  return (
    <div className="count-item" key={text}>
      <img src={iconSrc} alt={text + " Icon"} />
      <p>{text}</p>
      <p className="number">+{number}</p>
    </div>
  );
}

export default Count;
