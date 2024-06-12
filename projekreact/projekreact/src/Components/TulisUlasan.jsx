import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import bintang from '../Assets/img/bintang.png';
import Vector from '../Assets/img/Vector.png';

const TulisUlasan = () => {
  const navigate = useNavigate();

  const handleVectorClick = () => {
    navigate('/Detailumkm');
  };

  const handleSimpanUlasanClick = () => {
    navigate('/UlasanBikaAmbon');
  };

  return (
    <>
      <Navbar />
      <div className="halaman-tulis-ulasan-2_tulis-ulasan">
        <div className="halaman-tulis-ulasan-2-child_tulis-ulasan"></div>
        <img className="halaman-tulis-ulasan-2-item_tulis-ulasan" alt="" src={bintang} />
        <img 
          className="icon-share_tulis-ulasan" 
          alt="" 
          src={Vector} 
          onClick={handleVectorClick} 
          style={{ cursor: 'pointer' }}
        />
        <input 
          className="salah-satu-bika_tulis-ulasan" 
        />
        <div className="halaman-tulis-ulasan-2-inner_tulis-ulasan"></div>
        <div 
          className="simpan-ulasan_tulis-ulasan" 
          id="simpanUlasanText" 
          onClick={handleSimpanUlasanClick} 
          style={{ cursor: 'pointer' }}
        >
          Simpan ulasan
        </div>
        <div className="halaman-utama-parent_tulis-ulasan">
          <b className="halaman-utama_tulis-ulasan">Halaman Utama</b>
          <b className="profil_tulis-ulasan">Profil</b>
          <b className="masukdaftar_tulis-ulasan">Masuk/Daftar</b>
          <b className="rekomendasi_tulis-ulasan">Rekomendasi</b>
          <b className="tentang-kami_tulis-ulasan">Tentang Kami</b>
        </div>
        <b className="ulasan-bika-ambon_tulis-ulasan">Ulasan Bika Ambon Rian</b>
      </div>
      <Footer />
    </>
  );
};

export default TulisUlasan;
