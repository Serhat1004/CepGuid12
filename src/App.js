import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/HomePage";
import AboutUs from "./components/Aboutus/AboutUs";
import Excursions from "./components/Excursions/Excursions";
import BoatTourDetails from "./components/BoatTour/BoatTourDetails";
import CultureAndHistoryDetails from "./components/Culture/CultureAndHistoryDetails";
import RaftingAndJeepTourDetails from "./components/RaftingJeep/RaftingAndTourDetails";
import BeachesAndNatureDetails from "./components/BeachNature/BeachesAndNature";
import ScubaDivingDetails from "./components/ScubaDiving/ScubaDivingDetails";
import ExtremeSportsDetails from "./components/ExtremeSports/ExtremeSportsDetails";
import MountainTrekkingDetails from "./components/MountainTrekking/MountainTrekkingDetails";
import CanyoningDetails from "./components/Canyoning/CanyoningDetails";
import KaleiciTourDetails from "./components/Kaleici/KaleiciTourDetails";
import TurkishCuisineDetails from "./components/TurkishCuisine/TurkishCuisineDetails";
import HomePage from "./components/home/HomePage";
import Cerez from "./components/Cerez/Cerez";
import Privacy1 from "./components/Privacy/Privacy";
import ExcursionPage from "./components/Excursion1/ExcursionPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import SearchResults from "./components/SearchResult/SearchResult";
import PaymentChoice from "./components/PaymentChoice/PaymentChoice";
import CashPayment from "./components/CashPayment/CashPayment";
import CardPayment from "./components/CardPayment/CardPayment";
import Confirmation from "./components/Confirmation/Confirmation";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route path="/boat-tour" element={<BoatTourDetails />} />
            <Route path="/culture-history" element={<CultureAndHistoryDetails />} />
            <Route path="/rafting-jeep-tour" element={<RaftingAndJeepTourDetails />} />
            <Route path="/beaches-nature" element={<BeachesAndNatureDetails />} />
            <Route path="/scuba-diving" element={<ScubaDivingDetails />} />
            <Route path="/extreme-sports" element={<ExtremeSportsDetails />} />
            <Route path="/mountain-trekking" element={<MountainTrekkingDetails />} />
            <Route path="/canyoning" element={<CanyoningDetails />} />
            <Route path="/kaleici-tour" element={<KaleiciTourDetails />} />
            <Route path="/turkish-culinary" element={<TurkishCuisineDetails />} />  
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path ="/Excursions" element={<ExcursionPage />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cerez-politikasi" element={<Cerez />} />
            <Route path="/privacy-policy" element={<Privacy1 />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/tour/:id" element={<ItemDetail />} />
            <Route path="/payment-choice" element={<PaymentChoice />} />
            <Route path="/cash-payment" element={<CashPayment />} />
            <Route path="/card-payment" element={<CardPayment />} />
            <Route path="/confirmation" element={<Confirmation />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
