export default function FloatingLabel() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-16 mt-6">Welcome Back!</h2>
        <form>
          <div className="relative mb-8">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="peer placeholder-transparent w-full py-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
            />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:text-gray-700 peer-focus:text-sm peer-focus:-top-3.5 transition-all">
              Email address
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="peer placeholder-transparent w-full py-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
            />
            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-700 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:text-gray-700 peer-focus:text-sm peer-focus:-top-3.5 transition-all">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <div className="mt-2 text-center">
          <a href="#" className="text-gray-600 text-sm hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}