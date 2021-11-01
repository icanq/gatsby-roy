import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Gallery from 'react-photo-gallery'
import { photos } from '../../data';
import useOnScreen from '../../hooks/useOnScreen';
import SectionHeader from '../SectionHeader';
import cn from "classnames"


export default function ImageGallery () {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  return (
    <section>
      <SectionHeader title="our moments"/>
      <div
       className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
       ref={ref}
       data-scroll-section>
        <Gallery margin={0} photos={photos}/>
      </div>
    </section>
  )
}