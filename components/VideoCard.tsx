import React, { useState } from 'react';
import { VideoData, VideoStatus } from '../types';
import { THEME_COLORS, STATUS_COLORS } from '../constants';
import { Clock, ChevronDown, ChevronUp, CheckCircle, Copy, Loader2, Circle, Maximize2 } from 'lucide-react';
import VideoDetails from './VideoDetails';

interface Props {
  video: VideoData;
  onStatusChange: (id: string, status: VideoStatus) => void;
  onChecklistToggle: (videoId: string, itemId: string) => void;
  onOpenFocus: (video: VideoData) => void;
}

const VideoCard: React.FC<Props> = ({ video, onStatusChange, onChecklistToggle, onOpenFocus }) => {
  const [expanded, setExpanded] = useState(false);

  const themeClass = THEME_COLORS[video.theme] || 'bg-gray-100 text-gray-800';

  const handleStatusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextStatus: Record<VideoStatus, VideoStatus> = {
      'TODO': 'DOING',
      'DOING': 'DONE',
      'DONE': 'TODO'
    };
    onStatusChange(video.id, nextStatus[video.status]);
  };

  const copyTitle = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(video.title);
  };

  const handleHeaderClick = () => {
    setExpanded(!expanded);
  };

  const handleFocusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenFocus(video);
  };

  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 
      transition-all duration-200 hover:shadow-md
      ${expanded ? 'ring-2 ring-blue-500/20' : ''}
    `}>
      {/* HEADER: Only this part toggles expansion now */}
      <div 
        className="p-4 cursor-pointer select-none"
        onClick={handleHeaderClick}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              {video.displayDate} • {video.dayOfWeek}
            </span>
            <span className={`px-2 py-0.5 rounded text-xs font-bold w-fit ${themeClass}`}>
              {video.theme}
            </span>
          </div>
          <button 
            onClick={handleStatusClick}
            className={`transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${STATUS_COLORS[video.status]}`}
            title={`Status: ${video.status}`}
          >
            {video.status === 'DONE' && <CheckCircle className="w-6 h-6" />}
            {video.status === 'DOING' && <Loader2 className="w-6 h-6 animate-spin" />}
            {video.status === 'TODO' && <Circle className="w-6 h-6" />}
          </button>
        </div>

        <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-3 line-clamp-2" title={video.title}>
          {video.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{video.production.publishTime}</span>
          </div>
          
          <div className="flex items-center gap-2">
             {/* Open Focus Mode Button */}
             <button 
              onClick={handleFocusClick}
              className="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-500 rounded transition-colors"
              title="Abrir em Tela Cheia (Modo Trabalho)"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            <button 
              onClick={copyTitle}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              title="Copiar Título"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            
            <button className="flex items-center gap-1 text-gray-400 font-medium hover:text-gray-600 dark:hover:text-gray-300">
               {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>

      {/* BODY: Clicking here will NO LONGER toggle the card */}
      {expanded && (
        <div 
          className="px-4 pb-4 cursor-default" 
          onClick={(e) => e.stopPropagation()}
        >
          <VideoDetails video={video} onChecklistToggle={onChecklistToggle} />
          
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-center">
             <button 
                onClick={(e) => handleFocusClick(e)}
                className="w-full py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center justify-center gap-2"
             >
                <Maximize2 className="w-4 h-4" /> Abrir Modo Trabalho
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;