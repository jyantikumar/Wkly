import LightsOn from "../assets/LightsOn.mp4";

function Video() {
  return (
    <div className="relative w-full">
        <video controls autoPlay loop muted className="w-full h-auto">
      <source src={LightsOn} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
  
    </div>
  );
}

export default Video;