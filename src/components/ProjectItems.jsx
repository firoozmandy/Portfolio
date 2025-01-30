const ProjectItems = ({ pic, title, Github,LiveDemo }) => {
  return (
    <div
      // name="projects"
      className="flex flex-col gap-5 md:gap-10 p-5 bg-[#e5e9f1] md:p-10 rounded-3xl "
    >
      <img src={pic} className="rounded-3xl" />
      <div className="font-bold text-2xl text-gray-900 md:text-2xl">
        {title}
      </div>
      <div className="gap-4 grid grid-cols-2 ">
        <button className=" hover:bg-gray-800 xl:w-32 w-20 h-30 p-2 rounded-full ring-1 text-xl md:text-xl hover:text-white transition">
          {Github}
        </button>
        <button className="hover:bg-gray-800 xl:w-32 w-20 p-2 md:p-4 text-xs rounded-full ring-1 sm:text-xl hover:text-white transition">
          {LiveDemo}
        </button>
      </div>
    </div>
  );
};

export default ProjectItems;
