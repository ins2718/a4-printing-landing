import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Order from "./components/order";
import Prices from "./components/prices";
import Services from "./components/services";
import Contacts from "./components/contacts";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <Services />
    <Prices />
    <Order />
    <Contacts />
    <Footer />
  </>;
}