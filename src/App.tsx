import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  Gamepad2,
  MapPin,
  MessageCircle,
  Star,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Wrench
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511976175373';
const getWhatsAppLink = (message?: string) => {
  const text = message || 'Olá! Vim pelo site da Polar Celular e Games.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
const WHATSAPP_LINK = getWhatsAppLink();
const MAPS_LINK = 'https://maps.app.goo.gl/search/Polar+Celular+e+Games'; 

const reviews = [
  {
    name: 'Edcarlos Martins',
    date: 'há 4 meses',
    text: 'Atendimento diferenciado, muito respeito ao cliente, algo que não vejo em muitas lojas físicas dias de hoje.',
    rating: 5,
  },
  {
    name: 'Cristiane Buzzeti',
    date: 'há 11 meses',
    text: 'Loja muito bem organizada, ótimo atendimento e variedades. Os produtos são excelentes! Sempre faço questão de comprar com eles. Excelente localização, praticidade para estacionar.',
    rating: 5,
  },
  {
    name: 'Iraci Araujo',
    date: 'há 3 meses',
    text: 'É uma loja onde a gente entra e se sente a vontade, e o atendimento é maravilhoso.',
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-yellow-500/30 text-white">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-neutral-300 py-2 text-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>Seg a Sáb • 09:00 as 21:00</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-white">4.8</span>
              <span>(47 avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black shadow-lg shadow-yellow-500/20">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl tracking-tight text-white leading-none">
                  Polar
                </h1>
                <span className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Celular e Games</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors">Sobre</a>
              <a href="#produtos" className="text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors">Produtos</a>
              <a href="#avaliacoes" className="text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors">Avaliações</a>
              <a href="#localizacao" className="text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors">Localização</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all shadow-md hover:shadow-xl hover:shadow-yellow-500/20 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-400 hover:text-white focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-neutral-900 border-t border-neutral-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-neutral-200 hover:text-yellow-400 hover:bg-neutral-800">Sobre</a>
              <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-neutral-200 hover:text-yellow-400 hover:bg-neutral-800">Produtos</a>
              <a href="#avaliacoes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-neutral-200 hover:text-yellow-400 hover:bg-neutral-800">Avaliações</a>
              <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-neutral-200 hover:text-yellow-400 hover:bg-neutral-800">Localização</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-black bg-yellow-400 rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                (11) 97617-5373
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-neutral-950 to-neutral-950"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-[100px] opacity-20">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Revenda Autorizada Realme
              </div>
              <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6 text-balance">
                Tecnologia, Games e um Atendimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Incrível.</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-xl text-balance leading-relaxed">
                A loja mais amada de Guarulhos. Encontre as melhores marcas de celulares, grande variedade de games e acessórios com o respeito que você merece.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-black bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
                <a 
                  href="#localizacao"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-neutral-900 border-2 border-neutral-800 hover:border-neutral-700 rounded-xl transition-all hover:bg-neutral-800"
                >
                  <MapPin className="w-5 h-5 text-neutral-400" />
                  Como Chegar
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm text-neutral-500 font-medium pb-4 border-b border-neutral-800 max-w-md">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center overflow-hidden grayscale brightness-75">
                       <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Avatar" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-950 bg-yellow-400 flex items-center justify-center text-black font-bold text-xs shadow-sm">
                    47+
                  </div>
                </div>
                <span>Clientes felizes avaliaram no Google</span>
              </div>
            </motion.div>

            {/* Hero Image / Visual */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="relative lg:ml-auto w-full max-w-lg mt-8 lg:mt-0 flex flex-col gap-4"
            >
              <div className="aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-3xl bg-neutral-900 shadow-2xl relative overflow-hidden group border border-neutral-800">
                <img 
                  src="https://i.postimg.cc/1tb8C9xr/Redmi-Note-14-Foto-Profissional-Preta-e-Amarela.png" 
                  alt="Destaque Polar Celular" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 z-10 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                      <Smartphone className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-1.5 shadow-xl">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse border border-yellow-200"></div>
                      <span className="text-white text-xs font-bold tracking-wide uppercase drop-shadow-md">Loja Aberta</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-heading text-2xl font-bold mb-2 drop-shadow-lg">Tudo em um só lugar</h3>
                    <p className="text-neutral-200 text-sm leading-relaxed max-w-sm drop-shadow-md font-medium">
                      Smartphones de última geração, acessórios premium e o universo gamer na melhor localização de Guarulhos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Review card properly aligned */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-neutral-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-neutral-800 w-full z-20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex gap-1 mb-2 sm:mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">— Cristiane B.</p>
                </div>
                <p className="text-sm text-neutral-200 font-medium leading-snug sm:border-l sm:border-neutral-800 sm:pl-6 italic">"Ótimo atendimento e variedades. Os produtos são excelentes!"</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / Sobre */}
      <section id="sobre" className="py-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Por que escolher a Polar?</h2>
            <p className="text-neutral-400">Não somos apenas uma loja. Somos especialistas focados em entregar a melhor experiência, com transparência e preço justo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Atendimento Diferenciado</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Um ambiente onde você se sente à vontade. Nossos clientes elogiam o respeito e a dedicação em entender a sua necessidade.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Empresa Liderada por Mulheres</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Temos muito orgulho da nossa essência. A Polar identifica-se como uma empresa gerida e pertencente a mulheres, focada em excelência.</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Variedade e Bons Preços</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Oferecemos uma enorme gama de produtos eletrônicos e facilidade de pagamento para você levar aquilo que realmente deseja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">
                O que oferecemos
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Nosso Catálogo</h2>
            </div>
            <a 
              href={getWhatsAppLink('Olá! Vim pelo site e gostaria de consultar o estoque completo da loja.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-neutral-300 font-semibold hover:text-yellow-400 transition-colors group"
            >
              Consultar estoque completo
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Produto 1 */}
            <div className="group rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:shadow-xl hover:shadow-yellow-500/5 transition-all hover:-translate-y-1">
              <div className="h-48 bg-neutral-950 flex items-center justify-center p-6 pb-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <Smartphone className="w-32 h-32 text-neutral-800 drop-shadow-md translate-y-4 group-hover:-translate-y-2 group-hover:scale-105 group-hover:text-neutral-700 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-1">Smartphones</h3>
                <p className="text-neutral-400 text-sm mb-4">Novos e Seminovos. Destaque Especial: Revenda Realme Autorizada.</p>
                <a href={getWhatsAppLink('Olá! Vi no site da Polar e gostaria de saber mais sobre os modelos de smartphones.')} target="_blank" rel="noreferrer" className="text-yellow-400 text-sm font-semibold flex items-center gap-1 group/btn">
                  Ver modelos <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="group rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:shadow-xl hover:shadow-yellow-500/5 transition-all hover:-translate-y-1">
              <div className="h-48 bg-neutral-950 flex items-center justify-center p-6 pb-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <Gamepad2 className="w-32 h-32 text-neutral-800 drop-shadow-md translate-y-4 group-hover:-translate-y-2 group-hover:scale-105 group-hover:text-neutral-700 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-1">Universo Gamer</h3>
                <p className="text-neutral-400 text-sm mb-4">Consoles, jogos, controles e acessórios para todas as plataformas.</p>
                <a href={getWhatsAppLink('Olá! Vim pelo site e gostaria de consultar a disponibilidade de consoles e jogos.')} target="_blank" rel="noreferrer" className="text-yellow-400 text-sm font-semibold flex items-center gap-1 group/btn">
                  Ver lançamentos <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="group rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:shadow-xl hover:shadow-yellow-500/5 transition-all hover:-translate-y-1">
              <div className="h-48 bg-neutral-950 flex items-center justify-center p-6 pb-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <Smartphone className="w-24 h-24 text-neutral-800 drop-shadow-md pb-4 group-hover:-translate-y-2 group-hover:scale-105 group-hover:text-neutral-700 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-1">Acessórios</h3>
                <p className="text-neutral-400 text-sm mb-4">Capas, películas, fones de ouvido, carregadores e muito mais.</p>
                <a href={getWhatsAppLink('Olá! Vim pelo site e estou procurando um acessório específico.')} target="_blank" rel="noreferrer" className="text-yellow-400 text-sm font-semibold flex items-center gap-1 group/btn">
                  Procurar acessório <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Produto 4 */}
            <div className="group rounded-3xl bg-yellow-400 overflow-hidden hover:shadow-xl hover:shadow-yellow-500/20 transition-all hover:-translate-y-1 text-black border border-yellow-500">
              <div className="h-48 bg-yellow-500/30 flex items-center justify-center p-6 pb-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 to-transparent"></div>
                <Wrench className="w-24 h-24 text-black drop-shadow-lg pb-4 group-hover:-translate-y-2 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-black">Assistência</h3>
                <p className="text-yellow-900 text-sm mb-4">Problemas com o aparelho? Fale com a gente para encontrarmos a solução.</p>
                <a href={getWhatsAppLink('Olá! Vim pelo site e preciso de assistência técnica para o meu aparelho. Gostaria de fazer um orçamento.')} target="_blank" rel="noreferrer" className="text-black text-sm font-bold flex items-center gap-1 group/btn">
                  Fazer orçamento <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-24 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">O que dizem sobre nós</h2>
            <p className="text-neutral-400 max-w-2xl text-lg">
              Temos um orgulho imenso de manter uma nota impecável (4.8 estrelas) no Google com dezenas de avaliações.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-neutral-300 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-6 block overflow-hidden line-clamp-4">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex flex-shrink-0 items-center justify-center font-bold text-black border border-neutral-900">
                    {review.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-white text-sm truncate">{review.name}</h4>
                    <p className="text-xs text-neutral-500 truncate">Guia Local • {review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="text-yellow-400 font-semibold hover:text-yellow-300 hover:underline">
               Ver todas as avaliações no Google
             </a>
          </div>
        </div>
      </section>

      {/* Location / CTA */}
      <section id="localizacao" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 blur-[120px] opacity-10 z-0">
          <div className="w-[600px] h-[600px] rounded-full bg-yellow-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Venha nos visitar!</h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
                Excelente localização, praticidade para estacionar e uma loja pronta para te atender com conforto e segurança.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Nosso Endereço</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                      Mercado Nagumo, Av. Jurema, 1065 - Loja 11<br />
                      Parque Jurema, Guarulhos - SP, 07244-000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-neutral-400 text-sm">
                      Segunda a Sábado das 09:00 às 21:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contato</h4>
                    <p className="text-neutral-400 text-sm mb-2">
                      (11) 97617-5373
                    </p>
                    <a href={WHATSAPP_LINK} className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors">
                      Enviar mensagem no WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-2 rounded-3xl h-80 lg:h-full min-h-[400px] overflow-hidden relative group">
               {/* Map placeholder or actual embed if wanted. A static nice div with link is cleaner for performance and privacy, or an image.  */}
               <div className="absolute inset-0 bg-neutral-950/80 flex flex-col items-center justify-center z-10 transition-colors group-hover:bg-neutral-950/90 p-6 text-center">
                 <MapPin className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
                 <h3 className="text-white font-bold text-xl mb-2">Polar Celular e Games</h3>
                 <p className="text-neutral-400 text-sm mb-6 max-w-xs">Mercado Nagumo, Av. Jurema, 1065 - Loja 11, Guarulhos - SP</p>
                 <a 
                   href={MAPS_LINK}
                   target="_blank"
                   rel="noreferrer"
                   className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-500 transition-colors"
                 >
                   Abrir no Google Maps
                 </a>
               </div>
               {/* Abstract map pattern background */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-900 text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <Smartphone className="w-6 h-6 text-yellow-400" />
               <span className="font-heading font-bold text-xl text-white">Polar <span className="text-yellow-400 font-sans text-sm font-semibold ml-1">Celulares e Games</span></span>
            </div>
            <div className="text-neutral-500 text-sm">
               © {new Date().getFullYear()} Polar Celular e Games. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
