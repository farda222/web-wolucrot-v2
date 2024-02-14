import { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/img/Logo.svg";

const SignUpPage = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check password strength
    if (newPassword.length >= 8) {
      setPasswordStrength("Strong");
    } else if (newPassword.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleNext = () => {
    if (!email || !username || !password || password.length < 8) {
      // Jika ada input yang belum diisi atau password tidak memenuhi persyaratan
      alert("Semua kolom harus diisi dan password minimal 8 karakter");
    } else {
      // Jika formulir valid, maka panggil fungsi yang diberikan oleh parent
      onNavigateToLogin();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400 px-4 font-custom overflow-y-hidden">
      <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-md overflow-hidden mt-1">
        <div className="mb-3 flex justify-center mt-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <p className="justify-center align-middle container mx-auto text-center flex text-xs font-extrabold text-black mb-4">WOLU</p>
        <h2 className="text-xl mb-7 text-center font-bold">
          Sign Up To <span className="text-indigo-600">Wolu</span> <span className="text-yellow-500">Class</span>
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="username">
            Fullname
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-neutral-200 appearance-none border rounded w-full py-3 px-4 text-black font-bold text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordStrength && <p className={`text-xs float-end mt-4 ${passwordStrength === "Weak" ? "text-red-500" : passwordStrength === "Medium" ? "text-yellow-500" : "text-green-500"}`}>{passwordStrength}</p>}
        </div>
        <div className="flex items-center justify-center mt-7">
          <button
            className="bg-white text-xs border-2 border-solid transition-all border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

SignUpPage.propTypes = {
  onNavigateToLogin: PropTypes.func.isRequired,
};

export default SignUpPage;
