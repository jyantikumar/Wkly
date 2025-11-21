import Members from './Members';

function MembersGrid() {
  // Your state and data would go here
  const [selectedEra, setSelectedEra] = useState('all');
  
  const members = [
    {
      id: 1,
      name: "Monday",
      positions: ["Leader", "Vocalist"],
      birth: "May 10, 2002",
      height: "163cm",
      color: "Purple",
      images: {
        lightsOn: "/images/monday-lightson.jpg",
        venPara: "/images/monday-venpara.jpg"
      }
    },
    // ... more members
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
      {/* Weeekly Brand Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
            <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
          </div>
          <span className="text-white font-semibold text-sm uppercase tracking-widest bg-black bg-opacity-50 px-4 py-2 rounded-full border border-white border-opacity-20">
            Weeekly Members
          </span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
            <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
          </div>
        </div>
      </div>

      {/* Era Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedEra('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedEra === 'all' 
                  ? 'bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Eras
            </button>
            <button 
              onClick={() => setSelectedEra('2020-2022')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedEra === '2020-2022' 
                  ? 'bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              2020-2022
            </button>
            <button 
              onClick={() => setSelectedEra('2022-onwards')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedEra === '2022-onwards' 
                  ? 'bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              2022-Onwards
            </button>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {members.map((member, index) => (
          <Members
            key={member.id}
            name={member.name}
            positions={member.positions}
            birth={member.birth}
            height={member.height}
            color={member.color}
            memberImages={member.images}
            selectedEra={selectedEra}
            delayIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default MembersGrid;