
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const Donate = () => {
  const [selectedTab, setSelectedTab] = useState("passes");
  
  const features = {
    starter: {
      included: ["Уникальная иконка в чате", "Увеличенный заработок +10%", "Мгновенный доступ при очереди до 10 человек"],
      excluded: ["VIP-транспорт", "Дополнительный слот для персонажа", "Уникальные эмоции"]
    },
    advanced: {
      included: ["Уникальная иконка в чате", "Увеличенный заработок +15%", "Мгновенный доступ при очереди до 30 человек", "VIP-транспорт (2 модели)", "Расширенный гардероб"],
      excluded: ["Дополнительный слот для персонажа", "Уникальные эмоции"]
    },
    premium: {
      included: ["Уникальная иконка в чате", "Увеличенный заработок +25%", "Приоритетный доступ к серверу", "VIP-транспорт (5 моделей)", "Расширенный гардероб", "Дополнительный слот для персонажа", "Уникальные эмоции", "Персональный тег в Discord"],
      excluded: []
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Заголовок */}
      <div className="relative pt-20 pb-10 bg-gray-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Поддержите MD RP</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Получите дополнительные возможности, поддерживая развитие проекта
          </p>
        </div>
      </div>
      
      {/* Информация о донате */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300 mb-6">
              MD RP — это бесплатный проект, который существует благодаря поддержке сообщества. 
              Каждое пожертвование помогает нам улучшать серверы, разрабатывать новые функции и обеспечивать 
              стабильную работу проекта.
            </p>
            <p className="text-gray-300">
              В качестве благодарности за вашу поддержку мы предлагаем различные привилегии, 
              которые сделают вашу игру более комфортной и интересной.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-purple-700/20 border border-purple-600/40 rounded-lg inline-flex items-start max-w-2xl">
              <AlertCircle className="text-purple-400 mr-3 shrink-0 mt-1" size={20} />
              <div>
                <p className="text-purple-300 mb-2">
                  <strong>Важная информация:</strong>
                </p>
                <p className="text-gray-300 text-sm">
                  Все привилегии носят косметический характер и не дают существенного преимущества 
                  перед другими игроками. Мы строго следим за балансом и справедливостью игрового процесса.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Табы с тарифами */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="passes" value={selectedTab} onValueChange={setSelectedTab} className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="passes" className="text-white data-[state=active]:bg-purple-600">
                  Игровые пропуски
                </TabsTrigger>
                <TabsTrigger value="currency" className="text-white data-[state=active]:bg-purple-600">
                  Игровая валюта
                </TabsTrigger>
                <TabsTrigger value="cosmetics" className="text-white data-[state=active]:bg-purple-600">
                  Косметические предметы
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Игровые пропуски */}
            <TabsContent value="passes" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter Pass */}
                <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Starter Pass</CardTitle>
                    <CardDescription className="text-gray-400">
                      Начальный набор преимуществ
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">299 ₽</span>
                      <span className="text-gray-400 ml-2">/ месяц</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Включено:</h4>
                      <ul className="space-y-2">
                        {features.starter.included.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="text-green-500 mr-2 mt-0.5 shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Не включено:</h4>
                      <ul className="space-y-2">
                        {features.starter.excluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <XCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Advanced Pass */}
                <Card className="bg-gray-800 border-gray-700 overflow-hidden relative">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2"></div>
                  <Badge className="absolute right-4 top-4 bg-purple-600 text-white">Популярный</Badge>
                  <CardHeader>
                    <CardTitle className="text-white">Advanced Pass</CardTitle>
                    <CardDescription className="text-gray-400">
                      Расширенный набор преимуществ
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">599 ₽</span>
                      <span className="text-gray-400 ml-2">/ месяц</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Включено:</h4>
                      <ul className="space-y-2">
                        {features.advanced.included.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="text-green-500 mr-2 mt-0.5 shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Не включено:</h4>
                      <ul className="space-y-2">
                        {features.advanced.excluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <XCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Premium Pass */}
                <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-2"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Premium Pass</CardTitle>
                    <CardDescription className="text-gray-400">
                      Полный набор преимуществ
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">999 ₽</span>
                      <span className="text-gray-400 ml-2">/ месяц</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Включено:</h4>
                      <ul className="space-y-2">
                        {features.premium.included.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="text-green-500 mr-2 mt-0.5 shrink-0" size={16} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-400 mb-4">
                  Приобретая игровой пропуск, вы получаете все указанные преимущества на выбранный срок.
                </p>
                <Link to="/terms" className="text-purple-400 hover:underline text-sm">
                  Ознакомиться с условиями использования
                </Link>
              </div>
            </TabsContent>
            
            {/* Игровая валюта */}
            <TabsContent value="currency" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">100,000 $</CardTitle>
                    <CardDescription className="text-gray-400">
                      Стартовый пакет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">199 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">500,000 $</CardTitle>
                    <CardDescription className="text-gray-400">
                      Средний пакет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">499 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700 relative">
                  <Badge className="absolute right-4 top-4 bg-purple-600 text-white">Выгодно</Badge>
                  <CardHeader>
                    <CardTitle className="text-white">1,000,000 $</CardTitle>
                    <CardDescription className="text-gray-400">
                      Крупный пакет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">799 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">5,000,000 $</CardTitle>
                    <CardDescription className="text-gray-400">
                      Максимальный пакет
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">2999 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Приобрести
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="p-4 bg-orange-700/20 border border-orange-600/40 rounded-lg">
                  <div className="flex">
                    <AlertCircle className="text-orange-500 mr-3 shrink-0 mt-1" size={20} />
                    <p className="text-orange-300 text-sm">
                      <strong>Важное уведомление:</strong> Приобретение игровой валюты за реальные деньги должно 
                      соответствовать правилам проекта. Игровая валюта предназначена для покупки виртуальных 
                      предметов в игре и не может быть обменена обратно на реальные деньги.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Косметические предметы */}
            <TabsContent value="cosmetics" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="mb-4 h-48 rounded-md bg-gray-700 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="VIP Автомобиль" 
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-white">VIP Автомобили</CardTitle>
                    <CardDescription className="text-gray-400">
                      Эксклюзивные модели транспорта
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Получите доступ к уникальным моделям автомобилей, которые выделят вас среди других игроков.
                    </p>
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">от 299 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Просмотреть каталог
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="mb-4 h-48 rounded-md bg-gray-700 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Уникальная одежда" 
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-white">Уникальная одежда</CardTitle>
                    <CardDescription className="text-gray-400">
                      Эксклюзивные предметы гардероба
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Расширенный гардероб с эксклюзивными предметами одежды, доступными только через донат.
                    </p>
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">от 199 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Просмотреть каталог
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="mb-4 h-48 rounded-md bg-gray-700 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Анимации и эмоции" 
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-white">Анимации и эмоции</CardTitle>
                    <CardDescription className="text-gray-400">
                      Уникальные анимации для персонажа
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Выразите себя с помощью эксклюзивных анимаций и эмоций, недоступных обычным игрокам.
                    </p>
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">от 149 ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Просмотреть каталог
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Методы оплаты */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-white mb-8">Способы оплаты</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" alt="PayPal" className="h-8" />
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Qiwi_logo.svg/1280px-Qiwi_logo.svg.png" alt="QIWI" className="h-8" />
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yandex_Wordmark.svg/1280px-Yandex_Wordmark.svg.png" alt="Yandex Money" className="h-5" />
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/WebMoney_logo.svg/1280px-WebMoney_logo.svg.png" alt="WebMoney" className="h-8" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Часто задаваемые вопросы о донате</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Что такое игровые пропуски?</h3>
                <p className="text-gray-300 text-sm">
                  Игровые пропуски — это временные привилегии, которые действуют определённый срок и дают 
                  дополнительные возможности в игре, такие как приоритетный вход на сервер, увеличенный заработок и другие преимущества.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Дают ли донат-услуги преимущество в игре?</h3>
                <p className="text-gray-300 text-sm">
                  Нет, мы строго следим за балансом игры. Все донат-услуги имеют косметический характер или 
                  дают незначительные удобства, которые не нарушают игровой баланс и не дают серьезного преимущества перед другими игроками.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Можно ли передать или продать полученные привилегии другому игроку?</h3>
                <p className="text-gray-300 text-sm">
                  Нет, все привилегии и предметы, полученные через донат, привязаны к вашему аккаунту и не могут 
                  быть переданы или проданы другим игрокам. Любые попытки передачи привилегий являются нарушением правил проекта.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Что делать, если я не получил оплаченные услуги?</h3>
                <p className="text-gray-300 text-sm">
                  Если вы не получили оплаченные услуги в течение 15 минут после оплаты, пожалуйста, свяжитесь с 
                  нашей службой поддержки через раздел "Поддержка" на сайте или в Discord. Наши специалисты помогут 
                  решить проблему в кратчайшие сроки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
