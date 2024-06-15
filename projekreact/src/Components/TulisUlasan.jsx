// src/components/Review.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'; // Pastikan path-nya benar
import Footer from './Footer'; // Pastikan path-nya benar
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

// Impor gambar panah kembali
import backArrowImage from '../Assets/img/Vector.png'; // Sesuaikan dengan struktur proyek Anda

const Review = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewText = (event) => {
    setReviewText(event.target.value);
  };

  const saveReview = () => {
    // Simpan ulasan
    console.log('Ulasan disimpan:', { rating, reviewText });
    // Navigasi ke /UlasanBikaAmbon setelah menyimpan ulasan
    // Gantikan dengan logika navigasi yang sesuai dengan router Anda
    // history.push('/UlasanBikaAmbon');
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <div style={{
          marginTop:'50px',
          padding: '40px',
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'white',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Link to="/Detailumkm" style={{ textDecoration: 'none' }}>
              <img src={backArrowImage} alt="Back" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
            </Link>
            <h2 style={{ fontSize:'35px', marginLeft: '20px' }}>Ulasan Bika Ambon Rian</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                size="2x"
                color={star <= rating ? 'orange' : 'lightgray'}
                onClick={() => handleRating(star)}
                style={{ cursor: 'pointer' }}
              />
            ))}
            {/* Optionally include a half-star if the rating is not an integer */}
            {rating % 1 !== 0 && (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                color="orange"
                onClick={() => handleRating(Math.floor(rating) + 0.5)}
                style={{ cursor: 'pointer' }}
              />
            )}
          </div>
          <textarea
            value={reviewText}
            onChange={handleReviewText}
            style={{
              width: '100%',
              height: '200px',
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              border: '1px solid lightgray',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif' // Pastikan font Inter diaplikasikan
            }}
            placeholder="Tulis ulasan Anda di sini..."
          />
          <Link to="/UlasanBikaAmbon" style={{ textDecoration: 'none' }}>
            <button
              onClick={saveReview}
              style={{
                marginTop: '20px',
                padding: '15px 30px',
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif' // Pastikan font Inter diaplikasikan
              }}
            >
              Simpan ulasan
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
