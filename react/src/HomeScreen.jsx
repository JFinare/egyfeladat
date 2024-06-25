import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms");
        const data = await response.json();

        setTimeout(() => {
          setRooms(data.rooms);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error ", error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="home-screen">
      {loading ? (
        <div className="loading-animation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <div>
          <h2 className="home-screen-title">HomeScreen</h2>
          <h3 className="rooms-heading">Rooms</h3>
          <ul className="rooms-list">
            {rooms.map((room) => (
              <li key={room.id} className="room-item">
                <Link to={`/roomdetail/${room.id}`} className="room-link">
                  {room.name}
                </Link>
                <FaArrowRight />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
