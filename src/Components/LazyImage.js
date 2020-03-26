import React, {useEffect, useState} from "react";
import styled from "styled-components";
import "../Style/Home.css";
import "../Style/About.css";

const Image = styled.img`
  @keyframes loaded {
    0% {
      opacity: 0.1;
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
  &.loaded {
    animation: loaded 400ms ease-in;
  }
`

const LazyImage = ({placeholder, src, alt, classStyle}) => {
    const placeHolder = placeholder;

    const [imageSrc, setImageSrc] = useState(placeHolder);
    const [imageRef, setImageRef] = useState();

    const onLoad = event => {
        event.target.classList.add("loaded")
    };

    const onError = event => {
        event.target.classList.add("has-error")
    }

    useEffect(() => {
        let observer;
        let didCancel;

        if (imageRef && imageSrc === placeHolder) {
            if(IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            // when image is visible in the viewport + rootMargin
                            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                setImageSrc(src)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: "75%"
                    }
                )
                observer.observe(imageRef)
            } else {
                // Old browsers fallback
                setImageSrc(src)
            }
        }
        return () => {
            didCancel = true
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef)
            }
        }
    }, [src, imageSrc, imageRef])

    return (
        <Image
        placeholder = {placeholder}
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        className={classStyle}
        onLoad={onLoad}
        onError={onError}
        />
    )
}

export default LazyImage;