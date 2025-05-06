import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Signal, Users } from "lucide-react";

const serversList = [
  { 
    id: 1, 
    name: "MD RP01", 
    players: 890, 
    maxPlayers: 1000, 
    status: "online", 
    ping: 42,
    description: "Основной сервер проекта с полным набором функций"
  },
  { 
    id: 2, 
    name: "MD RP02", 
    players: 765, 
    maxPlayers: 1000, 
    status: "online", 
    ping: 38,
    description: "Второй основной сервер проекта"
  },
  { 
    id: 3, 
    name: "MD RP03", 
    players: 930, 
    maxPlayers: 1000, 
    status: "online", 
    ping: 45,
    description: "Сервер с повышенной сложностью для опытных игроков"
  },
  { 
    id: 4, 
    name: "MD RP04", 
    players: 620, 
    maxPlayers: 1000, 
    status: "online", 
    ping: 40,
    description: "Сервер для новичков с расширенным обучением"
  },
  { 
    id: 5, 
    name: "MD RP05", 
    players: 980, 
    maxPlayers: 1000, 
    status: "online", 
    ping: 52,
    description: "Тестовый сервер с новыми механиками"
  }
];

const Servers = () => {
  const [selectedServer, setSelectedServer] = useState(serversList[0]);

  const totalOnlinePlayers = serversList.reduce((sum, server) => sum + server.players, 0);
  const totalSlots = serversList.reduce((sum, server) => sum + server.maxPlayers, 0);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Наши сервера</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Выберите один из наших игровых серверов и начните свое приключение в мире MD RP
          </p>
          <div className="bg-gray-800 inline-block rounded-lg px-6 py-3 mb-6">
            <div className="flex items-center justify-center gap-2 text-white">
              <Users size={20} className="text-purple-500" />
              <span className="font-medium">Всего игроков онлайн: </span>
              <span className="font-bold text-purple-500">{totalOnlinePlayers}/{totalSlots}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Список серверов */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-700 px-4 py-3">
                <h3 className="text-white font-medium">Выберите сервер</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {serversList.map(server => (
                  <div 
                    key={server.id}
                    onClick={() => setSelectedServer(server)}
                    className={`px-4 py-3 cursor-pointer hover:bg-gray-700 transition-colors ${
                      selectedServer.id === server.id ? 'bg-gray-700' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">{server.name}</h4>
                        <div className="flex items-center mt-1">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            server.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className="text-gray-400 text-sm">{server.status === 'online' ? 'Онлайн' : 'Офлайн'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-500 font-medium">{server.players}/{server.maxPlayers}</div>
                        <div className="text-gray-400 text-sm">{server.ping} мс</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Детали выбранного сервера */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg h-full p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedServer.name}</h3>
                  <p className="text-gray-400 mt-1">{selectedServer.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedServer.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedServer.status === 'online' ? 'Онлайн' : 'Офлайн'}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Загруженность сервера</span>
                    <span className="text-white font-medium">{selectedServer.players}/{selectedServer.maxPlayers}</span>
                  </div>
                  <Progress 
                    value={(selectedServer.players / selectedServer.maxPlayers) * 100} 
                    className="h-2 bg-gray-700"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-600/20 p-2 mr-3">
                        <Signal className="text-purple-500" size={20} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Пинг</div>
                        <div className="text-white font-medium">{selectedServer.ping} мс</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-600/20 p-2 mr-3">
                        <Users className="text-purple-500" size={20} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Очередь</div>
                        <div className="text-white font-medium">
                          {selectedServer.players >= selectedServer.maxPlayers ? Math.floor(Math.random() * 50) : 0} игроков
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-gray-400 text-sm mb-1">Фракции</div>
                    <div className="text-white font-medium">12</div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-gray-400 text-sm mb-1">Бизнесы</div>
                    <div className="text-white font-medium">145</div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-gray-400 text-sm mb-1">Дома</div>
                    <div className="text-white font-medium">870</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servers;