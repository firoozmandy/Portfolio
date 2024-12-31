const ProjectItems = ({ pic, title, Github }) => {
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
        <button className=" hover:bg-gray-800 w-32 h-30 p-2 rounded-full ring-1 text-xl md:text-xl hover:text-white transition">
          {Github}
        </button>
        <button className="hover:bg-gray-800 w-32 p-2 md:p-4 rounded-full ring-1 text-xl hover:text-white transition">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItems;
