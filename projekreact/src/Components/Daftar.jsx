import React from 'react'
import './Index.css'
import lambang from "../Assets/img/lambang.png"
import home from '../Assets/img/1.png'
const Daftar = () => {
  return (
    <>
      <div className="login-umkmuser">
      <img className="homelog" alt="" src={home}/>
<div className="login-umkmuser-child">
</div>
<img className="lambanglog" alt="" src={lambang}/>
<img className="rectanglelogin" alt="" src="Rectangle 11.svg"/>
<b className="masukdaftarlog">Buat AKun</b>
<b className="email1">Email</b>
<b className="kata-sandi1">Kata Sandi</b>
<b className="kata-sandi2">Masukkan Kembali Kata Sandi</b>

<div className="form-email-login" id="formEmailLogin">
<div className="form-email-login-child1">
</div>
</div>
<div className="form-password-login-child1">
</div>
<div className="form-password-login-child2">
</div>

<div className="button">
<img className="button-child" alt="" src="Rectangle 9.svg"/>
<b className="masuk">Masuk</b>

</div> 
<div className="tidak-punya-akun-container" id="tidakPunyaAkun">Sudah punya akun?
<span className="daftar-di-sini">Masuk Di sini!</span>
</div>
</div>
    </>
  )
}

export default Daftar
