
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Phone, User, AlertCircle, Headphones, Send } from "lucide-react";

const Support = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ticketHistory] = useState([
    {
      id: "TK-1234",
      title: "Проблема с входом на сервер",
      status: "Ожидает ответа",
      created: "2023-05-10T12:30:00",
      category: "Технические проблемы"
    },
    {
      id: "TK-1235",
      title: "Вопрос по донату",
      status: "Отвечено",
      created: "2023-05-08T15:45:00",
      category: "Донат"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Функция в разработке",
        description: "Отправка обращений будет доступна в ближайшее время. Следите за обновлениями.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-20 pb-10 bg-gray-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Поддержка</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Свяжитесь с нами, если у вас возникли вопросы или проблемы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 p-4 bg-orange-700/20 border border-orange-600/40 rounded-lg">
            <div className="flex">
              <AlertCircle className="text-orange-500 mr-3 shrink-0 mt-1" size={20} />
              <p className="text-orange-300 text-sm">
                <strong>Важное уведомление:</strong> В настоящее время функция отправки обращений находится в разработке и будет доступна в ближайшее время. Следите за обновлениями в нашем <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-orange-200 underline" target="_blank" rel="noopener noreferrer">Telegram-канале</a>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Способы связи</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-purple-500 mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-400 text-sm">support@mdrp.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="text-purple-500 mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Discord</h3>
                      <p className="text-gray-400 text-sm">discord.gg/mdrp</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-purple-500 mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Телефон</h3>
                      <p className="text-gray-400 text-sm">+7 (XXX) XXX-XX-XX</p>
                      <p className="text-gray-400 text-xs">с 10:00 до 20:00, пн-пт</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Часто задаваемые вопросы</h2>
                <div className="space-y-3">
                  <Link to="/faq" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Как начать играть?
                  </Link>
                  <Link to="/faq" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Проблемы с подключением
                  </Link>
                  <Link to="/faq" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Вопросы по донату
                  </Link>
                  <Link to="/faq" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Системные требования
                  </Link>
                  <div className="pt-2">
                    <Button asChild variant="outline" className="w-full border-purple-600 text-purple-400 hover:bg-purple-600/20">
                      <Link to="/faq">Все вопросы и ответы</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Headphones className="text-purple-500 mr-2" size={24} />
                  <h2 className="text-xl font-bold text-white">Создать обращение</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Ваше имя</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="name" 
                            placeholder="Иван Иванов" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email" 
                            placeholder="example@mail.com" 
                            type="email" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Тема обращения</Label>
                      <Input 
                        id="subject" 
                        placeholder="Кратко опишите тему обращения" 
                        className="border-gray-700 bg-gray-700 text-white" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-white">Категория</Label>
                      <Select>
                        <SelectTrigger className="border-gray-700 bg-gray-700 text-white">
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="technical">Технические проблемы</SelectItem>
                          <SelectItem value="account">Проблемы с аккаунтом</SelectItem>
                          <SelectItem value="donate">Вопросы по донату</SelectItem>
                          <SelectItem value="gameplay">Игровой процесс</SelectItem>
                          <SelectItem value="report">Жалоба на игрока</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Опишите вашу проблему или вопрос как можно подробнее..." 
                        className="min-h-[150px] border-gray-700 bg-gray-700 text-white" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="file" className="text-white">Приложить файл (опционально)</Label>
                      <Input 
                        id="file" 
                        type="file" 
                        className="border-gray-700 bg-gray-700 text-white" 
                      />
                      <p className="text-xs text-gray-400">Максимальный размер файла: 5MB. Разрешенные форматы: jpg, png, pdf.</p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full mt-2 bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? "Отправка..." : "Отправить обращение"}
                      {!isLoading && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </div>

              {ticketHistory.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">История обращений</h2>
                  <div className="space-y-4">
                    {ticketHistory.map((ticket) => (
                      <Card key={ticket.id} className="bg-gray-700 border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-white font-medium">{ticket.title}</h3>
                              <p className="text-gray-400 text-sm">
                                {ticket.id} • {ticket.category} • {new Date(ticket.created).toLocaleDateString()}
                              </p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              ticket.status === "Отвечено" 
                                ? "bg-green-500/20 text-green-400" 
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {ticket.status}
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button asChild variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-600">
                              <Link to={`/support/ticket/${ticket.id}`}>Просмотреть</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
