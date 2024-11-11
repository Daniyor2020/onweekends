"use client";

import { hiking } from "@/assest";
import { useEffect, useState } from "react";
import Image from 'next/image'

const activities = [
  { id: 1, category: 'Outdoor', name: 'Hiking', image: hiking, description: 'A scenic hiking trail through the mountains.' },
  { id: 2, category: 'Cultural', name: 'Museum Visit', image: 'https://placehold.co/300x200?text=Museum+Exhibit', description: 'Explore the local history and art.' },
  { id: 3, category: 'Food & Drink', name: 'Wine Tasting', image: 'https://placehold.co/300x200?text=Wine+Tasting', description: 'Sample the finest local wines.' },
  { id: 4, category: 'Outdoor', name: 'Kayaking', image: 'https://placehold.co/300x200?text=Kayaking', description: 'Enjoy a day on the water with kayaking.' },
  { id: 5, category: 'Cultural', name: 'Theater Show', image: 'https://placehold.co/300x200?text=Theater+Show', description: 'Watch a live theater performance.' },
  { id: 6, category: 'Food & Drink', name: 'Cooking Class', image: 'https://placehold.co/300x200?text=Cooking+Class', description: 'Learn to cook gourmet meals.' },
  { id: 7, category: 'Outdoor', name: 'Rock Climbing', image: 'https://placehold.co/300x200?text=Rock+Climbing', description: 'Challenge yourself with rock climbing.' },
  { id: 8, category: 'Cultural', name: 'Art Gallery', image: 'https://placehold.co/300x200?text=Art+Gallery', description: 'Visit a local art gallery.' },
  { id: 9, category: 'Food & Drink', name: 'Brewery Tour', image: 'https://placehold.co/300x200?text=Brewery+Tour', description: 'Tour a local brewery and taste the beers.' },
  { id: 10, category: 'Outdoor', name: 'Cycling', image: 'https://placehold.co/300x200?text=Cycling', description: 'Cycle through scenic routes.' },
  { id: 11, category: 'Cultural', name: 'Historical Tour', image: 'https://placehold.co/300x200?text=Historical+Tour', description: 'Take a guided historical tour.' },
  { id: 12, category: 'Food & Drink', name: 'Food Festival', image: 'https://placehold.co/300x200?text=Food+Festival', description: 'Enjoy a variety of foods at a local festival.' },
  { id: 13, category: 'Outdoor', name: 'Fishing', image: 'https://placehold.co/300x200?text=Fishing', description: 'Spend a day fishing at the lake.' },
  { id: 14, category: 'Cultural', name: 'Concert', image: 'https://placehold.co/300x200?text=Concert', description: 'Attend a live music concert.' },
  { id: 15, category: 'Food & Drink', name: 'Farmers Market', image: 'https://placehold.co/300x200?text=Farmers+Market', description: 'Shop for fresh produce at the farmers market.' }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<any>('All');
  const [weather, setWeather] = useState<{ temperature: number; condition: string } | null>(null);

  useEffect(() => {
    // Fetch weather data (mocked for this example)
    setWeather({ temperature: 75, condition: 'Sunny' });
  }, []);

  const filteredActivities = selectedCategory === 'All' ? activities : activities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Activity Discovery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500">Home</a></li>
            <li><a href="#" className="text-blue-500">About</a></li>
            <li><a href="#" className="text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="my-4">
        <h2 className="text-2xl font-bold">Discover Activities</h2>
        <div className="flex space-x-4 my-4 overflow-x-auto">
          <button onClick={() => setSelectedCategory('All')} className="px-4 py-2 bg-blue-500 text-white rounded">All</button>
          <button onClick={() => setSelectedCategory('Outdoor')} className="px-4 py-2 bg-blue-500 text-white rounded">Outdoor</button>
          <button onClick={() => setSelectedCategory('Cultural')} className="px-4 py-2 bg-blue-500 text-white rounded">Cultural</button>
          <button onClick={() => setSelectedCategory('Food & Drink')} className="px-4 py-2 bg-blue-500 text-white rounded">Food & Drink</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="border p-4 rounded">
              <Image src={hiking} alt={`Image of ${activity.name}`} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-bold mt-2">{activity.name}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-4">
        <h2 className="text-2xl font-bold">Weather</h2>
        {weather ? (
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{weather.temperature}°F</div>
            <div className="text-xl">{weather.condition}</div>
          </div>
        ) : (
          <div>Loading weather...</div>
        )}
      </section>
    </div>
  );
}
