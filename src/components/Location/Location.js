import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import Icon from '../../setup-icons';
import './Location.css'

export default function Description() {
  const [venetianLocation, setVenetianLocation] = useState("");
  const [venetianMedia, setVenetianMedia] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      setVenetianLocation(data.location);
      setVenetianMedia(data.media[1]);
      setLoading(false);
    });
  }, [loading]);

  return (
    <div className="Location-container">
      <h4 className='venetian-location'>
      <Icon icon="mark" />{venetianLocation.address}, {venetianLocation.city}, {venetianLocation.state}, {venetianLocation.postalCode}
      </h4>
      <div className='map-container'>
        <img src={venetianMedia.href} className='map-location' alt='venetian-google-maps' />
      </div>
    </div>
  );
}
