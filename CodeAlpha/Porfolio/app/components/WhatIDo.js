import Image from "next/image";
const WhatIDo = ({ title, description }) => {
  return (
    <div
      className="rounded-3xl border-gray-700 p-4 flex-row flex justify-between items-center bg-slate-950"
      style={{ borderWidth: 0.5, width: 500 }}
    >
      <div className="flex-row flex gap-3">
        <Image
          src={"/work-icon.jpg"}
          width={50}
          height={50}
          alt="Work Icon"
          className="w-12 h-12"
        />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default WhatIDo;
