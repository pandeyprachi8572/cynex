// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import { Pagination, Autoplay } from "swiper/modules";

// // const images = [
// //   "src/assets/download (1).jpg",
// //   "src/assets/download (2).jpg",
// //   "src/assets/Homepage-Sliders-2800x1014-All-Shows.webp",
// //   "src/assets/images.jpg",
// //   "src/assets/download.jpg",
// // ];

// // const ImageSlider = () => {
// //   return (
// //     <Swiper
// //       modules={[Pagination, Autoplay]}
// //       spaceBetween={50}
// //       slidesPerView={1}
// //       pagination={{ clickable: true }}
// //       autoplay={{ delay: 3000, disableOnInteraction: false }}
// //       className="w-full h-96"
// //     >
// //       {images.map((img, index) => (
// //         <SwiperSlide key={index}>
// //           <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // };

// // export default ImageSlider;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const images = [
//   "src/assets/download (1).jpg",
//   "src/assets/download (2).jpg",
//   "src/assets/Homepage-Sliders-2800x1014-All-Shows.webp",
//   "src/assets/images.jpg",
//   "src/assets/download.jpg",
// ];

// const ImageSlider = () => {
//   return (
//     <div className="relative w-full h-[450px] flex flex-col items-center">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={50}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="w-full h-[400px]"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//       {/* Buttons Below Slider */}
//       <div className="  flex space-x-4 bg-white p-3 rounded-lg shadow-lg">
//         <button className="flex items-center bg-gray-100 text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200">
//           <FaMapMarkerAlt className="mr-2" /> All Locations
//         </button>
//         <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700">
//           View All Shows
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ImageSlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
const images = [
"src/assets/istockphoto-153750151-612x612.jpg",
"src/assets/istockphoto-179210288-612x612.jpg",
"src/assets/istockphoto-183799335-612x612.jpg",
"src/assets/istockphoto-188051642-612x612.jpg",
"src/assets/istockphoto-888806696-612x612.jpg",
"src/assets/istockphoto-1012588842-612x612.jpg",



];
const ImageSlider = () => {
  return (
    <div className="relative w-full h-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-96"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Buttons Overlay on Image */}
            <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-4">
              <button className="flex items-center bg-black/50 text-white px-6 py-2 rounded-full shadow-md hover:bg-black/70">
                <FaMapMarkerAlt className="mr-2" /> All Locations
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700">
                View All Shows
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};
export default ImageSlider;
