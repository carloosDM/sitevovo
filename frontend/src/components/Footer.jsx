import React from 'react';
import { MessageCircle, Instagram, Mail, Wheat, Heart } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Footer = () => {
  const openWhatsApp = () => {
    window.open(contactInfo.whatsappLink, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  const openEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <footer id="contatos" className="bg-gradient-to-br from-[#403234] to-[#403234]/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Wheat className="w-6 h-6 sm:w-8 sm:h-8 text-[#FBE0C3]" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-handwritten font-bold text-[#FBE0C3]">
                Vovó Idalcy
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/80 font-body leading-relaxed">
              Pães, bolos e biscoitos artesanais feitos com amor e dedicação. O sabor da tradição em cada mordida.
            </p>
            <div className="flex items-center gap-2 text-[#FBE0C3] justify-center sm:justify-start">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse-slow" />
              <span className="text-sm sm:text-base md:text-lg font-handwritten">Feito com Amor</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-handwritten font-bold text-[#FBE0C3]">
              Entre em Contato
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={openWhatsApp}
                className="footer-link group w-full justify-center sm:justify-start"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base break-all">{contactInfo.whatsapp}</span>
              </button>
              <button
                onClick={openInstagram}
                className="footer-link group w-full justify-center sm:justify-start"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">{contactInfo.instagram}</span>
              </button>
              <button
                onClick={openEmail}
                className="footer-link group w-full justify-center sm:justify-start"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base break-all">{contactInfo.email}</span>
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-handwritten font-bold text-[#FBE0C3]">
              Faça seu Pedido
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-white/80 font-body">
              Entre em contato pelo WhatsApp e garanta suas delícias caseiras fresquinhas!
            </p>
            <button
              onClick={openWhatsApp}
              className="btn-primary bg-[#FFBB98] hover:bg-[#FBE0C3] text-[#403234] w-full sm:w-auto mx-auto sm:mx-0 text-sm sm:text-base flex items-center gap-2 px-4 py-2 rounded"
            >
              <img className="w-4 h-4 sm:w-5 sm:h-5" src="whatsapp.png" alt="WhatsApp" />
              <span>Pedir Agora</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6 sm:my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
          <p className="text-center sm:text-left font-body">
            © {new Date().getFullYear()} Delícias da Vovó Idalcy® - Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2 font-handwritten text-sm sm:text-base md:text-lg text-[#FBE0C3]">
            Feito com Amor
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFBB98] text-[#FFBB98] animate-pulse-slow" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
