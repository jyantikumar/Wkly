import { useState, useEffect } from 'react';
import NavBar from "./assets/NavBar";
import Members from "./assets/Members";
import Hero from "./assets/Hero";
import Video from './assets/Video';
import MV from './assets/MV';
import Discography from './assets/Discography';

// Member data with images for each era
const memberData = [
  { 
    name: 'Lee Soojin', 
    positions: ['Leader', 'Main Dancer'],
    birth: 'December 12, 2001',
    height: '164cm',
    color: 'Purple',
    images: {
      '2020-2022': '/images/soojin-2020-2022.webp', // Use representative image
      '2022-onwards': '/images/soojin-2022-onwards.webp', // Use representative image
      lightsOn: '/images/soojin-lightson.webp'
    }
  },
  { 
    name: 'Shin Jiyoon', 
    positions: ['Lead Dancer', 'Maknae'],
    birth: 'March 02, 2002',
    height: '166cm',
    color: 'Orange',
    images: {
      '2020-2022': '/images/jiyoon-2020-2022.webp',
      '2022-onwards': '/images/jiyoon-2022-onwards.webp',
      lightsOn: '/images/jiyoon-lightson.webp'
    }
  },
  { 
    name: 'Kim Jimin', 
    positions: ['Main Vocalist'],
    birth: 'May 10, 2002',
    height: '162cm',
    color: 'Blue',
    images: {
      '2020-2022': '/images/jimin-2020-2022.webp',
      '2022-onwards': '/images/jimin-2022-onwards.webp',
      lightsOn: '/images/jimin-lightson.webp'
    }
  },
  { 
    name: 'Park Soeun', 
    positions: ['Lead Vocalist'],
    birth: 'October 26, 2002',
    height: '163cm',
    color: 'Red',
    images: {
      '2020-2022': '/images/soeun-2020-2022.webp',
      '2022-onwards': '/images/soeun-2022-onwards.webp',
      lightsOn: '/images/soeun-lightson.webp'
    }
  },
  { 
    name: 'Lee Jaehee', 
    positions: ['Main Rapper'],
    birth: 'March 18, 2004',
    height: '165cm',
    color: 'Green',
    images: {
      '2020-2022': '/images/jaehee-2020-2022.webp',
      '2022-onwards': '/images/jaehee-2022-onwards.webp',
      lightsOn: '/images/jaehee-lightson.webp'
    }
  },
  { 
    name: 'Han Jihyo', 
    positions: ['Sub Vocalist', 'Visual'],
    birth: 'July 12, 2004',
    height: '161cm',
    color: 'Pink',
    images: {
      '2020-2022': '/images/jihan-2020-2022.webp',
      '2022-onwards': '/images/jihan-2022-onwards.webp',
      lightsOn: '/images/jihan-lightson.webp'
    }
  },
  { 
    name: 'Cho Hyewon', 
    positions: ['Sub Vocalist', 'Visual'],
    birth: 'May 31, 2005',
    height: '161cm',
    color: 'Pink',
    images: {
      '2020-2022': '/images/zoa-2020-2022.webp',
      '2022-onwards': '/images/zoa-2022-onwards.webp',
      lightsOn: '/images/zoa-lightson.webp'
    }
  },
];

const eraData = {
  '2020-2022': {
    name: '2020-2022 Era',
    album: 'Early Releases',
    year: '2020-2022',
    video: '/videos/2020-2022-era.mp4',
    color: 'from-purple-500 to-blue-600',
    accent: 'bg-gradient-to-r from-purple-500 to-blue-600',
    border: 'border-purple-400'
  },
  '2022-onwards': {
    name: '2022 Onwards',
    album: 'Recent Releases',
    year: '2022-Present',
    video: '/videos/2022-onwards-era.mp4',
    color: 'from-pink-500 to-rose-600',
    accent: 'bg-gradient-to-r from-pink-500 to-rose-600',
    border: 'border-pink-400'
  },
  lightsOn: {
    name: 'Lights On',
    album: 'We Fresh',
    year: '2023',
    video: '/videos/tagme-mv.mp4',
    color: 'from-yellow-400 to-orange-500',
    accent: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    border: 'border-yellow-400'
  }
};

const eras = ['2020-2022', '2022-onwards'];

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
      <div className="fixed inset-0 z-0">
        <Video videoSource={currentEraData.video} />
      </div>
      
      <div className="relative z-50">
        <NavBar setActiveView={setActiveView} />
      </div>

      {activeView === 'home' && (
        <div className="relative z-10">
          <Hero />
        </div>
      )}
      {activeView === 'mv' && (
        <div className="relative z-10">
          <MV />
        </div>
      )}
      {activeView === 'discography' && (
        <div className="relative z-10">
          <Discography />
        </div>
      )}
      
      {activeView === 'members' && (
        <div className="relative z-30 min-h-screen">
          <div className="fixed inset-0 bg-black bg-opacity-40 z-20"></div>
          
          <div className="relative z-40 pt-24 pb-16">
            <div className="text-center mb-12">
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
                        : 'text-gray-400 hover:text-white bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    {era === 'all' ? 'All Eras' : 
                     era === '2020-2022' ? '2020-2022' :
                     era === '2022-onwards' ? '2022 Onwards' :
                     eraData[era].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Members Grid */}
            <div className="flex flex-wrap justify-center px-4 gap-8 z-40">
              {memberData
                .filter(member => {
                  if ((selectedEra === '2022-onwards') && member.name === 'Shin Jiyoon') {
                    return false;
                  }
                  return true;
                })
                .map((member, index) => (
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