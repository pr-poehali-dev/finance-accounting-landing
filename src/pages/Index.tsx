import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Calculator" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">FinanceExpert</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-slate-600 hover:text-primary transition-colors">Команда</a>
              <a href="#advantages" className="text-slate-600 hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-slate-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Профессиональные финансовые решения</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Финансовый учёт и
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> разработка</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Предоставляем комплексные услуги бухгалтерского учёта и разработки программных решений для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 px-8">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Полный спектр услуг для эффективного ведения бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Calculator",
                title: "Бухгалтерский учёт",
                description: "Ведение полного бухгалтерского учёта, подготовка отчётности и налоговое планирование"
              },
              {
                icon: "TrendingUp",
                title: "Финансовый анализ",
                description: "Анализ финансовых показателей, бюджетирование и прогнозирование доходов"
              },
              {
                icon: "FileText",
                title: "Налоговое консультирование",
                description: "Оптимизация налоговых обязательств и консультации по налоговому законодательству"
              },
              {
                icon: "Code",
                title: "Разработка ПО",
                description: "Создание индивидуальных программных решений для автоматизации бизнес-процессов"
              },
              {
                icon: "Database",
                title: "Системы учёта",
                description: "Внедрение и настройка ERP-систем для комплексного управления предприятием"
              },
              {
                icon: "Shield",
                title: "Аудит и проверки",
                description: "Проведение внутреннего аудита и подготовка к налоговым проверкам"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наша команда</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Главный бухгалтер",
                experience: "15+ лет опыта",
                description: "Специалист по налоговому планированию и финансовой отчётности"
              },
              {
                name: "Михаил Соколов",
                role: "Ведущий разработчик",
                experience: "10+ лет опыта",
                description: "Эксперт по созданию корпоративных информационных систем"
              },
              {
                name: "Елена Волкова",
                role: "Финансовый аналитик",
                experience: "8+ лет опыта",
                description: "Специалист по финансовому анализу и бюджетированию"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <p className="text-sm text-primary font-medium mb-3">{member.experience}</p>
                  <p className="text-slate-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Почему клиенты выбирают именно нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Clock",
                title: "Оперативность",
                description: "Быстрое реагирование на запросы клиентов"
              },
              {
                icon: "Award",
                title: "Качество",
                description: "Высокие стандарты выполнения работ"
              },
              {
                icon: "Users",
                title: "Индивидуальный подход",
                description: "Решения, адаптированные под ваш бизнес"
              },
              {
                icon: "Zap",
                title: "Инновации",
                description: "Современные технологии и методы работы"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ООО \"Техносервис\"",
                review: "Отличная команда профессионалов! Помогли оптимизировать наш бухгалтерский учёт и внедрить новую систему отчётности.",
                rating: 5
              },
              {
                name: "ИП Кузнецов А.В.",
                review: "Разработали для нас индивидуальное решение для автоматизации складского учёта. Работа выполнена качественно и в срок.",
                rating: 5
              },
              {
                name: "ООО \"Строй-Альянс\"",
                review: "Сотрудничаем уже третий год. Всегда получаем квалифицированные консультации и своевременную поддержку.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{review.review}"</p>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Контакты</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Адрес офиса</h3>
                  <p className="text-slate-600">г. Москва, ул. Примерная, д. 123, офис 456</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Телефон</h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">info@financeexpert.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Время работы</h3>
                  <p className="text-slate-600">Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>Оставьте заявку, и мы свяжемся с вами в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Опишите ваши потребности..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Calculator" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold">FinanceExpert</span>
            </div>
            <p className="text-slate-400 mb-6">Профессиональные финансовые решения для вашего бизнеса</p>
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-400 text-sm">© 2024 FinanceExpert. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}