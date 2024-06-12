import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Vector from '../Assets/img/Vector.png';
import Rian from '../Assets/img/rian.png';
import Ahun from '../Assets/img/ahun.png';
import Rika from '../Assets/img/rika.png';

const BookmarkPage = () => {
  return (
    <>
      <Navbar />
      <div className="bookmark-page_bookmark">
        <b className="favorit_bookmark">Favorit</b>
        <Link to="/ProfilUser">
          <img className="icon-share_bookmark" alt="Share Icon" src={Vector} id="iconShareImage" />
        </Link>
        <div className="halaman-utama-parent_bookmark">
          <b className="halaman-utama_bookmark">Halaman Utama</b>
          <b className="profil_bookmark">Profil</b>
          <b className="masukdaftar_bookmark">Masuk/Daftar</b>
          <b className="rekomendasi_bookmark">Rekomendasi</b>
          <b className="tentang-kami_bookmark">Tentang Kami</b>
        </div>
        <div className="rectangle-parent_bookmark">
          <div className="group-child_bookmark"></div>
          <b className="bika-ambon-rian_bookmark">Bika Ambon Rian</b>
          <div className="group-item_bookmark"></div>
          <Link to="/Detailumkm">
            <b className="selengkapnya_bookmark">Selengkapnya &gt;</b>
          </Link>
          <img className="image-39-icon_bookmark" alt="Bika Ambon Rian" src={Rian} />
        </div>
        <div className="rectangle-group_bookmark">
          <div className="group-child_bookmark"></div>
          <b className="bika-ambon-ahun_bookmark">Bika Ambon Ahun</b>
          <div className="group-item_bookmark"></div>
          <b className="selengkapnya_bookmark">Selengkapnya &gt;</b>
          <img className="image-40-icon_bookmark" alt="Bika Ambon Ahun" src={Ahun} />
        </div>
        <div className="rectangle-container_bookmark">
          <div className="group-child_bookmark"></div>
          <b className="bika-ambon-rian_bookmark">Bika Ambon Rika</b>
          <div className="group-item_bookmark"></div>
          <b className="selengkapnya_bookmark">Selengkapnya &gt;</b>
          <img className="image-42-icon_bookmark" alt="Bika Ambon Rika" src={Rika} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookmarkPage;
