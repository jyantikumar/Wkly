function Members({ 
  name, 
  positions,
  birth, 
  height, 
  color, 
  memberImages,
  selectedEra,
  currentEraData,
  delayIndex = 0, 
  transitionClass = ''
}) {
  
  const delayClass = `delay-${delayIndex * 100}`;
  
  // Era configuration with all three brand colors
  const eraConfig = {
    '2020-2022': {
      name: '2020-2022 Era',
      color: 'from-[#c4afd0] via-[#97e0cf] to-[#ffd076]',
      accent: 'bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076]',
      border: 'border-[#c4afd0]',
      textColor: 'text-[#c4afd0]',
      shadow: 'shadow-[0_20px_40px_-10px_rgba(196,175,208,0.3)]'
    },
    '2022-onwards': {
      name: '2022 Onwards',
      color: 'from-[#ffd076] via-[#c4afd0] to-[#97e0cf]',
      accent: 'bg-gradient-to-r from-[#ffd076] via-[#c4afd0] to-[#97e0cf]',
      border: 'border-[#ffd076]',
      textColor: 'text-[#ffd076]',
      shadow: 'shadow-[0_20px_40px_-10px_rgba(255,208,118,0.3)]'
    },
    'all': {
      name: 'All Eras',
      color: 'from-[#97e0cf] via-[#ffd076] to-[#c4afd0]',
      accent: 'bg-gradient-to-r from-[#97e0cf] via-[#ffd076] to-[#c4afd0]',
      border: 'border-[#97e0cf]',
      textColor: 'text-[#97e0cf]',
      shadow: 'shadow-[0_20px_40px_-10px_rgba(151,224,207,0.3)]'
    }
  };

  const getImagePath = () => {
    if (selectedEra === 'all') {
      return memberImages?.lightsOn || memberImages?.default;
    }
    // Map eras to appropriate images
    if (selectedEra === '2020-2022') {
      return memberImages?.venPara || memberImages?.afterSchool || memberImages?.lightsOn;
    }
    if (selectedEra === '2022-onwards') {
      return memberImages?.lightsOn || memberImages?.vroomVroom || memberImages?.default;
    }
    return memberImages?.[selectedEra] || memberImages?.lightsOn || memberImages?.default;
  };

  const currentEra = eraConfig[selectedEra] || eraConfig.all;

  return (
    <div 
      className={`p-6 bg-white bg-opacity-95 backdrop-blur-sm w-[320px] rounded-2xl flex flex-col items-center 
                 transform transition-all duration-500 ease-out 
                 ${delayClass}
                 ${transitionClass}
                 hover:scale-105 hover:bg-white group
                 relative overflow-hidden cursor-pointer border-2 ${currentEra.border}
                 hover:border-opacity-100 border-opacity-50
                 z-40 hover:shadow-2xl ${currentEra.shadow}`}
    >
      {/* Era Badge */}
      {selectedEra !== 'all' && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold ${currentEra.accent} z-50 shadow-lg border border-white border-opacity-20`}>
          {currentEra.name}
        </div>
      )}
      
      {/* Profile Image Container */}
      <div className={`w-28 h-28 rounded-2xl mb-4 flex items-center justify-center overflow-hidden
                      group-hover:scale-110 transition-transform duration-300 mt-2
                      bg-gradient-to-br ${currentEra.color} p-1 z-30 shadow-lg`}>
        <div className="w-full h-full rounded-xl overflow-hidden bg-white">
          <img 
            src={getImagePath()} 
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.gradient-fallback');
              if (fallback) {
                fallback.style.display = 'flex';
                fallback.className = `gradient-fallback w-full h-full rounded-xl flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br ${currentEra.color} border-2 border-white`;
              }
            }}
          />
          <div 
            className="gradient-fallback w-full h-full rounded-xl flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br border-2 border-white"
            style={{ display: 'none' }}
          >
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
      
      {/* Basic Info */}
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center z-30 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#c4afd0] group-hover:via-[#97e0cf] group-hover:to-[#ffd076] group-hover:bg-clip-text transition-all duration-300">
        {name}
      </h2>
      <p className="text-gray-600 text-sm mb-2 text-center z-30">{positions?.join(', ') || ''}</p>
      
      {/* Hidden Details on Hover */}
      <div className="w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-400 z-30">
        <div className="border-t border-gray-300 pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex items-center gap-1">
              <svg className="w-4 h-4 text-[#c4afd0]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
              Birthday:
            </span>
            <span className="font-medium text-gray-800">{birth}</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-600 flex items-center gap-1">
              <svg className="w-4 h-4 text-[#97e0cf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
              Height:
            </span>
            <span className="font-medium text-gray-800">{height}</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-600 flex items-center gap-1">
              <svg className="w-4 h-4 text-[#ffd076]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58s4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
              </svg>
              Color:
            </span>
            <span className="font-medium text-gray-800 flex items-center gap-2">
              {color}
              <div 
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor: 
                    color === 'Purple' ? '#c4afd0' :
                    color === 'Orange' ? '#ffd076' :
                    color === 'Blue' ? '#97e0cf' :
                    color === 'Red' ? '#ff6b6b' :
                    color === 'Green' ? '#51cf66' :
                    color === 'Pink' ? '#f783ac' : '#c4afd0'
                }}
              ></div>
            </span>
          </div>
        </div>
        
        {/* Action Button */}
        <button className={`w-full mt-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 z-30 
                          bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] 
                          hover:bg-gradient-to-r hover:from-[#ffd076] hover:via-[#c4afd0] hover:to-[#97e0cf]
                          text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white`}>
          View Full Profile
        </button>
      </div>
      
      {/* Always visible mini info */}
      <div className="flex justify-center space-x-4 mt-4 group-hover:opacity-0 transition-opacity duration-300 z-30">
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3 text-[#c4afd0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
          </svg>
          {birth?.split(' ')[2] || ''}
        </span>
        <span className="text-xs text-gray-500">•</span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3 text-[#97e0cf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
          </svg>
          {height}
        </span>
      </div>

      {/* Background decorative elements */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentEra.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${currentEra.border} rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${currentEra.border} rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      {/* Floating brand dots */}
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#c4afd0] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#97e0cf] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="absolute top-1/2 -right-2 w-3 h-3 bg-[#ffd076] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>
  );
}

export default Members;