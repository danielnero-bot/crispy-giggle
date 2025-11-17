import React, { useState } from "react";
import { User, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";

const DataDashSignup = () => {
  // State management for all form fields and password visibility
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simple validation (e.g., password length)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Attempting signup with:", { name, email, phone, password });
    alert("Sign Up attempted. Check console for details.");

    // In a real application, you would call a registration API here.
  };

  const InputField = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    icon: Icon,
    isPassword = false,
  }) => (
    <label className="flex flex-col w-full">
      <p className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal pb-2">
        {label}
      </p>
      <div className="relative">
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-500 dark:placeholder:text-slate-400 p-[15px] pl-12 text-base font-normal leading-normal transition duration-150"
          placeholder={placeholder}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          required
        />
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400" />

        {/* Password Visibility Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-0 h-full text-slate-500 dark:text-slate-400 flex items-center justify-center px-4 rounded-r-lg transition-colors duration-200 hover:text-primary dark:hover:text-primary"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </label>
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-x-hidden p-4 font-[Manrope] text-slate-800 dark:text-slate-200">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Header */}
        <h1 className="text-[#0d141b] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-6">
          DataDash
        </h1>
        <h2 className="text-[#0d141b] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-8 pt-5">
          Create your account
        </h2>

        <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
          {/* Full Name Field */}
          <InputField
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            icon={User}
          />

          {/* Email Field */}
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            icon={Mail}
          />

          {/* Phone Number Field */}
          <InputField
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            icon={Phone}
          />

          {/* Password Field */}
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            icon={Lock}
            isPassword={true}
          />

          {/* Confirm Password Field */}
          <InputField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            icon={Lock}
            isPassword={true}
          />

          {/* Error Message Display */}
          {error && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400 mt-2 text-center">
              {error}
            </p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="flex items-center justify-center font-bold text-base leading-normal px-8 py-4 bg-primary text-white rounded-lg w-full mt-8 h-14 hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/30"
          >
            Sign Up
          </button>
        </form>

        {/* Log In Link */}
        <div className="pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
            Already have an account?{" "}
            <a className="text-primary font-bold hover:underline" href="/login">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDashSignup;
