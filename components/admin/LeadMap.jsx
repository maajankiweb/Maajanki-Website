'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Filter, Layers, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Dynamic import for Leaflet map components to avoid SSR issue in Next.js
const MapContainer = dynamic(
  () => import('react-leaflet').then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((m) => m.Popup),
  { ssr: false }
);

// Sample locations
const locations = [
  { id: 1, name: 'Delhi NCR HQ', lat: 28.6139, lng: 77.209, type: 'Office', city: 'Delhi', count: 120 },
  { id: 2, name: 'Mumbai Tech Client Hub', lat: 19.076, lng: 72.8777, type: 'Client', city: 'Mumbai', count: 85 },
  { id: 3, name: 'Bengaluru Software Hub', lat: 12.9716, lng: 77.5946, type: 'Client', city: 'Bengaluru', count: 94 },
  { id: 4, name: 'Kolkata Regional Partner', lat: 22.5726, lng: 88.3639, type: 'Lead', city: 'Kolkata', count: 42 },
  { id: 5, name: 'Dubai Global Expansion', lat: 25.2048, lng: 55.2708, type: 'Office', city: 'Dubai', count: 65 },
  { id: 6, name: 'London UK Agency Client', lat: 51.5074, lng: -0.1278, type: 'Client', city: 'London', count: 38 },
  { id: 7, name: 'New York US Corp Client', lat: 40.7128, lng: -74.006, type: 'Lead', city: 'New York', count: 50 },
];

export default function LeadMap() {
  const [filterType, setFilterType] = useState('All');
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    // Client-side L.icon initialization
    import('leaflet').then((L) => {
      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      setCustomIcon(icon);
    });
  }, []);

  const filteredLocations = filterType === 'All'
    ? locations
    : locations.filter((loc) => loc.type === filterType);

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
      {/* Header & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-400" />
            Global Lead & Client Map Analytics
          </h3>
          <p className="text-xs text-slate-400">Geographic footprint of website traffic & leads</p>
        </div>

        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700/60 self-start sm:self-auto">
          {['All', 'Office', 'Client', 'Lead'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                filterType === type
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="h-96 w-full rounded-xl overflow-hidden border border-slate-800 relative z-10">
        {typeof window !== 'undefined' && customIcon && (
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={3}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredLocations.map((loc) => (
              <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
                <Popup>
                  <div className="text-slate-900 font-sans p-1">
                    <strong className="text-sm block">{loc.name}</strong>
                    <span className="text-xs text-slate-600 block">City: {loc.city}</span>
                    <span className="text-xs font-bold text-orange-600 block mt-1">
                      Type: {loc.type} ({loc.count} Contacts)
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

      {/* Summary Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40">
          <span className="text-slate-400 block">Top Region</span>
          <strong className="text-slate-200 text-sm">India (68%)</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40">
          <span className="text-slate-400 block">Middle East</span>
          <strong className="text-slate-200 text-sm">UAE (14%)</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40">
          <span className="text-slate-400 block">North America</span>
          <strong className="text-slate-200 text-sm">US/CA (11%)</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40">
          <span className="text-slate-400 block">Europe & Others</span>
          <strong className="text-slate-200 text-sm">Global (7%)</strong>
        </div>
      </div>
    </div>
  );
}
