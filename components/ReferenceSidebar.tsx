import React from 'react';
import { X, ExternalLink, Star } from 'lucide-react';
import { REFERENCE_VIDEOS } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ReferenceSidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 sticky top-0">
          <h2 className="font-bold text-gray-800 dark:text-gray-100">Guia de Referências</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-5 space-y-8">
          
          {/* Reference Videos */}
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Vídeos Essenciais</h3>
            <div className="space-y-4">
              {REFERENCE_VIDEOS.map(video => (
                <div key={video.id} className="group relative bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-current" />)}
                    </div>
                    <a 
                      href={`https://studio.youtube.com/video/${video.id}/analytics`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">{video.title}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mb-2">{video.metric}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    💡 {video.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Daily Checklist */}
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Checklist Universal</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-500 text-sm mb-2">✅ Antes de Gravar</h4>
              <ul className="text-xs space-y-2 text-yellow-900 dark:text-yellow-200/80">
                <li className="flex gap-2"><span>☐</span> Assisti vídeo de referência</li>
                <li className="flex gap-2"><span>☐</span> Hook inicial (30s) estudado</li>
                <li className="flex gap-2"><span>☐</span> Câmera e luz ok</li>
                <li className="flex gap-2"><span>☐</span> Energia ALTA garantida</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100 dark:border-green-900/30 mt-3">
              <h4 className="font-bold text-green-800 dark:text-green-500 text-sm mb-2">🚀 Antes de Publicar</h4>
              <ul className="text-xs space-y-2 text-green-900 dark:text-green-200/80">
                <li className="flex gap-2"><span>☐</span> Thumbnail contrastante</li>
                <li className="flex gap-2"><span>☐</span> Título com números</li>
                <li className="flex gap-2"><span>☐</span> Descrição com timestamps</li>
                <li className="flex gap-2"><span>☐</span> Tags inseridas</li>
              </ul>
            </div>
          </section>

          {/* Quick Tips */}
          <section>
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Regras de Ouro</h3>
             <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
               <li className="flex gap-2 items-start">
                 <span className="text-lg leading-none">⚡</span>
                 <span>CTR menor que 8% em 48h? <strong>Troque a thumbnail!</strong></span>
               </li>
               <li className="flex gap-2 items-start">
                 <span className="text-lg leading-none">🎯</span>
                 <span>80% do sucesso está nos primeiros 30 segundos.</span>
               </li>
               <li className="flex gap-2 items-start">
                 <span className="text-lg leading-none">💬</span>
                 <span>Responda 20-30 comentários na primeira hora.</span>
               </li>
             </ul>
          </section>

        </div>
      </div>
    </>
  );
};

export default ReferenceSidebar;