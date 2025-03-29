
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// const images = [
//   "https://via.placeholder.com/800x400?text=Slide+1",
//   "https://via.placeholder.com/800x400?text=Slide+2",
//   "https://via.placeholder.com/800x400?text=Slide+3",
//   "https://via.placeholder.com/800x400?text=Slide+4",
//   "https://via.placeholder.com/800x400?text=Slide+5",
// ];

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
//       <div className="text-2xl font-bold">The Second City</div>
//       <ul className="flex space-x-6">
//         <li className="cursor-pointer hover:text-yellow-400">See a Show</li>
//         <li className="cursor-pointer hover:text-yellow-400">Classes + Education</li>
//         <li className="cursor-pointer hover:text-yellow-400">Plan an Event</li>
//         <li className="cursor-pointer hover:text-yellow-400">Corporate Solutions</li>
//         <li className="cursor-pointer hover:text-yellow-400">About Us</li>
//       </ul>
//       <div className="text-yellow-400 font-semibold">1-800-896-8120</div>
//     </nav>
//   );
// };

// const ImageSlider = () => {
//   return (
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       spaceBetween={50}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       className="w-full h-96"
//     >
//       {images.map((img, index) => (
//         <SwiperSlide key={index}>
//           <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// const App = () => {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <ImageSlider />
//     </div>
//   );
// };

// export default App;
import React from "react";
//import Navbar from "./Navbar";
import './App.css'

import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import ShowList from "./components/ShowList";
import ShowCards from "./components/ShowCards";
import SearchShows from "./components/SearchShow";
import ClassSection from "./components/ClassSection";
import HistorySection from "./components/HistorySection";
import Restaurants from "./components/Restaurants";
import MerchSection from "./components/MerchSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import SubscriptionSection from "./components/SubscriptionSection";
//import EventCard from "./components/EventList";
import EventList from "./components/EventList";
const App = () => {
  return (
    <div className="app-container bg-black-500">
      <Navbar/>
     <ImageSlider/>
     <ShowList/>
     <ShowCards/>
     <EventList/>
     <SearchShows/>
     <ClassSection/>
     <HistorySection/>
     <Restaurants/>
     <MerchSection/>
     <SocialSection/>
     <Footer/>
     <SubscriptionSection/>
    </div>
  );
};

export default App;
