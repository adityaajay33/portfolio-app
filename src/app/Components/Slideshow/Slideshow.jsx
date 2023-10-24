import React, {useState, useEffect} from 'react'
import Image from "next/image"
import velocity from "../../assets/aditya_velocity.png"

const Slideshow = ({images, interval}) => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImage((currentImage + 1) % images.length);
        }, interval);

        return () => {
            clearInterval(timer);
            };
    }, [currentImage]);

  return (
    <div>
        <div className="slideshow">
            <Image src={velocity} width={700} alt="Slideshow" />
        </div>
    </div>
  )
}

export default Slideshow