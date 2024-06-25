import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weightFilter, setWeightFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    const fetchRoomDetail = async () => {
      try {
        const roomResponse = await fetch(`/api/rooms/${id}`);
        const roomData = await roomResponse.json();

        const furnitureResponse = await fetch(`/api/rooms/${id}/furnitures`);
        const furnitureData = await furnitureResponse.json();

        setTimeout(() => {
          const roomWithFurniture = {
            ...roomData,
            furniture: furnitureData.furnitures,
          };
          setRoom(roomWithFurniture);
          setLoading(false);
        }, 2000); // Simulating loading time
      } catch (error) {
        console.error("error  ", error);
        setLoading(false);
      }
    };

    fetchRoomDetail();
  }, [id]);

  const handleWeightFilter = (event) => {
    setWeightFilter(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const filterFurniture = (furniture) => {
    if (weightFilter && furniture.weight !== parseInt(weightFilter)) {
      return false;
    }
    if (priceFilter && furniture.price !== parseInt(priceFilter)) {
      return false;
    }
    return true;
  };

  return (
    <div className="room-detail">
      {loading ? (
        <div className="loading-animation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <>
          <h2>Room Detail</h2>
          <h3 className="furniture-heading">Furnitures:</h3>
          <div className="filters">
            <label>
              Search by weihgt:
              <input
                id="weight"
                type="text"
                className="weight-filter"
                value={weightFilter}
                onChange={handleWeightFilter}
              />
            </label>
            <label>
              Search by price:
              <input
                id="price"
                type="text"
                className="price-filter"
                value={priceFilter}
                onChange={handlePriceFilter}
              />
            </label>
          </div>
          <table className="furniture-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Weight (kg)</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              {room &&
                room.furniture.filter(filterFurniture).map((furniture) => (
                  <tr key={furniture.id} className="furniture-item">
                    <td>{furniture.name}</td>
                    <td>{furniture.weight}</td>
                    <td>{furniture.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default RoomDetail;
