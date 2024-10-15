"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const data = {
  universities: [
    {
      id: 1,
      name: "Університет Київ",
      lat: 50.4501,
      lng: 30.5234,
      description: "Опис університету Київ",
      dormitories: [
        { name: "Гуртожиток 1", lat: 50.4511, lng: 30.5238 },
        { name: "Гуртожиток 2", lat: 50.4520, lng: 30.5241 }
      ]
    },
    {
      id: 2,
      name: "Національний університет Львівська політехніка",
      lat: 49.8397,
      lng: 24.0297,
      description: "Національний університет Львівська політехніка є одним з найстаріших і найпрестижніших технічних університетів України.",
      dormitories: [{ name: "Гуртожиток 1", lat: 49.8400, lng: 24.0300 }]
    }
  ]
};

const Map = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [showDormitories, setShowDormitories] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newUniversity, setNewUniversity] = useState({
    name: "",
    lat: "",
    lng: "",
    description: ""
  });
  const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([50.4501, 30.5234], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      const markers = L.markerClusterGroup();
      data.universities.forEach((uni) => {
        const marker = L.marker([uni.lat, uni.lng], {
          title: uni.name,
          icon: L.icon({ iconUrl: '/path/to/custom-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })
        })
          .bindPopup(`<b>${uni.name}</b><br>${uni.description}`)
          .on('click', () => {
            mapRef.current.setView([uni.lat, uni.lng], 13);
            setSelectedUniversity(uni);
          });

        markers.addLayer(marker);
      });

      mapRef.current.addLayer(markers);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker || layer instanceof L.MarkerClusterGroup) {
            mapRef.current.removeLayer(layer);
          }
        });
      }
    };
  }, []);

  const handleUniversityChange = (e) => {
    const universityName = e.target.value;
    const university = data.universities.find(
      (uni) => uni.name === universityName
    );
    setSelectedUniversity(university);
    setShowDormitories(false);

    if (university && mapRef.current) {
      mapRef.current.setView([university.lat, university.lng], 13);

      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      L.marker([university.lat, university.lng], {
        title: university.name
      })
        .addTo(mapRef.current)
        .bindPopup(`<b>${university.name}</b><br>${university.description}`)
        .openPopup();
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterUniversities = () => {
    return data.universities.filter((university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleDormitories = () => {
    setShowDormitories(!showDormitories);

    if (selectedUniversity && showDormitories && mapRef.current) {
      selectedUniversity.dormitories.forEach((dorm) => {
        L.marker([dorm.lat, dorm.lng], {
          title: dorm.name,
          icon: L.icon({ iconUrl: '/path/to/dormitory-icon.png', iconSize: [20, 20], iconAnchor: [10, 20] })
        })
          .addTo(mapRef.current)
          .bindPopup(`<b>${dorm.name}</b>`)
          .openPopup();
      });
    } else if (selectedUniversity && mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.getPopup().getContent().includes('Гуртожиток')) {
          mapRef.current.removeLayer(layer);
        }
      });
    }
  };

  const handleAddUniversity = () => {
    const { name, lat, lng, description } = newUniversity;
    if (name && lat && lng) {
      const newUni = {
        id: data.universities.length + 1,
        name,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        description
      };
      data.universities.push(newUni);
      setShowForm(false);
      setNewUniversity({ name: "", lat: "", lng: "", description: "" });

      if (mapRef.current) {
        L.marker([newUni.lat, newUni.lng], {
          title: newUni.name,
          icon: L.icon({ iconUrl: '/path/to/custom-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })
        })
          .addTo(mapRef.current)
          .bindPopup(`<b>${newUni.name}</b><br>${newUni.description}`)
          .openPopup();
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", height: "calc(100vh - 80px)", marginTop: "20px" }}>
        {/* Панель з кнопками та формою */}
        <div style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "20px", backgroundColor: "#fff", boxShadow: "2px 0 5px rgba(0,0,0,0.1)", overflowY: "auto", height: "100%", position: "relative", marginLeft: "10px", marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Пошук університетів..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
          />
          <select
            onChange={(e) => handleUniversityChange(e)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
          >
            <option value="">Оберіть університет</option>
            {filterUniversities().map((uni) => (
              <option key={uni.id} value={uni.name}>
                {uni.name}
              </option>
            ))}
          </select>
          <button
            onClick={toggleDormitories}
            style={{ marginTop: "10px", padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ddd", backgroundColor: "#007bff", color: "#fff", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: "background-color 0.3s ease", cursor: "pointer" }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            {showDormitories ? "Сховати гуртожитки" : "Показати гуртожитки"}
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{ marginTop: "10px", padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ddd", backgroundColor: "#28a745", color: "#fff", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: "background-color 0.3s ease", cursor: "pointer" }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#218838"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#28a745"}
          >
            {showForm ? "Сховати форму" : "Додати університет"}
          </button>
          {showForm && (
            <div style={{ marginTop: "20px" }}>
              <input
                type="text"
                placeholder="Назва університету"
                value={newUniversity.name}
                onChange={(e) => setNewUniversity({ ...newUniversity, name: e.target.value })}
                style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
              />
              <input
                type="number"
                placeholder="Широта"
                value={newUniversity.lat}
                onChange={(e) => setNewUniversity({ ...newUniversity, lat: e.target.value })}
                style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
              />
              <input
                type="number"
                placeholder="Довгота"
                value={newUniversity.lng}
                onChange={(e) => setNewUniversity({ ...newUniversity, lng: e.target.value })}
                style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
              />
              <textarea
                placeholder="Опис"
                value={newUniversity.description}
                onChange={(e) => setNewUniversity({ ...newUniversity, description: e.target.value })}
                style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
              />
              <button
                onClick={handleAddUniversity}
                style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ddd", backgroundColor: "#28a745", color: "#fff", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: "background-color 0.3s ease", cursor: "pointer" }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#218838"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#28a745"}
              >
                Додати університет
              </button>
            </div>
          )}
        </div>
        {/* Карта */}
        <div id="map" style={{ height: "calc(100vh - 80px)", marginLeft: "10px" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Map;
