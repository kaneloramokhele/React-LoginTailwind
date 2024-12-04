// frontend/src/components/Form.jsx

import { Link } from "react-router-dom";
import GoogleLogo from '../assets/svgs/google.svg';

export default function Form() {
  return (
    <div className="bg-slate-500 text-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl text-center font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-300 mt-4">Please enter your email and password to login</p>

      <div className="mt-8">
        <div>
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input type="email" name="email" id="email"
                className="w-full border-2 border-slate-900 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                autoComplete="on"
                required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-medium">Password</label>
          <input type="password" name="password" id="password"
                className="w-full border-2 border-slate-950 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                required
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="text-blue-300 hover:underline hover:text-blue-900">
            <input type="checkbox" name="remember_me" id="remember_me" 
                  className="cursor-pointer"
            />
            <label htmlFor="remember_me" className="ml-2 font-medium text-base cursor-pointer">Remember me for 30 days</label>
          </div>
          {/* <button className="font-medium text-base text-violet-950 cursor-pointer">Foget password?</button> */}
          
          <Link 
            to="/forgot-password" 
            className="font-medium text-base text-violet-950 hover:underline"
          >
            Forget password?
          </Link>
        </div>

        {/* <div className="mt-8 flex flex-col gap-y-4">
          <button className="bg-sky-900 text-white text-lg font-bold uppercase">Signin</button>
          <button className="flex items-center justify-center gap-2 space-x-2 px-4 py-2 bg-slate-200 text-black font-medium rounded-lg hover:bg-blue-700 transition">
            <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
            <span>Signin with Google</span>
          </button>
        </div> */}

        <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition duration-150"
            >
              <img src={GoogleLogo} alt="Google logo" className="h-5 w-5" />
              Sign In with Google
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Create New Account
            </Link>
          </div>

      </div>
    </div>
  );
}

