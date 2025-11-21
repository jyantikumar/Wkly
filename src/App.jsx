import { useState, useEffect } from 'react';
import NavBar from "./assets/NavBar";
import Members from "./assets/Members";
import Hero from "./assets/Hero";
import Video from './assets/Video';

// Member data with images for each era
const memberData = [
  { 
    name: 'Lee Soojin', 
    positions: ['Leader', 'Main Dancer'],
    birth: 'Mar 12',
    height: '164cm',
    color: 'Purple',
    images: {
      tagMe: '/images/soojin-tagme.jpg',
      zigZag: '/images/soojin-zigzag.jpg',
      afterSchool: '/images/soojin-afterschool.jpg',
      holidayParty: '/images/soojin-holiday.jpg',
      venPara: '/images/soojin-venpara.jpg',
      vroomVroom: '/images/soojin-vroom.jpg',
      lightsOn: '/images/soojin-lightson.jpg'
    }
  },
  { 
    name: 'Shin Jiyo Hyewon', 
    positions: ['Lead Dancer', 'Maknae'],
    birth: 'Dec 03',
    height: '166cm',
    color: 'Orange',
    images: {
      tagMe: '/images/hyewon-tagme.jpg',
      zigZag: '/images/hyewon-zigzag.jpg',
      afterSchool: '/images/hyewon-afterschool.jpg',
      holidayParty: '/images/hyewon-holiday.jpg',
      venPara: '/images/hyewon-venpara.jpg',
      vroomVroom: '/images/hyewon-vroom.jpg',
      lightsOn: '/images/hyewon-lightson.jpg'
    }
  },
  { 
    name: 'Kim Jimin', 
    positions: ['Main Vocalist'],
    birth: 'Aug 04',
    height: '162cm',
    color: 'Blue',
    images: {
      tagMe: '/images/jimin-tagme.jpg',
      zigZag: '/images/jimin-zigzag.jpg',
      afterSchool: '/images/jimin-afterschool.jpg',
      holidayParty: '/images/jimin-holiday.jpg',
      venPara: '/images/jimin-venpara.jpg',
      vroomVroom: '/images/jimin-vroom.jpg',
      lightsOn: '/images/jimin-lightson.jpg'
    }
  },
  { 
    name: 'Park Soeun', 
    positions: ['Lead Vocalist'],
    birth: 'Nov 21',
    height: '163cm',
    color: 'Red',
    images: {
      tagMe: '/images/soeun-tagme.jpg',
      zigZag: '/images/soeun-zigzag.jpg',
      afterSchool: '/images/soeun-afterschool.jpg',
      holidayParty: '/images/soeun-holiday.jpg',
      venPara: '/images/soeun-venpara.jpg',
      vroomVroom: '/images/soeun-vroom.jpg',
      lightsOn: '/images/soeun-lightson.jpg'
    }
  },
  { 
    name: 'Lee Jaehee', 
    positions: ['Main Rapper'],
    birth: 'Jan 15',
    height: '165cm',
    color: 'Green',
    images: {
      tagMe: '/images/jaehee-tagme.jpg',
      zigZag: '/images/jaehee-zigzag.jpg',
      afterSchool: '/images/jaehee-afterschool.jpg',
      holidayParty: '/images/jaehee-holiday.jpg',
      venPara: '/images/jaehee-venpara.jpg',
      vroomVroom: '/images/jaehee-vroom.jpg',
      lightsOn: '/images/jaehee-lightson.jpg'
    }
  },
  { 
    name: 'Han Jihan', 
    positions: ['Sub Vocalist', 'Visual'],
    birth: 'Jul 08',
    height: '161cm',
    color: 'Pink',
    images: {
      tagMe: '/images/jihan-tagme.jpg',
      zigZag: '/images/jihan-zigzag.jpg',
      afterSchool: '/images/jihan-afterschool.jpg',
      holidayParty: '/images/jihan-holiday.jpg',
      venPara: '/images/jihan-venpara.jpg',
      vroomVroom: '/images/jihan-vroom.jpg',
      lightsOn: '/images/jihan-lightson.jpg'
    }
  },
];

// Era data with video sources and styling
const eraData = {
  tagMe: {
    name: 'Tag Me',
    year: '2020',
    video: '/videos/tagme-mv.mp4',
    color: 'from-purple-500 to-pink-600',
    accent: 'bg-pink-500',
    border: 'border-pink-300'
  },
  zigZag: {
    name: 'Zig Zag',
    year: '2020',
    video: '/videos/zigzag-mv.mp4',
    color: 'from-blue-500 to-teal-600',
    accent: 'bg-teal-500',
    border: 'border-teal-300'
  },
  afterSchool: {
    name: 'After School',
    year: '2021',
    video: '/videos/afterschool-mv.mp4',
    color: 'from-red-500 to-orange-600',
    accent: 'bg-orange-500',
    border: 'border-orange-300'
  },
  holidayParty: {
    name: 'Holiday Party',
    year: '2021',
    video: '/videos/holiday-mv.mp4',
    color: 'from-green-500 to-blue-600',
    accent: 'bg-blue-500',
    border: 'border-blue-300'
  },
  venPara: {
    name: 'Ven Para',
    year: '2022',
    video: '/videos/venpara-mv.mp4',
    color: 'from-yellow-500 to-red-600',
    accent: 'bg-red-500',
    border: 'border-red-300'
  },
  vroomVroom: {
    name: 'Vroom Vroom',
    year: '2022',
    video: '/videos/vroom-mv.mp4',
    color: 'from-indigo-500 to-purple-600',
    accent: 'bg-indigo-500',
    border: 'border-indigo-300'
  },
  lightsOn: {
    name: 'Lights On',
    year: '2023',
    video: '/videos/lightson-mv.mp4',
    color: 'from-cyan-500 to-blue-600',
    accent: 'bg-cyan-500',
    border: 'border-cyan-300'
  }
};

const eras = ['tagMe', 'zigZag', 'afterSchool', 'holidayParty', 'venPara', 'vroomVroom', 'lightsOn'];

function App() {
  const [activeView, setActiveView] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  const [selectedEra, setSelectedEra] = useState('all');
  const [currentEraData, setCurrentEraData] = useState(eraData.lightsOn);

  useEffect(() => {
    if (activeView === 'members') {
      const timer = setTimeout(() => {
        setIsMounted(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsMounted(false);
    }
  }, [activeView]);

  const handleEraChange = (era) => {
    setSelectedEra(era);
    if (era !== 'all' && eraData[era]) {
      setCurrentEraData(eraData[era]);
    }
  };

  const activeClass = isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <>
      {/* Video that changes based on era */}
      <div className="fixed inset-0 z-0">
        <Video videoSource={currentEraData.video} />
      </div>
      
      {/* NavBar with high z-index */}
      <div className="relative z-50">
        <NavBar setActiveView={setActiveView} />
      </div>

      {activeView === 'home' && (
        <div className="relative z-10">
          <Hero />
        </div>
      )}
      
      {activeView === 'members' && (
        <div className="relative z-30 min-h-screen">
          {/* Semi-transparent overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40 z-20"></div>
          
          {/* Content */}
          <div className="relative z-40 pt-24 pb-16">
            {/* Era Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {selectedEra === 'all' ? 'All Eras' : currentEraData.name}
              </h2>
              <p className="text-white text-opacity-90 text-lg drop-shadow">
                {selectedEra === 'all' ? 'Select an era to view specific concepts' : `We Ride - ${currentEraData.year}`}
              </p>
            </div>

            {/* Horizontal Tube Era Selector */}
            <div className="flex justify-center mb-16 px-4">
  <div className="bg-black bg-opacity-60 backdrop-blur-xl rounded-full shadow-2xl p-3 flex space-x-2 z-50 overflow-x-auto max-w-4xl scrollbar-hide border border-white border-opacity-20">
    {eras.map((era) => (
      <button
        key={era}
        onClick={() => handleEraChange(era)}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
          selectedEra === era
            ? `${eraData[era]?.accent || 'bg-white'} text-white shadow-lg scale-105`
            : 'text-gray-200 hover:text-white bg-white bg-opacity-10 hover:bg-opacity-20'
        }`}
      >
        {era === 'all' ? 'All Eras' : eraData[era].name}
      </button>
    ))}
  </div>
</div>

            {/* Members Grid */}
            <div className="flex flex-wrap justify-center px-4 gap-8 z-40">
              {memberData.map((member, index) => (
                <Members 
                  key={index}
                  name={member.name}
                  positions={member.positions}
                  birth={member.birth}
                  height={member.height}
                  color={member.color}
                  memberImages={member.images}
                  selectedEra={selectedEra}
                  currentEraData={currentEraData}
                  transitionClass={activeClass} 
                  delayIndex={index % 6}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;