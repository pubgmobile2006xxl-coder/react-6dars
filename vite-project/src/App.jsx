import React from 'react'
import './App.css' // CSS fayl shu yerda to'g'ri ulandi

const App = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setMessage('Iltimos, barcha maydonlarni toʻldiring!');
      alert('Xatolik: Barcha maydonlarni toʻldirishingiz shart!');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('Parol kamida 6 ta belgidan iborat boʻlishi kerak!');
      alert('Xatolik: Parol juda qisqa!');
      return;
    }

    alert(`Ro'yxatdan muvaffaqiyatli o'tdingiz!\n\nFoydalanuvchi: ${formData.username}\nEmail: ${formData.email}`);
    setMessage('Roʻyxatdan muvaffaqiyatli oʻtdingiz!');
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Ro'yxatdan o'tish</h2>

        {message && (
          <div className={`message-box ${
            message.includes('muvaffaqiyatli') ? 'message-success' : 'message-error'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Foydalanuvchi nomi</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Parol</label>
            <input
              type="number"
              name="number"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;