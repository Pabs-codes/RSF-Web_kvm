import React from 'react';

function HeroM(props) {
  return (
    <>
      <div className={props.cName}>
        {props.heroMType === 'video' ? (
          <video autoPlay muted loop className='heroM-video'>
            <source src={props.heroMSource} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img alt='abtimg' src={props.heroMSource} className='heroM-img' />
        )}

        <div className='heroM-text'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
}

export default HeroM;
