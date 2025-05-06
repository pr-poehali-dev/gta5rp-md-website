import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">MD RP</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Один из крупнейших проектов GTA 5 RP на русском языке. Присоединяйтесь к нам и создайте свою историю!
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Проект</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-purple-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Игрокам</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-play" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Как начать играть
                </Link>
              </li>
              <li>
                <Link to="/servers" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Сервера
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Донат
                </Link>
              </li>
              <li>
                <Link to="/launcher" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Лаунчер
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Форум
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Центр поддержки
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Сообщить о нарушении
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Сотрудничество
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MD RP. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
                    Условия использования
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;