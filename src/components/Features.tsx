
import Icon from "@/components/ui/Icon";

const features = [
  {
    title: "Реалистичный игровой мир",
    description: "Погрузитесь в атмосферу настоящего города с проработанной экономикой и социальными системами.",
    icon: "Globe"
  },
  {
    title: "Разнообразие профессий",
    description: "Выберите одну из сотен доступных работ: от полицейского до бизнесмена или криминального авторитета.",
    icon: "Briefcase"
  },
  {
    title: "Собственная недвижимость",
    description: "Приобретайте дома, квартиры, бизнесы и другие объекты недвижимости в игровом мире.",
    icon: "Home"
  },
  {
    title: "Система транспорта",
    description: "Огромный выбор транспортных средств с реалистичной физикой и настройкой внешнего вида.",
    icon: "Car"
  },
  {
    title: "Фракции и организации",
    description: "Вступайте в государственные структуры или создавайте собственные организации.",
    icon: "Users"
  },
  {
    title: "Активное сообщество",
    description: "Тысячи активных игроков, регулярные мероприятия и постоянные обновления контента.",
    icon: "Heart"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Особенности проекта MD RP</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Наш проект предлагает уникальный опыт игры в GTA 5 RP с множеством эксклюзивных механик и возможностей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg border border-gray-700"
            >
              <div className="rounded-full bg-purple-600 p-3 inline-block mb-4">
                <Icon name={feature.icon} className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
