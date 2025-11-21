import React, { useState, useEffect } from 'react';

// Updated MV data with Weeekly's official brand colors
const mvData = [
  {
    id: 1,
    title: 'Tag Me',
    album: 'We Are',
    year: '2020',
    youtubeId: 'Moq0aOiTUOA',
    thumbnail: 'https://img.youtube.com/vi/Moq0aOiTUOA/maxresdefault.jpg',
    color: 'from-[#c4afd0] to-[#97e0cf]',
    accent: '#c4afd0',
    description: 'Debut single showcasing fresh and energetic concept',
    duration: '3:26'
  },
  {
    id: 2,
    title: 'Zig Zag',
    album: 'We Can',
    year: '2020',
    youtubeId: '1FqAoADnId4',
    thumbnail: 'https://img.youtube.com/vi/1FqAoADnId4/maxresdefault.jpg',
    color: 'from-[#97e0cf] to-[#ffd076]',
    accent: '#97e0cf',
    description: 'Playful and dynamic follow-up with intricate choreography',
    duration: '3:24'
  },
  {
    id: 3,
    title: 'After School',
    album: 'We Play',
    year: '2021',
    youtubeId: 'qfVuRQX0ydQ',
    thumbnail: 'https://img.youtube.com/vi/qfVuRQX0ydQ/maxresdefault.jpg',
    color: 'from-[#ffd076] to-[#c4afd0]',
    accent: '#ffd076',
    description: 'School-themed hit with nostalgic vibes',
    duration: '3:26'
  },
  {
    id: 4,
    title: 'Holiday Party',
    album: 'Play Game: Holiday',
    year: '2021',
    youtubeId: 'DZEOt4pQXXk',
    thumbnail: 'https://img.youtube.com/vi/DZEOt4pQXXk/maxresdefault.jpg',
    color: 'from-[#c4afd0] to-[#ffd076]',
    accent: '#c4afd0',
    description: 'Festive and cheerful holiday special',
    duration: '3:30'
  },
  {
    id: 5,
    title: 'Ven Para',
    album: 'Play Game: Awake',
    year: '2022',
    youtubeId: 'F_sOWEje2mE',
    thumbnail: 'https://img.youtube.com/vi/F_sOWEje2mE/maxresdefault.jpg',
    color: 'from-[#97e0cf] to-[#c4afd0]',
    accent: '#97e0cf',
    description: 'Powerful concept change with mature vibes',
    duration: '3:13'
  },
  {
    id: 6,
    title: 'Vroom Vroom',
    album: 'ColoRise',
    year: '2023',
    youtubeId: '26ETaLtvGPI',
    thumbnail: 'https://img.youtube.com/vi/26ETaLtvGPI/maxresdefault.jpg',
    color: 'from-[#ffd076] to-[#97e0cf]',
    accent: '#ffd076',
    description: 'Energetic comeback with racing concept',
    duration: '3:23'
  },
  {
    id: 7,
    title: 'Lights On',
    album: 'Bliss',
    year: '2023',
    youtubeId: 'WPGkYxm8xps',
    thumbnail: 'https://img.youtube.com/vi/WPGkYxm8xps/maxresdefault.jpg',
    color: 'from-[#c4afd0] via-[#97e0cf] to-[#ffd076]',
    accent: '#c4afd0',
    description: 'Emotional and heartfelt winter special',
    duration: '3:31'
  }
];

function MV() {
  const [selectedMV, setSelectedMV] = useState(mvData[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [videoLoadKey, setVideoLoadKey] = useState(0);

  useEffect(() => {
    setIsPlaying(true);
    setVideoLoadKey(prev => prev + 1);
  }, [selectedMV]);

  const handleMVSelect = (mv) => {
    setSelectedMV(mv);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextVideo = () => {
    const currentIndex = mvData.findIndex(mv => mv.id === selectedMV.id);
    const nextIndex = (currentIndex + 1) % mvData.length;
    setSelectedMV(mvData[nextIndex]);
  };

  const prevVideo = () => {
    const currentIndex = mvData.findIndex(mv => mv.id === selectedMV.id);
    const prevIndex = (currentIndex - 1 + mvData.length) % mvData.length;
    setSelectedMV(mvData[prevIndex]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background Gradient with Weeekly Colors */}
      <div className={`absolute inset-0 bg-gradient-to-br ${selectedMV.color} transition-all duration-1000`}></div>
      
      {/* Brand Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c4afd0 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles in Brand Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 25 + 10,
              height: Math.random() * 25 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              backgroundColor: i % 3 === 0 ? '#c4afd0' : i % 3 === 1 ? '#ffd076' : '#97e0cf',
              opacity: 0.15
            }}
          ></div>
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Weeekly Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
              <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
            </div>
            <span className="text-white font-semibold text-sm uppercase tracking-widest bg-black bg-opacity-50 px-4 py-2 rounded-full border border-white border-opacity-20">
              Weeekly Official MVs
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
              <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8 px-4">
          <button
            onClick={prevVideo}
            className="group flex items-center gap-2 text-white hover:text-[#ffd076] transition-all duration-300 transform hover:scale-110"
          >
            <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 border-2 border-[#c4afd0] group-hover:border-[#ffd076] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ffd076] to-[#c4afd0] bg-clip-text text-transparent">
              Previous
            </span>
          </button>

          <button
            onClick={nextVideo}
            className="group flex items-center gap-2 text-white hover:text-[#ffd076] transition-all duration-300 transform hover:scale-110"
          >
            <span className="font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#97e0cf] to-[#ffd076] bg-clip-text text-transparent">
              Next
            </span>
            <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 border-2 border-[#97e0cf] group-hover:border-[#ffd076] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Main Video Player Section */}
        <div className="mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#ffd076] rounded-full animate-pulse"></div>
              <span className="text-[#ffd076] font-semibold text-sm uppercase tracking-widest">Now Playing</span>
            </div>
            
            <h2 className="text-5xl font-black text-white mb-4 drop-shadow-2xl bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] bg-clip-text text-transparent">
              {selectedMV.title}
            </h2>
            
            <div className="flex items-center justify-center gap-6 text-lg mb-3">
              <span className="text-white font-semibold drop-shadow-lg">{selectedMV.album}</span>
              <div className="w-1 h-1 bg-[#97e0cf] rounded-full"></div>
              <span className="text-gray-300 drop-shadow">{selectedMV.year}</span>
              <div className="w-1 h-1 bg-[#ffd076] rounded-full"></div>
              <span className="text-[#ffd076] font-medium drop-shadow">{selectedMV.duration}</span>
            </div>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-sm drop-shadow">
              {selectedMV.description}
            </p>
          </div>
          
          {/* Enhanced Video Container with Brand Borders */}
          <div className="relative bg-black bg-opacity-90 rounded-3xl overflow-hidden shadow-2xl border-2 border-white border-opacity-20 transform perspective-1000">
            {/* Triple Border Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] rounded-3xl opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] rounded-3xl opacity-20 blur-lg"></div>
            
            <div className="relative aspect-w-16 aspect-h-9 bg-black rounded-2xl overflow-hidden">
              <iframe
                key={videoLoadKey}
                src={`https://www.youtube.com/embed/${selectedMV.youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0&modestbranding=1&controls=1`}
                title={`Weeekly - ${selectedMV.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80 md:h-96 lg:h-[540px] xl:h-[600px]"
              ></iframe>
            </div>

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-70 rounded-full px-6 py-3 backdrop-blur-sm border-2 border-[#c4afd0]">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 text-white hover:text-[#ffd076] transition-colors duration-300"
              >
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  isPlaying 
                    ? 'border-[#97e0cf] bg-[#97e0cf] bg-opacity-20' 
                    : 'border-[#ffd076] bg-[#ffd076]'
                }`}>
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-[#97e0cf]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              
              <div className="w-px h-6 bg-[#c4afd0] bg-opacity-50"></div>
              
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="flex items-center gap-2 text-white hover:text-[#97e0cf] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm font-medium">
                  {showThumbnails ? 'Hide' : 'Show'} Thumbnails
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced MV Thumbnail Carousel */}
        {showThumbnails && (
          <div className="relative">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-[#c4afd0] to-[#ffd076] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] bg-clip-text text-transparent">
                  Music Video Collection
                </h3>
              </div>
              <span className="text-gray-400 text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full border border-[#97e0cf] border-opacity-30">
                {mvData.length} videos • Click to play
              </span>
            </div>

            {/* Scrollable Thumbnail Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-[#c4afd0] scrollbar-track-transparent pb-4">
              {mvData.map((mv) => (
                <div
                  key={mv.id}
                  className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    selectedMV.id === mv.id 
                      ? 'scale-105 ring-4 shadow-2xl' 
                      : 'ring-2 ring-white ring-opacity-10 hover:ring-opacity-30'
                  } rounded-2xl overflow-hidden bg-black bg-opacity-50 backdrop-blur-lg border border-white border-opacity-10`}
                  style={{
                    boxShadow: selectedMV.id === mv.id ? `0 0 30px ${mv.accent}60` : 'none',
                    borderColor: selectedMV.id === mv.id ? mv.accent : 'rgba(255,255,255,0.1)'
                  }}
                  onClick={() => handleMVSelect(mv)}
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={mv.thumbnail}
                      alt={`Weeekly - ${mv.title}`}
                      className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 ${
                        selectedMV.id === mv.id 
                          ? 'bg-gradient-to-r from-[#ffd076] to-[#c4afd0] scale-110 shadow-lg' 
                          : 'bg-white bg-opacity-20 group-hover:bg-opacity-30'
                      }`}>
                        <svg
                          className={`w-6 h-6 ${
                            selectedMV.id === mv.id ? 'text-white' : 'text-white group-hover:text-[#ffd076]'
                          } ml-1 transition-colors`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Now Playing Badge */}
                    {selectedMV.id === mv.id && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#c4afd0] to-[#ffd076] text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        ▶ PLAYING
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-80 text-[#97e0cf] text-xs px-2 py-1 rounded font-mono border border-[#97e0cf] border-opacity-30">
                      {mv.duration}
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-4">
                    <h3 className={`font-bold text-sm mb-1 ${
                      selectedMV.id === mv.id 
                        ? 'text-[#ffd076]' 
                        : 'text-gray-200'
                    } group-hover:text-[#97e0cf] transition-colors`}>
                      {mv.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#c4afd0]">{mv.album}</span>
                      <span className="text-[#97e0cf]">{mv.year}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-2 line-clamp-2">
                      {mv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Color Scroll Indicator */}
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] rounded-full animate-pan"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Background Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
        .animate-pan {
          animation: pan 3s infinite linear;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default MV;