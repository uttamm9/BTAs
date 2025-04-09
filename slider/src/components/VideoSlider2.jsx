import React, { useState, useRef } from "react";
import "./videoSlider2.css"; // Import your CSS file for styling

const videos = [
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_9c726d95-f2d7-4cd9-85f7-53253b646705.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_9c726d95-f2d7-4cd9-85f7-53253b646705.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_a5c322f2-90da-4430-9d18-c480f0252756.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_a5c322f2-90da-4430-9d18-c480f0252756.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_d4e915ee-e8d4-4939-9b88-273d935673a1.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_d4e915ee-e8d4-4939-9b88-273d935673a1.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_718ce00f-6de7-4495-8326-454d414ed646.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_718ce00f-6de7-4495-8326-454d414ed646.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_0c05b5be-0e71-4430-8266-51e6ba8f5161.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_0c05b5be-0e71-4430-8266-51e6ba8f5161.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_7391cdeb-ad74-4a21-94d3-f4ccb3cf6f83.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_7391cdeb-ad74-4a21-94d3-f4ccb3cf6f83.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_096bd8b5-015f-4806-acb9-807c60b1d5c6.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_096bd8b5-015f-4806-acb9-807c60b1d5c6.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_5164b523-5204-4888-a733-c47c11a7ea02.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_5164b523-5204-4888-a733-c47c11a7ea02.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_e75ddb01-b69f-4167-848f-4b8b2f3d8869.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_e75ddb01-b69f-4167-848f-4b8b2f3d8869.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_43402bf5-57ce-417e-a737-f4bd467c94dd.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_43402bf5-57ce-417e-a737-f4bd467c94dd.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_096bd8b5-015f-4806-acb9-807c60b1d5c6.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_096bd8b5-015f-4806-acb9-807c60b1d5c6.mp4",
  },
  {
    poster:
      "https://whatmorelive-brand-image-poster-assets.b-cdn.net/soham_STR24SOA68L/poster_60c3519e-f383-4347-807c-7f5823233b5c.webp",
    src:
      "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/soham_STR24SOA68L/tn_60c3519e-f383-4347-807c-7f5823233b5c.mp4",
  },
];

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  const videosPerPage = 8;
  const totalSlides = videos.length - videosPerPage + 1;

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };

  const closeModal = () => {
    setSelectedVideoIndex(null);
  };

  const goToPrevModalVideo = () => {
    console.log("prev clicked", selectedVideoIndex);
    if (selectedVideoIndex > 0) {
      setSelectedVideoIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextModalVideo = () => {
    if (selectedVideoIndex < videos.length - 1) {
      setSelectedVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{textAlign:'center', fontSize:'56px', fontWeight:'400', letterSpacing:'1.2px'}} >Effortless, high-quality videos for any platform with  <span  style={{fontWeight:'700'}}> Whatmore Studio </span> </h2>

      <div
        style={{
          position: "relative", backgroundColor: "white",borderRadius: "8px",
          height: "400px",width: "100%",overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",transition: "transform 0.5s ease",
            transform: `translateX(-${currentSlide * (100 / videosPerPage)}%)`,
            width: `${(videos.length * 100) / videosPerPage}%`,  gap: "10px",
          }}
        >
          {videos.map((video, index) => (
            <div
              className="video-container"
              key={`video-${index}`}
              id={`video-${index}`}
              style={{
                flex: `0 0 calc(${100 / videosPerPage}% - 10px)`,
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleVideoClick(index)}
            >
              <video
                onClick={() => setDisplayModal(true)} // Add onClick event to open modal
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                }}
                autoPlay
                loop
                muted
                playsInline
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          style={{
            position: "absolute", top: "50%",left: "10px",transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white",
            border: "none", padding: "10px",
            cursor: currentSlide === 0 ? "not-allowed" : "pointer",
            opacity: currentSlide === 0 ? 0.5 : 1,
            zIndex: 10,
          }}
        >
          Prev
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          style={{
            position: "absolute",top: "50%", right: "10px", transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white",  border: "none",padding: "10px",
            cursor: currentSlide === totalSlides - 1 ? "not-allowed" : "pointer",
            opacity: currentSlide === totalSlides - 1 ? 0.5 : 1,
            zIndex: 10,
          }}
        >
          Next
        </button>
      </div>

      {/* Left Side Video */}
      <div
        style={{
          position: "absolute", top: "50%", left: "-150px",transform: "translateY(-50%)",width: "140px", height: "80px", overflow: "hidden",  borderRadius: "8px", backgroundColor: "#000",
        }}
      >
        <video
          style={{
            width: "100%", height: "100%",  objectFit: "cover",
          }}
          autoPlay
          loop
          muted
          playsInline
          poster={videos[currentSlide]?.poster}
        >
          <source src={videos[currentSlide]?.src} type="video/mp4" />
        </video>
      </div>

      {/* Right Side Video */}
      <div
        style={{
          position: "absolute", top: "50%", right: "-150px", transform: "translateY(-50%)",
          width: "140px", height: "80px", overflow: "hidden", borderRadius: "8px",
          backgroundColor: "#000",
        }}
      >
        <video
          style={{
            width: "100%", height: "100%", objectFit: "cover",
          }}
          autoPlay
          loop
          muted
          playsInline
          poster={videos[currentSlide + 1]?.poster}
        >
          <source src={videos[currentSlide + 1]?.src} type="video/mp4" />
        </video>
      </div>

      {/* Modal (Lightbox) */}
      {selectedVideoIndex !== null && (
        <div
          key={selectedVideoIndex} // Add key to force re-render
          id="videoModal"
          style={{
            position: "fixed",top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.8)",display: "flex",alignItems: "center",
            justifyContent: "center", zIndex: 9999,
          }}
          onClick={closeModal} // Clicking outside the modal content closes it.
        >
          <div
            id="modalContent"
            style={{
              position: "relative",display: "flex", alignItems: "center",
              justifyContent: "center", height: "80%",width: "90%",
              maxWidth: "800px",backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside content.
          >
            {/* Close Button */}
            <button
              id="closeModalButton"
              onClick={closeModal}
              style={{
                position: "absolute", top: "10px", right: "10px",
                zIndex: 10, backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",  border: "none", padding: "8px",
                cursor: "pointer", borderRadius: "4px",
              }}
            >
              X
            </button>

            {/* Previous Modal Video Button */}
            <button
              id="prevModalButton"
              onClick={goToPrevModalVideo}
              disabled={selectedVideoIndex === 0}
              style={{
                position: "absolute",top: "50%", left: "10px",           transform: "translateY(-50%)",  zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.5)",  color: "#fff",
                border: "none",  padding: "8px",
                cursor:
                  selectedVideoIndex === 0 ? "not-allowed" : "pointer",
                opacity: selectedVideoIndex === 0 ? 0.5 : 1,
                borderRadius: "4px",
              }}
            >
              &lt;
            </button>

            {/* Video Player in the Modal */}
            <video
              id="modalVideo"
              style={{ display: "block", width: "30%", height: "90%" }}
              autoPlay
              // controls
              loop
              muted={false} // Unmute in the modal
              playsInline
              poster={videos[selectedVideoIndex-1]?.poster}
            >
              <source
                src={videos[selectedVideoIndex-1]?.src}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              id="modalVideo"
              style={{ display: "block", width: "40%", height: "auto" }}
              autoPlay
              controls
              loop
              muted={false} // Unmute in the modal
              playsInline
              poster={videos[selectedVideoIndex]?.poster}
            >
              <source
                src={videos[selectedVideoIndex]?.src}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              id="modalVideo"
              style={{ display: "block",width: "30%", height: "90%"}}
              autoPlay
              // controls
              loop
              muted={false} // Unmute in the modal
              playsInline
              poster={videos[selectedVideoIndex+1]?.poster}
            >
              <source
                src={videos[selectedVideoIndex+1]?.src}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Next Modal Video Button */}
            <button
              id="nextModalButton"
              onClick={goToNextModalVideo}
              disabled={selectedVideoIndex === videos.length - 1}
              style={{
                position: "absolute", top: "50%", right: "10px",
                transform: "translateY(-50%)", zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff", border: "none", padding: "8px",
                cursor:
                  selectedVideoIndex === videos.length - 1
                    ? "not-allowed"
                    : "pointer",
                opacity: selectedVideoIndex === videos.length - 1 ? 0.5 : 1,
                borderRadius: "4px",
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;