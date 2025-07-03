import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    landmark: '',
    profilePhoto: '',
  });
  const [notification, setNotification] = useState({ type: '', message: '' });

  // Auto hide notification
  useEffect(() => {
    if (notification.message) {
      const timeout = setTimeout(() => {
        setNotification({ type: '', message: '' });
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  const handleSubmit = () => {
    const { name, email, phone, gender, address, landmark } = form;
    if (!name || !email || !phone || !gender || !address || !landmark) {
      setNotification({ type: 'error', message: 'Please fill all fields correctly.' });
      return;
    }
    setUser({ ...form });
    setNotification({ type: 'success', message: 'Profile saved successfully!' });
  };

  const logout = () => {
    setUser(null);
    setForm({
      name: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      landmark: '',
      profilePhoto: '',
    });
    setNotification({ type: 'success', message: 'Logged out successfully!' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-white px-4 py-8 overflow-auto">
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 relative transition-all duration-500 animate-fade-in space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            <span>My Account</span>
          </div>
          {user && (
            <FaSignOutAlt
              className="text-xl text-gray-600 cursor-pointer hover:text-red-500 transition"
              onClick={logout}
              title="Logout"
            />
          )}
        </div>

        {/* Notification */}
        {notification.message && (
          <div
            className={`absolute top-4 left-1/2 -translate-x-1/2 px-5 py-3 text-sm font-medium rounded-lg shadow-md z-50 transition-all duration-300 ${
              notification.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Form or Profile */}
        {!user ? (
          <div className="space-y-6 animate-fade-up">
            {/* Photo Upload */}
            <div className="flex flex-col items-center gap-2">
              {form.profilePhoto ? (
                <img
                  src={form.profilePhoto}
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300 shadow-md"
                  alt="Profile"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs">
                  No Photo
                </div>
              )}
              <label className="text-sm text-indigo-600 cursor-pointer hover:underline">
                Upload Photo (optional)
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setForm({ ...form, profilePhoto: reader.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              {[
                { name: 'name', placeholder: 'Full Name', type: 'text' },
                { name: 'email', placeholder: 'Email', type: 'email' },
                { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                { name: 'address', placeholder: 'Full Address', type: 'text' },
                { name: 'landmark', placeholder: 'Landmark', type: 'text' },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="input-field"
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  maxLength={field.name === 'phone' ? 10 : undefined}
                />
              ))}

              <select
                className="input-field"
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>

              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-lg"
              >
                Save Profile
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-fade-up">
            <img
              src={user.profilePhoto || 'https://via.placeholder.com/96'}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-300 shadow-md"
              alt="Profile"
            />
            <div className="text-left text-sm text-gray-700 space-y-2 px-4">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> +91 {user.phone}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Address:</strong> {user.address}, {user.landmark}</p>
              <button
                onClick={logout}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition shadow"
              >
                <FaUserEdit /> Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tailwind Custom Field Styles */}
      <style>{`
        .input-field {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 0.625rem 1rem;
          border-radius: 0.5rem;
          outline: none;
          transition: box-shadow 0.3s ease;
        }
        .input-field:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
        }
      `}</style>
    </div>
  );
}
