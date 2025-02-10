export default function FloatingLabel() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 mt-6">Welcome Back!</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full py-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full py-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-gray-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}