
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Monitor, Gamepad2, ShieldCheck, Headphones, Settings, User, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Заголовок */}
      <div className="relative pt-20 pb-10 bg-gray-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Как начать играть на MD RP</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Простая пошаговая инструкция для новых игроков
          </p>
        </div>
      </div>
      
      {/* Системные требования */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Системные требования</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Минимальные требования */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Минимальные требования</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Операционная система: Windows 7 (64-bit)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Процессор: Intel Core i5-3470 или AMD X8 FX-8350</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Оперативная память: 8 GB</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Видеокарта: NVIDIA GTX 660 2GB или AMD HD7870 2GB</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Место на диске: 85 GB</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Интернет: от 5 Мбит/с</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Рекомендуемые требования */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Рекомендуемые требования</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Операционная система: Windows 10 (64-bit)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Процессор: Intel Core i5-8400 или AMD Ryzen 5 2600</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Оперативная память: 16 GB</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Видеокарта: NVIDIA GTX 1060 6GB или AMD RX 580 8GB</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Место на диске: 85 GB SSD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 shrink-0" size={18} />
                    <span>Интернет: от 20 Мбит/с</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-4 bg-orange-700/20 border border-orange-600/40 rounded-lg">
            <div className="flex">
              <AlertTriangle className="text-orange-500 mr-3 shrink-0 mt-1" size={20} />
              <p className="text-orange-300">
                Для комфортной игры на наших серверах рекомендуется использовать SSD-накопитель, так как это значительно 
                сокращает время загрузки и повышает стабильность игры.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Пошаговая инструкция */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пошаговая инструкция</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Линия соединения */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-600"></div>
              
              {/* Шаг 1: Регистрация */}
              <div className="relative mb-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-xl font-bold z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Регистрация аккаунта</h3>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <p className="text-gray-300 mb-4">
                        Для начала игры вам необходимо зарегистрироваться на нашем сайте. Создайте личный кабинет, 
                        который будет использоваться для доступа к игре и управления вашим аккаунтом.
                      </p>
                      <div className="mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                          alt="Регистрация аккаунта" 
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild className="bg-purple-600 hover:bg-purple-700">
                          <Link to="/register">Зарегистрироваться</Link>
                        </Button>
                        <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/20">
                          <Link to="/faq">Часто задаваемые вопросы</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Шаг 2: Скачивание игры */}
              <div className="relative mb-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-xl font-bold z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Скачивание и установка</h3>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <p className="text-gray-300 mb-4">
                        Вам потребуется официальная версия GTA 5 и наш лаунчер для подключения к серверам. 
                        Если у вас еще нет игры, вы можете приобрести ее в Steam, Epic Games Store или Rockstar Games Launcher.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gray-700 rounded-lg">
                          <h4 className="font-bold text-white mb-2 flex items-center">
                            <Download className="mr-2 text-purple-400" size={20} />
                            Шаг 2.1: Скачайте GTA 5
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Если у вас еще нет игры, приобретите и установите GTA 5 через официальные магазины
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                          <h4 className="font-bold text-white mb-2 flex items-center">
                            <Download className="mr-2 text-purple-400" size={20} />
                            Шаг 2.2: Скачайте наш лаунчер
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Скачайте и установите официальный лаунчер MD RP для подключения к серверам
                          </p>
                        </div>
                      </div>
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <Link to="/launcher">Скачать лаунчер MD RP</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Шаг 3: Создание персонажа */}
              <div className="relative mb-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-xl font-bold z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Создание персонажа</h3>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <p className="text-gray-300 mb-4">
                        После установки и запуска игры через лаунчер вам предстоит создать своего персонажа. 
                        Вы сможете настроить его внешность, выбрать стартовую одежду и придумать биографию.
                      </p>
                      <div className="mb-6">
                        <img 
                          src="https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                          alt="Создание персонажа" 
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="p-4 bg-purple-700/20 border border-purple-600/40 rounded-lg mb-4">
                        <div className="flex">
                          <User className="text-purple-400 mr-3 shrink-0 mt-1" size={20} />
                          <p className="text-purple-200">
                            Советы по созданию персонажа:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                              <li>Придумайте реалистичное имя и фамилию</li>
                              <li>Продумайте предысторию вашего персонажа</li>
                              <li>Определитесь с начальной профессией</li>
                              <li>Создайте уникальную внешность, не копируя известных личностей</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Шаг 4: Начало игры */}
              <div className="relative">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-xl font-bold z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Начало игры</h3>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <p className="text-gray-300 mb-6">
                        Поздравляем! Теперь вы готовы начать свое приключение в мире MD RP. После создания персонажа 
                        вы окажетесь в городе, где сможете пройти обучение, устроиться на работу и начать свою историю.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-700 p-3 rounded-lg text-center">
                          <Gamepad2 className="mx-auto mb-2 text-purple-400" size={28} />
                          <p className="text-sm text-gray-300">Пройдите обучение</p>
                        </div>
                        <div className="bg-gray-700 p-3 rounded-lg text-center">
                          <FileText className="mx-auto mb-2 text-purple-400" size={28} />
                          <p className="text-sm text-gray-300">Изучите правила</p>
                        </div>
                        <div className="bg-gray-700 p-3 rounded-lg text-center">
                          <Headphones className="mx-auto mb-2 text-purple-400" size={28} />
                          <p className="text-sm text-gray-300">Присоединитесь к Discord</p>
                        </div>
                      </div>
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <Link to="/rules">Ознакомиться с правилами</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Часто задаваемые вопросы */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
            Ответы на самые распространенные вопросы новых игроков
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border border-gray-700 px-6">
                <AccordionTrigger className="text-white">Нужно ли покупать GTA 5 для игры на MD RP?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, для игры на наших серверах вам необходима лицензионная копия GTA 5. Вы можете приобрести игру в Steam, 
                  Epic Games Store или Rockstar Games Launcher. Пиратские версии игры не поддерживаются нашим лаунчером.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-gray-800 rounded-lg border border-gray-700 px-6">
                <AccordionTrigger className="text-white">Как выбрать сервер для игры?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы рекомендуем новым игрокам начинать на сервере MD RP04, так как там действует расширенная 
                  система обучения. Более опытные игроки могут выбрать любой из доступных серверов в зависимости 
                  от загруженности и своих предпочтений. Информацию о текущем состоянии серверов вы можете 
                  найти в разделе "Сервера" на нашем сайте.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-gray-800 rounded-lg border border-gray-700 px-6">
                <AccordionTrigger className="text-white">Игра бесплатная или платная?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Игра на наших серверах полностью бесплатна при наличии лицензионной копии GTA 5. Однако, 
                  мы предлагаем добровольную систему доната, которая дает доступ к дополнительным возможностям и преимуществам. 
                  Важно отметить, что все основные функции игры доступны всем игрокам бесплатно.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-gray-800 rounded-lg border border-gray-700 px-6">
                <AccordionTrigger className="text-white">Что делать, если возникли технические проблемы?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  В случае возникновения технических проблем, вы можете обратиться в нашу службу поддержки через 
                  раздел "Поддержка" на сайте или в нашем Discord-сервере. Также рекомендуем ознакомиться с 
                  разделом FAQ, где собраны решения для наиболее распространенных проблем.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-gray-800 rounded-lg border border-gray-700 px-6">
                <AccordionTrigger className="text-white">Как заработать деньги в игре?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  В MD RP существует множество способов заработка. Новички могут начать с выполнения простых 
                  работ, таких как таксист, курьер или грузчик. По мере развития персонажа открываются более 
                  прибыльные профессии и возможность открыть собственный бизнес. Также в игре действует система 
                  государственных пособий для новых игроков.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/faq" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              Перейти к полному списку часто задаваемых вопросов
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Техническая поддержка */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Нужна помощь?</h2>
                  <p className="text-gray-300 mb-4">
                    Если у вас возникли вопросы или проблемы при установке игры, наша команда поддержки всегда готова помочь.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link to="/support">Связаться с поддержкой</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/20">
                      <a href="https://discord.gg/mdrp" target="_blank" rel="noopener noreferrer">
                        Присоединиться к Discord
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <Headphones className="text-purple-400" size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowToPlay;
