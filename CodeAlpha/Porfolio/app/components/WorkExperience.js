import Image from "next/image";
const WorkExperience = ({ title, location, duration }) => {
  return (
    <div
      className="rounded-full border-gray-700 p-4 flex-row flex justify-between items-center bg-slate-950"
      style={{ borderWidth: 0.5, width: 500 }}
    >
      <div className="flex-row flex gap-3">
        <Image src={"/work-icon.jpg"} width={50} height={50} alt="Work Icon" />
        <div>
          <p>{title}</p>
          <p className="font-bold">{location}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{duration}</p>
    </div>
  );
};
export default WorkExperience;
