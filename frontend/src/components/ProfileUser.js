// ProfileUser.js
import React from 'react';
import ProfileIcon from "../assets/images/user.png";

const ProfileUser = () => {
  return (
    <div className="profile-container">
      <h2><strong>Profil</strong></h2>
      <div className="img-center">
        <img className="img-profile" src={ ProfileIcon } />
      </div>
      <div className='card-profile'>
        <div>
          <div className='form-group'>
            <label for='name'>Nama Lengkap</label>
            <input type='text' className='form-control' id='name' value="Oya Yayaya" name='name' />
          </div>
          <div className='form-group'>
            <label for='username'>Username</label>
            <input type='text' className='form-control' id='username' value="oyaya123" name='username' />
          </div>
          <div className='form-group'>
            <label for='email'>Email</label>
            <input type='email' className='form-control' id='email' value="oya@gmail.com" name='email' />
          </div>
          <div className='form-group'>
            <label for='level'>Tingkat</label>
            <input type='text' className='form-control' id='level' value="SMA" name='level' />
          </div>
          <div className='form-group'>
            <label for='class'>Kelas</label>
            <input type='number' className='form-control' id='class' value="3" name='class' />
          </div>
        </div>
        <hr/>
        <label for='study-package'>Paket Belajar</label>
        <div className='row'>
          <div className='col-8'>
            <input type='text' className='form-control' id='study-package' placeholder='Belum ada paket belajar' name='study-package' />
          </div>
          <div className='col-4'>
            <button className='button btn-secondary'>Beli</button>
          </div>
        </div>
        <div className='m44'>
          <p className='font-white margin-0'>Beli paket belajar untuk mengakses materi, video dan soal premium.</p>
          <p className='font-white margin-0'>Maksimalkan pengalaman belajar kamu dan akses semua materi, soal dan video</p>
        </div>
        <div className='center'>
          <button className="button btn-secondary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser; 