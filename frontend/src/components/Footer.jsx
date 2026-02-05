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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wheat className="w-8 h-8 text-[#FBE0C3]" />
              <h3 className="text-2xl sm:text-3xl font-handwritten font-bold text-[#FBE0C3]">
                Vovó Idalcy
              </h3>
            </div>
            <p className="text-sm sm:text-base text-white/80 font-body leading-relaxed">
              Pães, bolos e biscoitos artesanais feitos com amor e dedicação. O sabor da tradição em cada mordida.
            </p>
            <div className="flex items-center gap-2 text-[#FBE0C3]">
              <Heart className="w-5 h-5 animate-pulse-slow" />
              <span className="text-base sm:text-lg font-handwritten">Feito com Amor</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="text-xl sm:text-2xl font-handwritten font-bold text-[#FBE0C3]">
              Entre em Contato
            </h4>
            <div className="space-y-3">
              <button
                onClick={openWhatsApp}
                className="footer-link group w-full"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{contactInfo.whatsapp}</span>
              </button>
              <button
                onClick={openInstagram}
                className="footer-link group w-full"
              >
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{contactInfo.instagram}</span>
              </button>
              <button
                onClick={openEmail}
                className="footer-link group w-full"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="break-all">{contactInfo.email}</span>
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xl sm:text-2xl font-handwritten font-bold text-[#FBE0C3]">
              Faça seu Pedido
            </h4>
            <p className="text-sm sm:text-base text-white/80 font-body">
              Entre em contato pelo WhatsApp e garanta suas delícias caseiras fresquinhas!
            </p>
            <button
              onClick={openWhatsApp}
              className="btn-primary bg-[#FFBB98] hover:bg-[#FBE0C3] text-[#403234] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir Agora
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p className="text-center sm:text-left font-body">
            © {new Date().getFullYear()} Delícias da Vovó Idalcy® - Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2 font-handwritten text-base sm:text-lg text-[#FBE0C3]">
            Feito com Amor
            <Heart className="w-4 h-4 fill-[#FFBB98] text-[#FFBB98] animate-pulse-slow" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
