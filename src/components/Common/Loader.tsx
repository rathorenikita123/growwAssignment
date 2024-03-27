const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500 h-8 w-8"></div>
    <p className="mt-4 font-bold">Please wait while we fetch the data...</p>
  </div>
);

export default Loader;
