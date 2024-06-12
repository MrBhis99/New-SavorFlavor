import React, { useState } from 'react';
import { FaBookmark, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'; // Import the necessary icons
import umkm1 from '../Assets/img/rian.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Detailumkm = () => {
  const [isBookmarked, setIsBookmarked] = useState(false); // State to track bookmark status

  const peta = () => {
    window.location.href = '/Maps'; // Mengarahkan pengguna ke URL "/menu"
  };

  const ulasan = () => {
    window.location.href = '/TulisUlasan'; // Mengarahkan pengguna ke URL "/menu"
  };

  const lihatulasan = () => {
    window.location.href = '/UlasanBikaAmbon';
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked); // Toggle the bookmark status
  };

  return (
    <>
      <Navbar />
      <div className="detail-umkm">
        <b className="mamank-kuliner">Mamank kuliner</b>
        <img className="img-umkm" alt="" src={umkm1} />
        <div className="rectangle-parent-umkm">
          <div className="group-child-umkm"></div>
        </div>
        <div className="bika-ambon-rian-umkm">
          <b>Bika Ambon Rian</b>
          <button className="bookmark-button" onClick={toggleBookmark} style={{ background: 'none', border: 'none' }}>
            <FaBookmark color={isBookmarked ? 'gold' : 'grey'} size={24} />
          </button>
        </div>
        <div className="rp-35000">Rp 35.000</div>
        <div className="detail-umkm-child"></div>

        <div className="lihat-ulasan-wrapper">
          <b className="lihat-ulasan" id="lihatUlasanText" onClick={lihatulasan}>Lihat ulasan</b>
        </div>

        <div className="beri-ulasan-wrapper">
          <b className="beri-ulasan" id="beriUlasanText" onClick={ulasan}>Beri ulasan</b>
        </div>
        <b className="informasi-kontak">Informasi Kontak</b>
        <div className="divkontak">085277116735</div>
        <div className="jl-sumatera-no78-umkm">
          <FaMapMarkerAlt /> Jl. Sumatera No.78, Belawan I, Medan Kota Belawan, Kota Medan, Sumatera Utara 20411
        </div>
        <div className="bika-ambon-adalah-umkm">
          <FaInfoCircle /> Bika Ambon adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.
        </div>
        <div className="divjam">
          <FaClock /> 08.00-22.00
        </div>

        <b className="lihat-di-maps-container" id="lihatDiMaps">Lihat di
          <span className="privacy-policy" onClick={peta}>Maps</span>
        </b>
      </div>
      <Footer />
    </>
  );
};

export default Detailumkm;
