import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Wajib diimport agar peta tidak teracak

// Fix bug icon marker default di React Leaflet (opsional tetapi disarankan)
import L, { type LatLngTuple } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface longLat {
  lat: number;
  lng: number;
}

function Mapping({ ID }: { ID: string }) {
  const [LongLat, setLongLat] = useState<LatLngTuple | null>(null);

  if (ID) {
    useEffect(() => {
      fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/v2/villages/${ID}.json`,
      )
        .then((res) => res.json())
        .then((data) => {
          const dataset: longLat = data.data;

          setLongLat([dataset.lat, dataset.lng]);
        });
    }, [ID]);
  }

  function ChangeView({ center }: { center: LatLngTuple }) {
    const map = useMap();

    useEffect(() => {
      // Validasi koordinat agar tidak undefined/null
      if (!center || center[0] === undefined || center[1] === undefined) return;

      // Jalankan perintah hanya setelah peta benar-benar siap/terinisialisasi
      map.whenReady(() => {
        map.invalidateSize();
        map.flyTo(center, 13, {
          animate: true,
          duration: 1.5,
        });
      });
    }, [center, map]);

    return null;
  }

  if (LongLat) {
    console.log(LongLat);
  }

  if (LongLat) {
    return (
      <MapContainer
        center={LongLat}
        zoom={2}
        style={{ height: "600px", width: "50%", borderRadius: "16px "}}
        // Matikan semua fungsi interaksi:
        dragging={true}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        touchZoom={false}
        keyboard={false}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView center={LongLat} />
        <Marker position={LongLat} />
      </MapContainer>
    );
  }
}

export default Mapping;
