import React, { useState, useEffect } from "react";
import { Eye, Mail, Lock } from "lucide-react";

const DataDashLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Automatically apply system theme (light/dark)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      if (media.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme(); // Apply on first load
    media.addEventListener("change", applyTheme); // Listen for changes

    return () => media.removeEventListener("change", applyTheme);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", { email, password });
    alert("Login attempted. Check console for details.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-x-hidden p-4 font-[Manrope] text-slate-800 dark:text-slate-200">
      <div className="flex w-full max-w-md flex-col items-center">
        <h1 className="text-[#0d141b] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-6">
          DataDash
        </h1>

        <h2 className="text-[#0d141b] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-8 pt-5">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          {/* Email Field */}
          <label className="flex flex-col w-full">
            <p className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal pb-2">
              Email
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-500 dark:placeholder:text-slate-400 p-[15px] pl-12 text-base font-normal leading-normal transition duration-150"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400" />
            </div>
          </label>

          {/* Password Field */}
          <label className="flex flex-col w-full">
            <p className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal pb-2">
              Password
            </p>

            <div className="relative flex w-full items-stretch rounded-lg shadow-sm">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-500 dark:placeholder:text-slate-400 p-[15px] pl-12 text-base font-normal leading-normal transition duration-150"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400" />

              {/* Eye Toggle */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-full text-slate-500 dark:text-slate-400 flex items-center justify-center px-4 rounded-r-lg transition-colors duration-200 hover:text-primary dark:hover:text-primary"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </label>

          <div className="w-full flex justify-end pt-1">
            <a
              className="text-primary text-sm font-medium leading-normal underline hover:no-underline transition-colors"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center font-bold text-base leading-normal px-8 py-4 bg-primary  rounded-lg w-full mt-8 h-14 hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/30"
          >
            Log In
          </button>
        </form>

        <div className="pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
            Don't have an account?{" "}
            <a className="text-primary font-bold hover:underline" href="#">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDashLogin;
