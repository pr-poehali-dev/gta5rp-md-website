
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      {/* Контент */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            MD <span className="text-purple-500">RP</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Погрузитесь в реалистичный мир GTA 5 RP на крупнейшем русскоязычном проекте. 
            Создай своего персонажа, выбери профессию и живи второй жизнью в нашем виртуальном мире.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
              <Link to="/how-to-play">Начать играть</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-500">10+</p>
                <p className="text-gray-300">Серверов</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-500">100K+</p>
                <p className="text-gray-300">Игроков</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-500">500+</p>
                <p className="text-gray-300">Уникальных работ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
