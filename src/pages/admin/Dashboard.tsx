
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  User, 
  MessageSquare, 
  Settings, 
  Users, 
  LogOut, 
  PanelRight, 
  ChevronDown, 
  Bell, 
  Search,
  Menu,
  X
} from "lucide-react";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: "Новое обращение", time: "10 минут назад" },
    { id: 2, title: "Новый пользователь", time: "1 час назад" }
  ]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showWIPToast = () => {
    toast({
      title: "Функция в разработке",
      description: "Эта функция будет доступна в ближайшее время.",
      variant: "destructive",
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Верхняя навигационная панель */}
      <div className="bg-gray-800 border-b border-gray-700 py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="md:hidden text-gray-300 mr-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/admin" className="text-xl font-bold text-white flex items-center">
            <span className="text-purple-500">MD</span>
            <span className="ml-1">RP Админ-панель</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Поиск */}
          <div className="hidden md:flex relative">
            <input 
              type="text" 
              placeholder="Поиск..." 
              className="bg-gray-700 border border-gray-600 rounded-md py-1 px-3 pl-8 text-sm text-white w-40 lg:w-64"
            />
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400" />
          </div>
          
          {/* Уведомления */}
          <div className="relative">
            <button className="text-gray-300 relative" onClick={showWIPToast}>
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
          </div>
          
          {/* Аватар пользователя */}
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-purple-700">AD</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-sm font-medium hidden md:inline-block">Администратор</span>
            <ChevronDown className="h-4 w-4 text-gray-400 ml-1 hidden md:inline-block" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Боковая панель навигации */}
        <aside className={`bg-gray-800 border-r border-gray-700 w-64 flex-shrink-0 md:block transition-all duration-300 ${isMenuOpen ? 'block absolute z-20 h-full' : 'hidden'}`}>
          <div className="p-4">
            <nav className="space-y-6">
              <div>
                <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Общее</h3>
                <ul className="space-y-1">
                  <li>
                    <NavLink 
                      to="/admin" 
                      end
                      className={({isActive}) => 
                        `flex items-center px-2 py-2 text-sm rounded-md ${
                          isActive 
                            ? 'bg-purple-700 text-white' 
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                      }
                    >
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Панель управления
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/admin/users" 
                      className={({isActive}) => 
                        `flex items-center px-2 py-2 text-sm rounded-md ${
                          isActive 
                            ? 'bg-purple-700 text-white' 
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                      }
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Пользователи
                    </NavLink>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Поддержка</h3>
                <ul className="space-y-1">
                  <li>
                    <NavLink 
                      to="/admin/tickets" 
                      className={({isActive}) => 
                        `flex items-center px-2 py-2 text-sm rounded-md ${
                          isActive 
                            ? 'bg-purple-700 text-white' 
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                      }
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Обращения
                      <span className="ml-auto bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                        5
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">Администрирование</h3>
                <ul className="space-y-1">
                  <li>
                    <NavLink 
                      to="/admin/profile" 
                      className={({isActive}) => 
                        `flex items-center px-2 py-2 text-sm rounded-md ${
                          isActive 
                            ? 'bg-purple-700 text-white' 
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                      }
                    >
                      <User className="mr-2 h-4 w-4" />
                      Профиль
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/admin/settings" 
                      className={({isActive}) => 
                        `flex items-center px-2 py-2 text-sm rounded-md ${
                          isActive 
                            ? 'bg-purple-700 text-white' 
                            : 'text-gray-300 hover:bg-gray-700'
                        }`
                      }
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Настройки
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          
          <div className="border-t border-gray-700 p-4">
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-400 border-gray-700 hover:bg-gray-700 hover:text-red-300"
              onClick={showWIPToast}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Выйти
            </Button>
          </div>
        </aside>
        
        {/* Основной контент */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-900">
          {/* Здесь будет отображаться содержимое на основе текущего маршрута */}
          <div className="max-w-7xl mx-auto">
            <Outlet />
            
            {/* Если нет вложенного контента, показываем содержимое дашборда по умолчанию */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Всего пользователей</p>
                    <h3 className="text-2xl font-bold text-white mt-1">12,345</h3>
                  </div>
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-green-400 flex items-center">
                    <span className="text-xs">▲</span> 8.2% с прошлого месяца
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Активные обращения</p>
                    <h3 className="text-2xl font-bold text-white mt-1">58</h3>
                  </div>
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-red-400 flex items-center">
                    <span className="text-xs">▼</span> 2.5% с прошлого месяца
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Новых регистраций</p>
                    <h3 className="text-2xl font-bold text-white mt-1">256</h3>
                  </div>
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <User className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-green-400 flex items-center">
                    <span className="text-xs">▲</span> 12.4% с прошлого месяца
                  </p>
                </div>
              </div>
            </div>
            
            {/* Таблица последних обращений */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-lg font-bold text-white">Последние обращения</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Пользователь</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Тема</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Категория</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Статус</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Дата</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Действия</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">#1234</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-blue-700">JD</AvatarFallback>
                          </Avatar>
                          <span className="ml-2 text-sm text-white">Иван Петров</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Проблема с входом на сервер</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                          Технические проблемы
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-600/20 text-yellow-400">
                          Ожидает ответа
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2023-05-10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={showWIPToast}
                        >
                          Просмотреть
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">#1233</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-green-700">MS</AvatarFallback>
                          </Avatar>
                          <span className="ml-2 text-sm text-white">Мария Сидорова</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Вопрос по донату</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-600/20 text-purple-400">
                          Донат
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-600/20 text-green-400">
                          Отвечено
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2023-05-09</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={showWIPToast}
                        >
                          Просмотреть
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">#1232</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-red-700">AK</AvatarFallback>
                          </Avatar>
                          <span className="ml-2 text-sm text-white">Алексей Козлов</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Жалоба на игрока</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-600/20 text-red-400">
                          Жалобы
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                          В обработке
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2023-05-08</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={showWIPToast}
                        >
                          Просмотреть
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-700 flex justify-center">
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={showWIPToast}
                >
                  Показать все обращения
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        {/* Кнопка для показа/скрытия панели информации */}
        <button 
          className="hidden absolute right-4 bottom-4 bg-purple-600 p-2 rounded-full hover:bg-purple-700 md:flex"
          onClick={showWIPToast}
        >
          <PanelRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
