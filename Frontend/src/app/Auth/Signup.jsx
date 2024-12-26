import React from 'react'

const Signup = () => {
  return (
    <div>
      Signup
      <form className="bg-emerald-700 p-4 rounded">
    <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
        />
    </div>
    <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
        />
    </div>
    <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
        />
    </div>
    <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="address">
            Address
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
        />
    </div>
    <div className="flex items-center justify-between">
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            Sign Up
        </button>
    </div>
      </form>
    </div>
  );
};

export default Signup;