import React from 'react';
import { VideoData, VideoStatus } from '../types';
import { THEME_COLORS, STATUS_COLORS } from '../constants';
import { X, Calendar, Clock, CheckCircle, Circle, Loader2, Youtube, ExternalLink, Copy, Music, Image as ImageIcon, Tag, CheckSquare, Target } from 'lucide-react';

interface Props {
  video: VideoData | null;
  onClose: () => void;
  onStatusChange: (id: string, status: VideoStatus) => void;
  onChecklistToggle: (videoId: string, itemId: string) => void;
}

const VideoFocusModal: React.FC<Props> = ({ video, onClose, onStatusChange, onChecklistToggle }) => {
  if (!video) return null;

  const themeClass = THEME_COLORS[video.theme] || 'bg-gray-100 text-gray-800';

  const handleStatusClick = () => {
    const nextStatus: Record<VideoStatus, VideoStatus> = {
      'TODO': 'DOING',
      'DOING': 'DONE',
      'DONE': 'TODO'
    };
    onStatusChange(video.id, nextStatus[video.status]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 dark:bg-gray-900 animate-fadeIn overflow-hidden">
      <div className="w-full h-full flex flex-col max-w-7xl mx-auto bg-white dark:bg-gray-900 shadow-2xl">
        
        {/* Top Bar */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                 <span className={`px-2 py-0.5 rounded text-xs font-bold ${themeClass}`}>
                  {video.theme}
                </span>
                <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {video.displayDate} • {video.dayOfWeek}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1" title={video.title}>
                {video.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button 
                onClick={handleStatusClick}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors border ${
                  video.status === 'DONE' ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400' :
                  video.status === 'DOING' ? 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400'
                }`}
              >
                {video.status === 'DONE' && <><CheckCircle className="w-5 h-5" /> PUBLICADO</>}
                {video.status === 'DOING' && <><Loader2 className="w-5 h-5 animate-spin" /> EM PRODUÇÃO</>}
                {video.status === 'TODO' && <><Circle className="w-5 h-5" /> A FAZER</>}
              </button>
          </div>
        </div>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: Context & Strategy (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Structure Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" /> Estrutura do Vídeo
                </h3>
                <ul className="space-y-3">
                  {video.structure.length > 0 ? video.structure.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold">
                        {idx + 1}
                      </span>
                      {item}
                    </li>
                  )) : <p className="text-gray-400 italic">Estrutura não definida.</p>}
                </ul>
              </div>

              {/* Why This Format */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">🎯 Estratégia</h3>
                <ul className="space-y-2">
                   {video.why.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-blue-800 dark:text-blue-200 text-sm">
                        <span>•</span> {item}
                      </li>
                   ))}
                </ul>
              </div>

              {/* References */}
              {video.references.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <Youtube className="w-5 h-5 text-red-500" /> Referências
                    </h3>
                    <div className="space-y-3">
                        {video.references.map((ref) => (
                            <div key={ref.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                                <a href={ref.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                                    {ref.title} <ExternalLink className="w-3 h-3" />
                                </a>
                                <div className="text-xs font-mono text-gray-500 mt-1 mb-2">{ref.metrics}</div>
                                <div className="text-sm text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded border-l-4 border-yellow-400">
                                    💡 {ref.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              )}
            </div>

            {/* Right Column: Execution & Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Checklist - Main Work Area */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-green-500" /> Checklist de Execução
                    </h3>
                </div>
                <div className="p-2">
                    {video.checklist.length > 0 ? video.checklist.map(item => (
                        <label key={item.id} className="flex items-start gap-4 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-all group">
                            <div className="relative flex items-center justify-center pt-1">
                                <input 
                                    type="checkbox" 
                                    checked={item.checked}
                                    onChange={() => onChecklistToggle(video.id, item.id)}
                                    className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all checked:border-green-500 checked:bg-green-500 hover:border-green-400"
                                />
                                <CheckCircle className="pointer-events-none absolute h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                            </div>
                            <span className={`text-base flex-1 pt-0.5 transition-colors ${item.checked ? 'text-gray-400 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
                                {item.text}
                            </span>
                        </label>
                    )) : (
                        <div className="p-8 text-center text-gray-400">
                            <p>Nenhum item específico. Use o checklist universal no menu lateral.</p>
                        </div>
                    )}
                </div>
              </div>

              {/* Production Metadata */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                 <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                    📝 Dados de Publicação
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                            <ImageIcon className="w-3 h-3" /> Ideia de Thumbnail
                        </label>
                        <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                            {video.production.thumbnail || "A definir"}
                        </div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                            <Music className="w-3 h-3" /> Música / Vibe
                        </label>
                         <p className="text-gray-800 dark:text-gray-200 p-2">{video.production.music || "-"}</p>
                    </div>

                    <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                            <Clock className="w-3 h-3" /> Horário
                        </label>
                         <p className="text-gray-800 dark:text-gray-200 p-2">{video.production.publishTime}</p>
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-2">
                         <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                <Tag className="w-3 h-3" /> Tags
                            </label>
                            <button 
                                onClick={() => copyToClipboard(video.production.tags.join(', '))}
                                className="text-xs flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium"
                            >
                                <Copy className="w-3 h-3" /> Copiar
                            </button>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {video.production.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
                                    #{tag}
                                </span>
                            ))}
                         </div>
                    </div>

                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFocusModal;