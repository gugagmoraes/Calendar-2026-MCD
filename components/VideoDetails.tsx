import React from 'react';
import { VideoData } from '../types';
import { Youtube, Copy, CheckSquare, Clock, Music, Image as ImageIcon, Tag } from 'lucide-react';

interface Props {
  video: VideoData;
  onChecklistToggle: (videoId: string, itemId: string) => void;
}

const VideoDetails: React.FC<Props> = ({ video, onChecklistToggle }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
  };

  return (
    <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4 text-sm animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Strategy & References */}
        <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4" /> ESTRUTURA
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {video.structure.length > 0 ? video.structure.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    )) : <li className="italic text-gray-400">Estrutura não definida</li>}
                </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🎯 POR QUÊ ESTE FORMATO?</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-200">
                    {video.why.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {video.references.length > 0 && (
                <div>
                    <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                        <Youtube className="w-4 h-4 text-red-500" /> VÍDEOS PARA SE INSPIRAR
                    </h4>
                    <div className="space-y-2">
                        {video.references.map((ref) => (
                            <div key={ref.id} className="p-3 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 shadow-sm">
                                <a href={ref.link} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline block truncate">
                                    {ref.title}
                                </a>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">{ref.metrics}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-2 border-yellow-400">
                                    💡 {ref.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {/* Right Column: Production & Checklist */}
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 border-b pb-2 dark:border-gray-700">
                    📝 GUIA DE PRODUÇÃO
                </h4>
                
                <div className="space-y-3">
                    <div>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                            <ImageIcon className="w-3 h-3" /> Thumbnail
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">{video.production.thumbnail || "A definir"}</p>
                    </div>
                    <div>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                            <Music className="w-3 h-3" /> Música
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">{video.production.music || "A definir"}</p>
                    </div>
                     <div>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                            <Clock className="w-3 h-3" /> Publicar às
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">{video.production.publishTime}</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
                                <Tag className="w-3 h-3" /> Tags
                            </span>
                            <button 
                                onClick={() => copyToClipboard(video.production.tags.join(', '))}
                                className="text-xs text-blue-500 hover:text-blue-700 font-medium"
                            >
                                Copiar Todas
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {video.production.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">✅ CHECKLIST</h4>
                <div className="space-y-2">
                    {video.checklist.length > 0 ? video.checklist.map(item => (
                        <label key={item.id} className="flex items-start gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-1.5 rounded transition-colors">
                            <input 
                                type="checkbox" 
                                checked={item.checked}
                                onChange={() => onChecklistToggle(video.id, item.id)}
                                className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className={`text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                                {item.text}
                            </span>
                        </label>
                    )) : <p className="text-xs text-gray-400 italic">Nenhum item de checklist.</p>}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;