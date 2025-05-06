
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AtSign, Lock, User, AlertCircle } from "lucide-react";

const Auth = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Функция в разработке",
        description: "Авторизация будет доступна в ближайшее время. Следите за обновлениями.",
        variant: "destructive",
      });
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Функция в разработке",
        description: "Регистрация будет доступна в ближайшее время. Следите за обновлениями в нашем Telegram-канале.",
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
            backgroundImage: "url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Личный кабинет</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Авторизуйтесь или создайте новый аккаунт
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="mb-8 p-4 bg-orange-700/20 border border-orange-600/40 rounded-lg">
            <div className="flex">
              <AlertCircle className="text-orange-500 mr-3 shrink-0 mt-1" size={20} />
              <p className="text-orange-300 text-sm">
                <strong>Важное уведомление:</strong> В настоящее время функции авторизации и регистрации находятся в разработке и будут доступны в ближайшее время. Следите за обновлениями в нашем <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-orange-200 underline" target="_blank" rel="noopener noreferrer">Telegram-канале</a>.
              </p>
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="login" className="text-white data-[state=active]:bg-purple-600">Вход</TabsTrigger>
              <TabsTrigger value="register" className="text-white data-[state=active]:bg-purple-600">Регистрация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Вход в аккаунт</CardTitle>
                  <CardDescription className="text-gray-400">
                    Введите данные для входа в личный кабинет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email" 
                            placeholder="example@mail.com" 
                            type="email" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password" className="text-white">Пароль</Label>
                          <Link to="/reset-password" className="text-sm text-purple-400 hover:text-purple-300">
                            Забыли пароль?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="password" 
                            type="password" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Загрузка..." : "Войти"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-400">
                    Нет аккаунта? <Link to="#" onClick={() => document.querySelector('[data-state="inactive"][value="register"]')?.click()} className="text-purple-400 hover:text-purple-300">Зарегистрируйтесь</Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Создание аккаунта</CardTitle>
                  <CardDescription className="text-gray-400">
                    Заполните форму для регистрации на сервере MD RP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-white">Имя пользователя</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="username" 
                            placeholder="Ваш никнейм" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email_reg" className="text-white">Email</Label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email_reg" 
                            placeholder="example@mail.com" 
                            type="email" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password_reg" className="text-white">Пароль</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="password_reg" 
                            type="password" 
                            placeholder="Минимум 8 символов" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password_confirm" className="text-white">Подтверждение пароля</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="password_confirm" 
                            type="password" 
                            className="pl-9 border-gray-700 bg-gray-700 text-white" 
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-600" 
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                        Я соглашаюсь с <Link to="/terms" className="text-purple-400 hover:text-purple-300">условиями использования</Link> и <Link to="/privacy" className="text-purple-400 hover:text-purple-300">политикой конфиденциальности</Link>
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Загрузка..." : "Зарегистрироваться"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-400">
                    Уже есть аккаунт? <Link to="#" onClick={() => document.querySelector('[data-state="inactive"][value="login"]')?.click()} className="text-purple-400 hover:text-purple-300">Войдите</Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
