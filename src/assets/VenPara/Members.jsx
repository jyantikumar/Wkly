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
  
  // Get the correct image based on selected era
  const getImagePath = () => {
    if (selectedEra === 'all') {
      // Default to lightsOn era when "all" is selected
      return memberImages.lightsOn;
    }
    return memberImages[selectedEra];
  };

  return (
    <div 
      className={`p-6 bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl w-[320px] rounded-2xl flex flex-col items-center 
                 transform transition-all duration-500 ease-out 
                 ${delayClass}
                 ${transitionClass}
                 hover:scale-105 hover:bg-white hover:shadow-2xl group
                 relative overflow-hidden cursor-pointer border-2 ${currentEraData.border || 'border-gray-300'}
                 hover:border-opacity-100 border-opacity-50
                 z-40`}
    >
      {/* Era Badge with Year - Only show when specific era is selected */}
      {selectedEra !== 'all' && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold ${currentEraData.accent} z-50 shadow-lg`}>
          {currentEraData.name} {currentEraData.year}
        </div>
      )}
      
      {/* Profile Image */}
      <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center overflow-hidden
                      shadow-2xl group-hover:scale-110 transition-transform duration-300 mt-2
                      border-4 border-white z-30 bg-gray-200`}>
        <img 
          src={getImagePath()} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.parentElement.querySelector('.gradient-fallback');
            if (fallback) {
              fallback.style.display = 'flex';
              fallback.className += ` bg-gradient-to-r ${currentEraData.color || 'from-gray-400 to-gray-600'}`;
            }
          }}
        />
        <div 
          className="gradient-fallback w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-r"
          style={{ display: 'none' }}
        >
          {name.charAt(0)}
        </div>
      </div>
      
      {/* Basic Info */}
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center z-30">{name}</h2>
      <p className="text-gray-600 text-sm mb-2 text-center z-30">{positions.join(', ')}</p>
      
      {/* Hidden Details on Hover */}
      <div className="w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-400 z-30">
        <div className="border-t border-gray-300 pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Birthday:</span>
            <span className="font-medium text-gray-800">{birth}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Height:</span>
            <span className="font-medium text-gray-800">{height}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Color:</span>
            <span className="font-medium text-gray-800">{color}</span>
          </div>
          {selectedEra !== 'all' && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Current Era:</span>
              <span className={`px-2 py-1 rounded text-xs font-medium text-white ${currentEraData.accent}`}>
                {currentEraData.name}
              </span>
            </div>
          )}
        </div>
        
        {/* Action Button */}
        <button className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200 z-30">
          View Full Profile
        </button>
      </div>
      
      {/* Always visible mini info */}
      <div className="flex justify-center space-x-4 mt-4 group-hover:opacity-0 transition-opacity duration-300 z-30">
        <span className="text-xs text-gray-500">{birth}</span>
        <span className="text-xs text-gray-500">•</span>
        <span className="text-xs text-gray-500">{height}</span>
      </div>
    </div>
  );
}

export default Members;