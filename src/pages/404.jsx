const NotFound = () => {
  return (
    <div className="mockup-window border bg-base-300">
      {/* <div className="flex justify-center px-4 py-16 bg-base-200">
        Hello!
        </div> */}
      <div class="flex flex-col items-center px-4 py-16">
        <div class="text-indigo-500 font-bold text-7xl">404</div>

        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          This page does not exist
        </div>

        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          The page you are looking for could not be found.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
