const Shimmer = () => {
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-200 rounded-lg shadow-lg flex flex-col animate-pulse min-h-[400px]">
      <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>

      <div className="mt-4 flex-grow space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};
export default Shimmer;
