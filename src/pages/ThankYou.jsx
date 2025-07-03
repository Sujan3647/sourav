import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <FaCheckCircle className="text-green-500 text-6xl animate-pulse mb-4" />
      <h1 className="text-2xl font-bold text-orange-600 mb-2">Order Successful!</h1>
      <p className="text-gray-600 mb-6">Thank you for shopping with Honey Well. You’ll receive delivery updates soon.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Back to Home
      </button>
    </div>
  );
}
