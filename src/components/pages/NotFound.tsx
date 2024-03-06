const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Page Not Found</p>
        <a href="/" className="text-blue-600 hover:underline">
          Go to Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
