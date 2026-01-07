import React from 'react';
import { X, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const data = [
  { name: 'Pernas', value: 32.65, color: '#3b82f6' },
  { name: 'Glúteos', value: 28.40, color: '#8b5cf6' },
  { name: 'Abd.', value: 22.15, color: '#10b981' },
];

const AnalysisModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              Análise Completa
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Base dos últimos 365 dias</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="text-blue-500 mb-1"><Users className="w-5 h-5" /></div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">23M</div>
              <div className="text-xs text-gray-500">Visualizações</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
              <div className="text-purple-500 mb-1"><Users className="w-5 h-5" /></div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">+122k</div>
              <div className="text-xs text-gray-500">Inscritos Ganhos</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
              <div className="text-green-500 mb-1"><DollarSign className="w-5 h-5" /></div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">R$ 122k</div>
              <div className="text-xs text-gray-500">Receita Estimada</div>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800">
              <div className="text-orange-500 mb-1"><Award className="w-5 h-5" /></div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">52.98</div>
              <div className="text-xs text-gray-500">Inscritos / 10k Views</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4">Conversão por Tema (Inscritos/10k)</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Success List */}
            <div className="space-y-4">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">🏆 Seus Maiores Sucessos</h3>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/50 rounded-lg">
                        <div className="text-yellow-500 font-bold text-lg">#1</div>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">ID: tVQDe1YxihE</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">1.5M views • MAIOR VIRAL</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="text-gray-400 font-bold text-lg">#2</div>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">ID: 45BYCOv9GRs</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">1.1M views • Glúteos Campeão</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="text-gray-400 font-bold text-lg">#3</div>
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">ID: oAh1MT_z4rQ</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">1M views • Abdominais Lendário</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Strategy */}
          <div className="bg-gray-900 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Meta de Janeiro: +20.000 Inscritos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div>
                    <strong className="text-white block mb-1">🔥 Formato Secreto</strong>
                    <p>"FAÇA ISSO" no título gera 49.1% retenção média. Abuse desse gatilho nos primeiros 5 segundos.</p>
                </div>
                <div>
                    <strong className="text-white block mb-1">📅 Distribuição Estratégica</strong>
                    <ul className="list-disc list-inside">
                        <li>Glúteos (52%): Maior volume (demanda)</li>
                        <li>Pernas (24%): Maior conversão</li>
                        <li>Abd. (18%): Maior retenção</li>
                    </ul>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;