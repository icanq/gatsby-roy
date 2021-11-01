/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {navigate} from 'gatsby'
import Draggable from 'react-draggable';
import BalonImage from '../assets/images/balons.png';
import Title from '../assets/images/title.png';
import BalonGif from '../assets/images/balon.gif';
import Peniti from '../assets/images/peniti.png';

function Onboarding() {
  const [isPopped, setIsPopped] = useState(false);

  const imageClick = () => {
    setIsPopped(true);
    setTimeout(() => {
      navigate("home", {replace: false})
    }, 1000);
  };

  const Image = (props) => {
    return (
      <img
        style={{ display: "block" ,height: '50vh', margin: '0 auto', marginTop: '2em' }}
        alt='balloon'
        className='balloon'
        src={props?.source}
        onClick={() => imageClick()}
      />
    );
  };

  return (
    <div className='app'>
      <img
        style={{
          display: "block",
          margin: '0 auto',
          marginTop: '0.5em',
          width: '40vw',
          height: '100%'
        }}
        alt='title'
        className='balloon'
        src={Title}
        onClick={() => imageClick()}
      />
      {isPopped ? <Image source={BalonGif} /> : <Image source={BalonImage} />}
      <Draggable onStop={() => imageClick()}>
        <img
          style={{ display: "block", height: '2vh', margin: '0 auto', marginTop: '2em' }}
          alt='peniti'
          className='peniti'
          src={Peniti}
          onClick={() => imageClick()}
        />
      </Draggable>
      <div>
        <span style={{display: "block", textAlign: "center", marginTop: "1.2em", fontWeight: 300}}>
          pecahin balon atau geser peniti
        </span>
      </div>
    </div>
  );
}

export default Onboarding;