import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">MD RP</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
                  О проекте
                </Link>
                <Link to="/how-to-play" className="text-white hover:text-purple-400 transition-colors">
                  Как начать играть
                </Link>
                <Link to="/donate" className="text-white hover:text-purple-400 transition-colors">
                  Донат
                </Link>
                <Link to="/news" className="text-white hover:text-purple-400 transition-colors">
                  Новости
                </Link>
                <Link to="/forum" className="text-white hover:text-purple-400 transition-colors">
                  Форум
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-700" asChild>
              <Link to="/auth">Личный кабинет</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link to="/how-to-play">Начать играть</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block text-white hover:text-purple-400 px-3 py-2">
              О проекте
            </Link>
            <Link to="/how-to-play" className="block text-white hover:text-purple-400 px-3 py-2">
              Как начать играть
            </Link>
            <Link to="/donate" className="block text-white hover:text-purple-400 px-3 py-2">
              Донат
            </Link>
            <Link to="/news" className="block text-white hover:text-purple-400 px-3 py-2">
              Новости
            </Link>
            <Link to="/forum" className="block text-white hover:text-purple-400 px-3 py-2">
              Форум
            </Link>
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-700" asChild>
                <Link to="/auth">Личный кабинет</Link>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <Link to="/how-to-play">Начать играть</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;