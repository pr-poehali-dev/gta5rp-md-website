
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Server, User, Award, History, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Заголовок */}
      <div className="relative pt-20 pb-10 bg-gray-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">О проекте MD RP</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Один из крупнейших и самых качественных проектов GTA 5 RP на русском языке
          </p>
        </div>
      </div>
      
      {/* История проекта */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">История проекта</h2>
              <p className="text-gray-300 mb-4">
                Проект MD RP был основан в 2020 году командой опытных разработчиков и энтузиастов 
                ролевых игр с целью создания наиболее реалистичного и проработанного мира RP 
                в GTA 5 для русскоязычного сообщества.
              </p>
              <p className="text-gray-300 mb-4">
                Начав с одного сервера всего на 200 слотов, мы постепенно росли и развивались, 
                добавляя новые функции, механики и возможности для игроков. Сегодня наш проект 
                насчитывает 5 полноценных серверов с общей вместимостью более 5000 игроков.
              </p>
              <p className="text-gray-300">
                Каждый день тысячи игроков выбирают MD RP для погружения в свою вторую жизнь, 
                и мы гордимся высоким качеством геймплея и сервиса, который предоставляем.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="История MD RP" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Наши принципы */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши принципы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105 border border-gray-700">
              <div className="rounded-full bg-purple-600 p-3 inline-block mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Безопасность</h3>
              <p className="text-gray-400">
                Мы обеспечиваем безопасную среду для игроков, контролируя соблюдение правил и борясь с нечестной игрой.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105 border border-gray-700">
              <div className="rounded-full bg-purple-600 p-3 inline-block mb-4">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Стабильность</h3>
              <p className="text-gray-400">
                Наши сервера работают на высокопроизводительном оборудовании, обеспечивая стабильную игру без лагов.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105 border border-gray-700">
              <div className="rounded-full bg-purple-600 p-3 inline-block mb-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Клиентоориентированность</h3>
              <p className="text-gray-400">
                Мы прислушиваемся к мнению игроков и постоянно улучшаем проект на основе получаемой обратной связи.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Статистика */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">MD RP в цифрах</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">5</div>
              <p className="text-gray-400">Серверов</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">120K+</div>
              <p className="text-gray-400">Зарегистрированных игроков</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">95%</div>
              <p className="text-gray-400">Положительных отзывов</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <p className="text-gray-400">Поддержка игроков</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Команда */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Award className="text-purple-500 mb-2" size={30} />
                  <div className="text-white font-medium">Опытные разработчики</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <History className="text-purple-500 mb-2" size={30} />
                  <div className="text-white font-medium">5+ лет в разработке</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <User className="text-purple-500 mb-2" size={30} />
                  <div className="text-white font-medium">50+ администраторов</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Globe className="text-purple-500 mb-2" size={30} />
                  <div className="text-white font-medium">Международное сообщество</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша команда</h2>
              <p className="text-gray-300 mb-4">
                За проектом MD RP стоит команда профессионалов, объединенных общей страстью к созданию 
                лучшего RP опыта. Наши разработчики, администраторы и модераторы работают каждый день, 
                чтобы обеспечить стабильную работу серверов и комфортную игру для всех участников.
              </p>
              <p className="text-gray-300 mb-6">
                Мы гордимся нашей преданной командой, которая не просто работает над проектом, но и сама 
                является активной частью сообщества игроков MD RP.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/team">Познакомиться с командой</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Присоединяйся */}
      <section className="py-12 bg-gradient-to-r from-purple-900 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Станьте частью нашего сообщества уже сегодня</h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к тысячам игроков, которые уже выбрали MD RP для своих ролевых приключений в мире GTA 5
          </p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link to="/how-to-play">Начать играть</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
