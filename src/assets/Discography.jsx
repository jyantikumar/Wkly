import React, { useState, useEffect } from 'react';

// Weeekly's Spotify album data (we'll use this as fallback and for demonstration)
const discographyData = [
  {
    id: '1',
    type: 'album',
    name: 'We Are',
    release_date: '2020-06-30',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d0000b273605684158f92c13ab5306f59' }
    ],
    tracks: {
      items: [
        { name: 'Weeekly Day', duration_ms: 42 },
        { name: 'Hello', duration_ms: 207000 },
        { name: 'Tag Me', duration_ms: 220000 },
        { name: 'Universe', duration_ms: 206000 },
        { name: 'Reality', duration_ms: 251000 }

      ]
    },
    total_tracks: 3,
    external_urls: { spotify: 'https://open.spotify.com/album/1sSUGCd1W4q1mJxklV2tBT' }
  },
  {
    id: '2',
    type: 'album',
    name: 'We Can',
    release_date: '2020-10-13',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d00001e02eb19be7b67fa920e5c243a74' }
    ],
    tracks: {
      items: [
        { name: 'Zig Zag', duration_ms: 204000 },
        { name: 'My Earth', duration_ms: 198000 },
        { name: 'Top Secret', duration_ms: 201000 },
        { name: 'Yummy!', duration_ms: 199000 }
      ]
    },
    total_tracks: 4,
    external_urls: { spotify: 'https://open.spotify.com/album/5oJ0EsvCf2zhs0l0RlbaMf' }
  },
  {
    id: '3',
    type: 'album',
    name: 'We Play',
    release_date: '2021-03-17',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d0000b27318a15ed7d84a6c773126b12b' }
    ],
    tracks: {
      items: [
        { name: 'After School', duration_ms: 206000 },
        { name: 'Lucky', duration_ms: 202000 },
        { name: 'Yummy! (We Play Ver.)', duration_ms: 199000 }
      ]
    },
    total_tracks: 3,
    external_urls: { spotify: 'https://open.spotify.com/album/55C3eT6Zr6r97w7Wp34l1z' }
  },
  {
    id: '4',
    type: 'single',
    name: 'Holiday Party',
    release_date: '2021-08-04',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d00001e02c412e430ac07b4bf18b424af' }
    ],
    tracks: {
      items: [
        { name: 'Holiday Party', duration_ms: 210000 },
        { name: 'Weekend', duration_ms: 195000 }
      ]
    },
    total_tracks: 2,
    external_urls: { spotify: 'https://open.spotify.com/album/4x5XG9G8MD4uYvLx9d6K7v' }
  },
  {
    id: '5',
    type: 'album',
    name: 'Play Game: Awake',
    release_date: '2022-03-07',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d00001e02bdcf5378dd8b3dbebbda51a4' }
    ],
    tracks: {
      items: [
        { name: 'Ven para', duration_ms: 193000 },
        { name: 'Solar', duration_ms: 205000 },
        { name: 'Where Is My Love?', duration_ms: 198000 }
      ]
    },
    total_tracks: 3,
    external_urls: { spotify: 'https://open.spotify.com/album/6zNP1OaGmGW7pB6LpAhKJ3' }
  },
  {
    id: '6',
    type: 'album',
    name: 'ColoRise',
    release_date: '2023-11-01',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d00001e02de5e5488907cb8b82536d894' }
    ],
    tracks: {
      items: [
        { name: 'Vroom Vroom', duration_ms: 203000 },
        { name: 'Backwards', duration_ms: 197000 },
        { name: 'A+', duration_ms: 201000 }
      ]
    },
    total_tracks: 3,
    external_urls: { spotify: 'https://open.spotify.com/album/6J5p4H7G6q7q5p5' }
  },
  {
    id: '7',
    type: 'album',
    name: 'Bliss',
    release_date: '2024-07-09',
    images: [
      { url: 'https://i.scdn.co/image/ab67616d0000b273e003da0d8ffc87de7b67810a' }
    ],
    tracks: {
      items: [
        { name: 'Vroom Vroom', duration_ms: 203000 },
        { name: 'Backwards', duration_ms: 197000 },
        { name: 'A+', duration_ms: 201000 }
      ]
    },
    total_tracks: 3,
    external_urls: { spotify: 'https://open.spotify.com/album/6J5p4H7G6q7q5p5' }
  }

];

function Discography() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [filter, setFilter] = useState('all'); // 'all', 'album', 'single'

  useEffect(() => {

    const fetchDiscography = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // If you had Spotify API access, you would use:
        // const response = await fetch('https://api.spotify.com/v1/artists/{WEEKY_SPOTIFY_ID}/albums', {
        //   headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
        // });
        // const data = await response.json();

        setAlbums(discographyData);
      } catch (error) {
        console.error('Error fetching discography:', error);
        setAlbums(discographyData); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchDiscography();
  }, []);

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatReleaseDate = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  const filteredAlbums = albums.filter(album => {
    if (filter === 'all') return true;
    return album.type === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c4afd0] via-[#97e0cf] to-[#ffd076]"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">

            <p className="text-gray-300 text-lg">Loading Weeekly's music...</p>
          </div>

          {/* UPDATED: Loading Skeleton to 5 columns on XL screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white bg-opacity-10 rounded-2xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c4afd0] via-[#97e0cf] to-[#ffd076]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
              <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
            </div>
            <span className="text-white font-semibold text-sm uppercase tracking-widest bg-black bg-opacity-50 px-4 py-2 rounded-full border border-white border-opacity-20">
              Official Discography
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#97e0cf]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffd076]"></div>
              <div className="w-3 h-3 rounded-full bg-[#c4afd0]"></div>
            </div>
          </div>


          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore Weeekly's complete collection of albums and singles
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2 bg-black bg-opacity-50 rounded-full p-2 border border-white border-opacity-20">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All Releases
            </button>
            <button
              onClick={() => setFilter('album')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'album'
                  ? 'bg-gradient-to-r from-[#97e0cf] to-[#ffd076] text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Albums
            </button>
            <button
              onClick={() => setFilter('single')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'single'
                  ? 'bg-gradient-to-r from-[#ffd076] to-[#c4afd0] text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Singles
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView('grid')}
              className={`p-3 rounded-xl transition-all ${
                view === 'grid'
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-3 rounded-xl transition-all ${
                view === 'list'
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Album Grid/List */}
        {view === 'grid' ? (
          // UPDATED: Main Grid to 5 columns on XL screens
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group border-2 border-white border-opacity-20"
                onClick={() => setSelectedAlbum(album)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={album.images[0]?.url}
                    alt={album.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                    {album.type === 'album' ? 'ALBUM' : 'SINGLE'}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] text-white text-sm font-bold px-3 py-1 rounded-full">
                    {formatReleaseDate(album.release_date)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#c4afd0] group-hover:to-[#ffd076] group-hover:bg-clip-text transition-all">
                    {album.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {album.total_tracks} track{album.total_tracks > 1 ? 's' : ''}
                  </p>

                  <div className="space-y-2">
                    {album.tracks.items.slice(0, 3).map((track, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 truncate">{track.name}</span>
                        <span className="text-gray-500 text-xs">{formatDuration(track.duration_ms)}</span>
                      </div>
                    ))}
                    {album.tracks.items.length > 3 && (
                      <div className="text-center text-gray-500 text-sm">
                        +{album.tracks.items.length - 3} more tracks
                      </div>
                    )}
                  </div>

                  <a
                    href={album.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 py-3 bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] hover:from-[#ffd076] hover:to-[#c4afd0] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Listen on Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            {filteredAlbums.map((album, index) => (
              <div
                key={album.id}
                className={`flex items-center p-6 cursor-pointer transition-all duration-300 hover:bg-white group ${
                  index !== filteredAlbums.length - 1 ? 'border-b border-gray-200' : ''
                }`}
                onClick={() => setSelectedAlbum(album)}
              >
                <img
                  src={album.images[0]?.url}
                  alt={album.name}
                  className="w-20 h-20 rounded-xl object-cover mr-6 group-hover:scale-110 transition-transform duration-300"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#c4afd0] group-hover:to-[#ffd076] group-hover:bg-clip-text">
                    {album.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] text-white px-2 py-1 rounded-full text-xs font-medium">
                      {album.type.toUpperCase()}
                    </span>
                    <span>{formatReleaseDate(album.release_date)}</span>
                    <span>{album.total_tracks} tracks</span>
                  </div>
                </div>

                <a
                  href={album.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] text-white rounded-xl hover:from-[#ffd076] hover:to-[#c4afd0] transition-all duration-300 transform hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Album Detail Modal */}
        {selectedAlbum && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedAlbum.images[0]?.url}
                  alt={selectedAlbum.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedAlbum.name}</h2>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span className="bg-gradient-to-r from-[#c4afd0] to-[#97e0cf] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedAlbum.type.toUpperCase()}
                  </span>
                  <span>Released {formatReleaseDate(selectedAlbum.release_date)}</span>
                  <span>{selectedAlbum.total_tracks} tracks</span>
                </div>

                <div className="space-y-3 mb-6">
                  {selectedAlbum.tracks.items.map((track, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm w-6">{index + 1}</span>
                        <span className="font-medium text-gray-800">{track.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{formatDuration(track.duration_ms)}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={selectedAlbum.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-[#c4afd0] via-[#97e0cf] to-[#ffd076] hover:from-[#ffd076] hover:via-[#c4afd0] hover:to-[#97e0cf] text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Discography;