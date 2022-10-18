const NotFound = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="mockup-window justify-center border bg-base-300">
        {/* <div className="flex justify-center px-4 py-16 bg-base-200">
        Hello!
        </div> */}
        <div className="flex flex-col items-center px-10 py-16">
          <div className="text-indigo-500 font-bold text-8xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
