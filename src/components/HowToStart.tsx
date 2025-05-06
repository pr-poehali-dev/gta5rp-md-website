import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, Download, User, Play } from "lucide-react";

const steps = [
  {
    title: "Регистрация",
    description: "Зарегистрируйтесь на нашем сайте и создайте личный кабинет",
    icon: <UserPlus className="text-white" size={20} />
  },
  {
    title: "Скачивание",
    description: "Установите GTA 5 и наш лаунчер для подключения к серверам",
    icon: <Download className="text-white" size={20} />
  },
  {
    title: "Создание персонажа",
    description: "Создайте уникального персонажа и придумайте ему биографию",
    icon: <User className="text-white" size={20} />
  },
  {
    title: "Начало игры",
    description: "Пройдите обучение и начните свой путь в мире MD RP",
    icon: <Play className="text-white" size={20} />
  }
];

const HowToStart = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Как начать играть?</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Всего несколько простых шагов отделяют вас от погружения в захватывающий мир MD RP
          </p>
        </div>
        
        <div className="relative">
          {/* Линия соединения */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-600 -ml-0.5"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Иконка на линии (только на десктопе) */}
                  <div className="hidden md:flex absolute left-1/2 -ml-6 w-12 h-12 rounded-full bg-purple-600 items-center justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Мобильная иконка */}
                  <div className="flex md:hidden mb-4 w-12 h-12 mx-auto rounded-full bg-purple-600 items-center justify-center">
                    {step.icon}
                  </div>
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-gray-800 rounded-lg p-6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link to="/how-to-play">Подробная инструкция</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;