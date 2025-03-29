// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const shows = [
//   {
//     id: 1,
//     date: "26",
//     title: "Duel Citizens",
//     location: "Toronto Mainstage",
//     time: "8:00 PM",
//     image: "src/assets/download (2).jpg",
//   },
//   {
//     id: 2,
//     date: "28",
//     title: "Sketch and the City",
//     location: "Second City New York Mainstage",
//     time: "10:00 PM",
//     image: "src/assets/download (3).jpg",
//   },
//   {
//     id: 3,
//     date: "28",
//     title: "Sketch and the City",
//     location: "Second City New York Mainstage",
//     time: "10:00 PM",
//     image: "src/assets/download (3).jpg",
//   },
// ];

// const ShowCard = ({ show }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden  sm:w-[340px]">
//       <img src={show.image} alt={show.title} className="w-full h-60 object-cover" />
//       <div className="p-5">
//         <div className="text-gray-500 font-bold text-sm">MAR</div>
//         <div className="text-3xl font-bold">{show.date}</div>
//         <h2 className="text-lg font-semibold mt-2">{show.title}</h2>
//         <div className="flex items-center text-red-600 text-sm mt-1">
//           <FaMapMarkerAlt className="mr-1" /> {show.location}
//         </div>
//         <p className="text-gray-600 text-sm mt-1">{show.time}</p>
//         <button className="mt-4 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
//           See all showtimes
//         </button>
//       </div>
//     </div>
//   );
// };
// const ShowList = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center gap-6 p-6">
//       {shows.map((show) => (
//         <ShowCard key={show.id} show={show} />
//       ))}
//     </div>
//   );
// };
// export default ShowList;
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const shows = [
  {
    id: 1,
    date: "26",
    title: "Duel Citizens",
    location: "Toronto Mainstage",
    time: "8:00 PM",
    image: "src/assets/download (2).jpg",
  },
  {
    id: 2,
    date: "28",
    title: "Sketch and the City",
    location: "Second City New York Mainstage",
    time: "10:00 PM",
    image: "src/assets/download (3).jpg",
  },
  {
    id: 3,
    date: "29",
    title: "Comedy Night Live",
    location: "Chicago Mainstage",
    time: "7:30 PM",
    image: "src/assets/download (1).jpg",
  },
  {
    id: 4,
    date: "30",
    title: "Laugh Riot",
    location: "Los Angeles Comedy Club",
    time: "9:00 PM",
    image: "src/assets/download.jpg",
  },
  {
    id: 5,
    date: "31",
    title: "Stand-Up Special",
    location: "San Francisco Mainstage",
    time: "8:45 PM",
    image: "src/assets/download (2).jpg",
  },
  {
    id: 6,
    date: "01",
    title: "Improv Night",
    location: "Boston Theater",
    time: "9:15 PM",
    image: "src/assets/download (1).jpg",
  },
];

const ShowCard = ({ show }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px]">
      <img src={show.image} alt={show.title} className="w-full h-42 object-cover" />
      <div className="p-2">
        <div className="text-gray-500 font-bold text-xs">MAR</div>
        <div className="text-lg font-bold">{show.date}</div>
        <h2 className="text-sm font-semibold mt-1">{show.title}</h2>
        <div className="flex items-center text-red-600 text-xs mt-1">
          <FaMapMarkerAlt className="mr-1" /> {show.location}
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-600 text-xs">{show.time}</p>
          <button className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-200">
            Showtimes
          </button>
        </div>
      </div>
    </div>
  );
};

const ShowList = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center gap-4 p-5">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
