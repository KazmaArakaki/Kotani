import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./styles";

const GalleryComponent = ({
  style,
  imageSources,
}) => {
  let galleryAnimationInterval = null;
  let previewOffset = 0;

  const previewsContainerRef = useRef();
  const [previews, setPreviews] = useState([]);

  const showNextImage = () => {
    const previews = previewsContainerRef.current.children;

    if (previews.length > 0) {
      for (const preview of previews) {
        preview.style.opacity = 0;
      }

      previews[previewOffset].style.opacity = 1;

      if (previewOffset + 1 >= previews.length) {
        previewOffset = 0;
      } else {
        previewOffset += 1;
      }
    }
  };

  const previewsContainerClickHandler = (event) => {
    clearInterval(galleryAnimationInterval);

    showNextImage();
  };

  useEffect(() => {
    (async () => {
      const previews = [];

      for (const imageSource of imageSources) {
        await (async () => {
          return new Promise((resolve) => {
            const image = new Image();

            image.addEventListener("load", (event) => {
              const containerRect = previewsContainerRef.current.getBoundingClientRect();
              const containerAspectRatio = containerRect.width / containerRect.height;
              const imageAspectRatio = image.width / image.height;

              let width = "auto";
              let height = "auto";

              if (imageAspectRatio > containerAspectRatio) {
                height = `${containerRect.height}px`;
              } else {
                width = `${containerRect.width}px`;
              }

              previews.push(
                  <img key={imageSource}
                      style={{ ...styles.preview, width, height }}
                      src={imageSource}
                      alt={"Gallery Item"} />
              );

              resolve();
            });

            image.src = imageSource;
          });
        })();
      }

      setPreviews(previews);

      showNextImage();

      galleryAnimationInterval = setInterval(showNextImage, 5 * 1000);
    })();

    return () => {
      clearInterval(galleryAnimationInterval);
    };
  }, [imageSources]);

  return (
    <div style={style}>
      <div style={styles.previewsContainer}
          ref={previewsContainerRef}
          onClick={previewsContainerClickHandler}>
        {previews}
      </div>
    </div>
  );
};

GalleryComponent.defaultProps = {
  style: {
    width: 400,
    height: 400,
  },
  imageSources: [],
};

export default GalleryComponent;

