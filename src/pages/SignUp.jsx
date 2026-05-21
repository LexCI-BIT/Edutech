import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Decorative Column */}
      <div className="relative flex items-center justify-center lg:w-1/2 min-h-[300px] sm:min-h-[350px] lg:min-h-screen overflow-hidden bg-[#090514]">
        <div className="relative w-[85%] max-w-lg flex items-center justify-center">
          <img 
            src="/signin.png" 
            alt="Sign Up Graphic" 
            className="w-full h-auto object-contain" 
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)'
            }}
          />
        </div>
      </div>

      {/* Right Form Column */}
      <div className="flex items-center justify-center p-8 lg:w-1/2 bg-[#130c24]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-sm"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-text-primary">Welcome.</h2>
          <p className="text-text-secondary text-sm mt-2">
            Sign up to continue your learning journey.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Username */}
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border border-[#2d1b69]/60 text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              required
            />

            {/* Email */}
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border border-[#2d1b69]/60 text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              required
            />

            {/* Password */}
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border border-[#2d1b69]/60 text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              required
            />

            {/* Remember Me */}
            <div className="flex items-center pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-3.5 h-3.5 appearance-none rounded-sm border border-white/50 bg-transparent checked:bg-white checked:border-white transition-all cursor-pointer"
                  />
                  {remember && (
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-black text-[10px]">✓</span>
                  )}
                </div>
                <span className="text-text-secondary text-xs">Remember Me</span>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 mt-2 rounded-lg bg-[#8b5cf6] text-white font-semibold text-base hover:bg-[#7c3aed] transition-colors cursor-pointer"
            >
              Sign Up →
            </motion.button>

            {/* Sign In Link */}
            <p className="text-center text-text-secondary text-sm">
              Already have an account?{' '}
              <Link to="/signin" className="text-primary-light hover:underline transition-colors">
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignUp;
