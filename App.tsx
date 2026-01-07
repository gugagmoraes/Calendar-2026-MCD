import React, { useState, useEffect, useMemo } from 'react';
import { VideoData, VideoStatus, VideoTheme } from './types';
import { INITIAL_VIDEOS } from './constants';
import VideoCard from './components/VideoCard';
import CalendarView from './components/CalendarView';
import AnalysisModal from './components/AnalysisModal';
import ReferenceSidebar from './components/ReferenceSidebar';
import VideoFocusModal from './components/VideoFocusModal';
import { Search, Filter, Moon, Sun, Layout, Calendar as CalendarIcon, BookOpen, Grid, List } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [videos, setVideos] = useState<VideoData[]>(INITIAL_VIDEOS);
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState<'calendar' | 'grid'>('calendar');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTheme, setFilterTheme] = useState<VideoTheme | 'ALL'>('ALL');
  const [filterStatus, setFilterStatus] = useState<VideoStatus | 'ALL'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [focusedVideoId, setFocusedVideoId] = useState<string | null>(null);

  // Load from local storage
  useEffect(() => {
    // Versioned key to ensure users see new data structure
    const savedVideos = localStorage.getItem('content-calendar-data-v3');
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
    
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Save to local storage whenever videos change
  useEffect(() => {
    localStorage.setItem('content-calendar-data-v3', JSON.stringify(videos));
  }, [videos]);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handlers
  const handleStatusChange = (id: string, newStatus: VideoStatus) => {
    setVideos(prev => prev.map(v => v.id === id ? { ...v, status: newStatus } : v));
  };

  const handleChecklistToggle = (videoId: string, itemId: string) => {
    setVideos(prev => prev.map(v => {
      if (v.id === videoId) {
        return {
          ...v,
          checklist: v.checklist.map(item => item.id === itemId ? { ...item, checked: !item.checked } : item)
        };
      }
      return v;
    }));
  };

  const handleOpenFocus = (video: VideoData) => {
    setFocusedVideoId(video.id);
  };

  // Derived State
  const filteredVideos = useMemo(() => {
    return videos.filter(v => {
      const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTheme = filterTheme === 'ALL' || v.theme === filterTheme;
      const matchesStatus = filterStatus === 'ALL' || v.status === filterStatus;
      return matchesSearch && matchesTheme && matchesStatus;
    });
  }, [videos, searchQuery, filterTheme, filterStatus]);

  const focusedVideo = useMemo(() => {
    return videos.find(v => v.id === focusedVideoId) || null;
  }, [videos, focusedVideoId]);

  const completedCount = videos.filter(v => v.status === 'DONE').length;
  const progressPercentage = Math.round((completedCount / videos.length) * 100);

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 transition-colors shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            
            {/* Logo & Title */}
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-blue-600" />
                Calendário Jan/2026
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-8">Músculos e Corpo Definido</p>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="flex justify-between text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
                <span>Progresso Mensal</span>
                <span>{completedCount} de {videos.length} vídeos</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex items-center mr-2">
                <button 
                  onClick={() => setViewMode('calendar')}
                  className={`p-1.5 rounded-md transition-all ${viewMode === 'calendar' ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600'}`}
                  title="Visualização de Calendário"
                >
                  <CalendarIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600'}`}
                  title="Visualização em Lista"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition-colors"
              >
                <Layout className="w-4 h-4" />
                <span className="hidden sm:inline">Análise</span>
              </button>
              
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Guia</span>
              </button>

              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Filters Toolbar */}
          {viewMode === 'grid' && (
            <div className="py-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3 items-center animate-fadeIn">
              <div className="relative flex-grow max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text"
                  placeholder="Buscar vídeo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4 text-gray-400" />
                <select 
                  value={filterTheme}
                  onChange={(e) => setFilterTheme(e.target.value as any)}
                  className="bg-transparent border-none text-gray-600 dark:text-gray-300 font-medium focus:ring-0 cursor-pointer"
                >
                  <option value="ALL">Todos os Temas</option>
                  <option value="PERNAS">Pernas</option>
                  <option value="GLUTEOS">Glúteos</option>
                  <option value="ABDOMINAIS">Abdominais</option>
                  <option value="HIIT">HIIT/Combo</option>
                </select>
              </div>

              <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="bg-transparent border-none text-sm text-gray-600 dark:text-gray-300 font-medium focus:ring-0 cursor-pointer"
              >
                <option value="ALL">Todos Status</option>
                <option value="TODO">Não Iniciado</option>
                <option value="DOING">Em Produção</option>
                <option value="DONE">Publicado</option>
              </select>
            </div>
          )}
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {viewMode === 'calendar' ? (
           <CalendarView videos={videos} onOpenFocus={handleOpenFocus} />
        ) : (
          <>
            {filteredVideos.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Nenhum vídeo encontrado para os filtros selecionados.</p>
                <button 
                    onClick={() => {setFilterTheme('ALL'); setFilterStatus('ALL'); setSearchQuery('')}}
                    className="mt-4 text-blue-500 hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    onStatusChange={handleStatusChange} 
                    onChecklistToggle={handleChecklistToggle}
                    onOpenFocus={handleOpenFocus}
                  />
                ))}
              </div>
            )}
          </>
        )}

      </main>

      {/* Modals & Drawers */}
      <AnalysisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ReferenceSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Full Screen Focus Mode */}
      <VideoFocusModal 
        video={focusedVideo} 
        onClose={() => setFocusedVideoId(null)}
        onStatusChange={handleStatusChange}
        onChecklistToggle={handleChecklistToggle}
      />

    </div>
  );
};

export default App;