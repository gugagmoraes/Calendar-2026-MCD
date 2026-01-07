import React from 'react';
import { VideoData, VideoStatus } from '../types';
import { THEME_COLORS, STATUS_COLORS } from '../constants';
import { CheckCircle, Circle, Loader2, Plus } from 'lucide-react';

interface Props {
  videos: VideoData[];
  onOpenFocus: (video: VideoData) => void;
}

const CalendarView: React.FC<Props> = ({ videos, onOpenFocus }) => {
  // January 2026 starts on Thursday (index 4 in 0-6 Sun-Sat)
  // Let's render a standard month grid
  const daysInMonth = 31;
  const firstDayOfWeek = 4; // Thursday

  // Generate calendar grid array
  // We need empty slots for Sun, Mon, Tue, Wed before the 1st
  const blanks = Array(firstDayOfWeek).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalSlots = [...blanks, ...days];

  const getVideosForDay = (day: number) => {
    const dateStr = `2026-01-${day.toString().padStart(2, '0')}`;
    return videos.filter(v => v.date === dateStr);
  };

  const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn">
      {/* Header Days */}
      <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        {weekDays.map(day => (
          <div key={day} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 bg-gray-200 dark:bg-gray-700 gap-px">
        {totalSlots.map((day, index) => {
          if (!day) return <div key={`blank-${index}`} className="bg-gray-50 dark:bg-gray-800/50 min-h-[140px]" />;

          const dayVideos = getVideosForDay(day);
          const isToday = day === 7; // Specifically for the user context of "today"

          return (
            <div 
              key={`day-${day}`} 
              className={`bg-white dark:bg-gray-800 min-h-[140px] p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 relative group
                ${isToday ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`
                  text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full
                  ${isToday ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 dark:text-gray-500'}
                `}>
                  {day}
                </span>
                {dayVideos.length > 0 && (
                   <div className="flex gap-1">
                      {dayVideos.map(v => (
                         <div key={v.id} className={`w-2 h-2 rounded-full ${v.status === 'DONE' ? 'bg-green-500' : v.status === 'DOING' ? 'bg-yellow-500' : 'bg-gray-300'}`} />
                      ))}
                   </div>
                )}
              </div>

              <div className="space-y-1">
                {dayVideos.map(video => (
                  <button
                    key={video.id}
                    onClick={() => onOpenFocus(video)}
                    className={`
                      w-full text-left p-2 rounded-lg text-xs border transition-all shadow-sm hover:shadow-md
                      ${THEME_COLORS[video.theme]}
                      ${video.status === 'DONE' ? 'opacity-60 grayscale' : ''}
                    `}
                  >
                    <div className="font-bold line-clamp-2 mb-1 leading-snug">
                      {video.title}
                    </div>
                    <div className="flex items-center justify-between opacity-80">
                      <span className="font-mono text-[10px]">{video.production.publishTime}</span>
                      {video.status === 'DONE' && <CheckCircle className="w-3 h-3" />}
                      {video.status === 'DOING' && <Loader2 className="w-3 h-3 animate-spin" />}
                      {video.status === 'TODO' && <Circle className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
                
                {dayVideos.length === 0 && (
                  <div className="h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="p-2 text-gray-300 hover:text-gray-500">
                        <Plus className="w-5 h-5" />
                     </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;