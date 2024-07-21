// Form.js
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    links: [],
    country: '',
    city: '',
    address: '',
    employeeCount: '',
    description: '',
    imageUrl: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageUrlSubmit = () => {
    setFormData({
      ...formData,
      imageUrl: tempImageUrl
    });
    handleModalClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Ma\'lumotlar saqlandi');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="button" onClick={handleModalOpen}>Yuklash</button>
          {formData.imageUrl && <img src={formData.imageUrl} alt="Uploaded" />}
        </div>
        <div>
          <label>Komapniya nomi</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Telefon raqami</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Davlat</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div>
          <label>Shahar</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>Yashash joyi</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Xodimlar soni</label>
          <input type="number" name="employeeCount" value={formData.employeeCount} onChange={handleChange} required />
        </div>
        <div>
          <label>Izoh</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <button type="submit">Keyingisi</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Rasm yuklash</h2>
            <input type="text" value={tempImageUrl} onChange={(e) => setTempImageUrl(e.target.value)} />
            <button onClick={handleImageUrlSubmit}>Yuklash</button>
            <button onClick={handleModalClose}>Bekor qilish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
