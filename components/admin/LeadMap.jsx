'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Globe, Navigation, Layers, CheckCircle2 } from 'lucide-react';

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

export default function LeadMap({ leads = [] }) {
  const [filterType, setFilterType] = useState('All');
  const [customIcon, setCustomIcon] = useState(null);

  const defaultLocations = [
    { id: 'hq', name: 'MaaJanki Web Tech HQ', lat: 27.0984, lng: 84.2625, type: 'Office', city: 'Bagaha & Patna, Bihar', count: leads.length },
    { id: 'delhi', name: 'Delhi NCR Strategic Node', lat: 28.6139, lng: 77.2090, type: 'Office', city: 'New Delhi', count: 0 },
    { id: 'bengaluru', name: 'South India Hub', lat: 12.9716, lng: 77.5946, type: 'Office', city: 'Bengaluru', count: 0 },
  ];

  const locations = defaultLocations;

  useEffect(() => {
    import('leaflet/dist/leaflet.css');
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
    : locations.filter(loc => loc.type === filterType);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <Globe style={{ width: 12, height: 12 }} /> Global Reach
            </span>
          </div>
          <h1 className="admin-page-title">Global Map & Traffic Analytics</h1>
          <p className="admin-page-desc">
            Geographic distribution of website visitors, regional SEO visibility, and client project deployments
          </p>
        </div>

        <div className="admin-page-actions">
          {['All', 'Office', 'Client', 'Lead'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`admin-btn ${filterType === type ? 'admin-btn-primary' : 'admin-btn-outline'} admin-btn-sm`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Map Card */}
      <div className="admin-card" style={{ overflow: 'hidden' }}>
        <div style={{ height: '420px', width: '100%', position: 'relative', background: 'var(--color-bg-subtle)' }}>
          {typeof window !== 'undefined' && customIcon ? (
            <MapContainer
              center={[22.5937, 78.9629]}
              zoom={4}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredLocations.map(loc => (
                <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
                  <Popup>
                    <div style={{ padding: '4px', fontFamily: 'var(--font-ui)' }}>
                      <strong style={{ fontSize: '13px', display: 'block', color: '#0f172a' }}>{loc.name}</strong>
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>{loc.city}</span>
                      <span style={{ fontSize: '11px', color: '#FD6A02', fontWeight: 'bold', display: 'block', marginTop: 4 }}>
                        {loc.type} ({loc.count} Contacts / Inquiries)
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="admin-empty-state" style={{ height: '100%' }}>
              <Globe className="admin-empty-state-icon" />
              <div className="admin-empty-state-title">Loading Global Map Tiles...</div>
            </div>
          )}
        </div>

        {/* Footer Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'var(--space-4)',
          padding: 'var(--space-4) var(--space-6)',
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)'
        }}>
          <div>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Regional Markers</span>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text)', marginTop: 2 }}>
              {locations.length} Global Hubs
            </div>
          </div>
          <div>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Headquarters</span>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', marginTop: 2 }}>
              Bagaha & Patna, Bihar
            </div>
          </div>
          <div>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>International Reach</span>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)', color: 'var(--color-info)', marginTop: 2 }}>
              USA, UK, UAE, Canada
            </div>
          </div>
          <div>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Map Server</span>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)', color: 'var(--color-success)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 style={{ width: 14, height: 14 }} /> OpenStreetMap Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
