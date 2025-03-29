import React from "react";

const events = [
  {
    id: 1,
    day: "Thursday",
    month: "March",
    date: "27",
    title: "Second City Productions",
    subtitle: "Swipes Right: U Up?",
    description:
      "The Second City SWIPES RIGHT: U Up? is a brand-new comedy show roasting everything that turns us on (and off) about love, dating, and relationships.",
    location: "Theatre '73 - Toronto",
    tags: "Improv, Rated R, Sketch Comedy",
    time: "March 27 – 7:00 PM",
    price: "Tickets from $39-$48",
  },
  {
    id: 2,
    day: "Friday",
    month: "March",
    date: "28",
    title: "Comedy Night Live",
    subtitle: "Laugh Out Loud",
    description:
      "Join us for a night of non-stop laughter with top comedians performing live.",
    location: "Downtown Theatre - Toronto",
    tags: "Stand-up, Rated PG-13",
    time: "March 28 – 8:30 PM",
    price: "Tickets from $25-$40",
  },
  {
    id: 3,
    day: "Saturday",
    month: "March",
    date: "29",
    title: "Music Fest 2025",
    subtitle: "Rock and Roll Night",
    description:
      "Experience the best rock and roll bands from across the country in one electrifying night!",
    location: "Maple Arena - Toronto",
    tags: "Live Music, Rock",
    time: "March 29 – 6:00 PM",
    price: "Tickets from $50-$80",
  },
  {
    id: 4,
    day: "Sunday",
    month: "March",
    date: "30",
    title: "Broadway Hits",
    subtitle: "Musical Extravaganza",
    description:
      "A spectacular showcase of Broadway's most iconic musicals.",
    location: "Grand Theatre - Toronto",
    tags: "Musical, Family-Friendly",
    time: "March 30 – 5:00 PM",
    price: "Tickets from $45-$75",
  },
  {
    id: 5,
    day: "Monday",
    month: "April",
    date: "1",
    title: "The Magic Show",
    subtitle: "Illusions & Wonders",
    description:
      "Prepare to be amazed by mind-bending illusions and breathtaking magic tricks!",
    location: "Magic Hall - Toronto",
    tags: "Magic, Family-Friendly",
    time: "April 1 – 7:00 PM",
    price: "Tickets from $30-$55",
  },
  {
    id: 6,
    day: "Tuesday",
    month: "April",
    date: "2",
    title: "Drama Night",
    subtitle: "Theatrical Brilliance",
    description:
      "An evening of outstanding performances from award-winning actors.",
    location: "City Theatre - Toronto",
    tags: "Drama, Rated PG",
    time: "April 2 – 7:30 PM",
    price: "Tickets from $35-$60",
  },
  {
    id: 7,
    day: "Wednesday",
    month: "April",
    date: "3",
    title: "Jazz & Blues Night",
    subtitle: "Smooth & Soulful",
    description:
      "Get lost in the soothing sounds of the best jazz and blues musicians.",
    location: "Blue Note Lounge - Toronto",
    tags: "Jazz, Live Music",
    time: "April 3 – 8:00 PM",
    price: "Tickets from $40-$70",
  },
  {
    id: 8,
    day: "Thursday",
    month: "April",
    date: "4",
    title: "Circus Extravaganza",
    subtitle: "Thrills & Spills",
    description:
      "A jaw-dropping circus performance filled with acrobatics, comedy, and stunts.",
    location: "City Arena - Toronto",
    tags: "Circus, Family-Friendly",
    time: "April 4 – 6:00 PM",
    price: "Tickets from $20-$50",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="flex w-full max-w-5xl rounded-lg overflow-hidden shadow-lg h-50 bg-white">
      {/* Left Date Section */}
      <div className="bg-red-600 text-white p-5 flex flex-col justify-center items-center w-1/4">
        <span className="text-md font-bold uppercase">{event.day}</span>
        <span className="text-xl font-bold">{event.month}</span>
        <span className="text-6xl font-bold">{event.date}</span>
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col bg-gray-100 p-5 w-3/4">
        <h3 className="text-lg font-bold">{event.title}</h3>
        <h2 className="text-2xl font-bold">{event.subtitle}</h2>
        <p className="text-gray-700 mt-3 text-md">{event.description}</p>

        {/* Location and Tags */}
        <div className="flex items-center mt-4 text-md text-gray-600">
          <span className="mr-2">📍</span>
          <span className="text-red-600 font-bold">{event.location}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">{event.tags}</div>

        {/* Time and Button */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-md font-bold bg-white px-5 py-3 rounded-full shadow">
            {event.time}
          </div>
          <button className="bg-red-600 text-white px-5 py-3 rounded-lg font-bold shadow-lg hover:bg-red-700">
            BUY TICKETS
          </button>
        </div>
        <div className="mt-2 text-md text-gray-500">{event.price}</div>
      </div>
    </div>
  );
};

const EventList = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-5">
      {events.map((event) => (
        <div key={event.id} className="mb-6 w-full flex justify-center">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
