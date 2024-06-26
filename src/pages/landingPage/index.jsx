import React from "react";
import Layout from "../../components/Layout";
import Footer from "../../Footer";
import CryptocurrencySection from "../../sections/Cryptocurrency";
import HeroSection from "../../sections/Hero";
import BuyAndTradeSection from "../../sections/BuyAndTrade";
import PartnerSection from "../../sections/Partner";
import TradingToolsSection from "../../sections/TradingTools";
import SecuritySection from "../../sections/Security";
import GetStarted from "../../sections/GetStarted";
import Faq from "../../sections/Faq";
import ContactSection from "../../sections/contactUs";
import BackToTop from "../../sections/BackToTop";


export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      {/* <CreditCardSection />/ */}
      <TradingToolsSection />
      <SecuritySection />
      <GetStarted />
      <Faq />
      <ContactSection />
      <BackToTop />

      <Footer />
    </Layout>
  );
}
