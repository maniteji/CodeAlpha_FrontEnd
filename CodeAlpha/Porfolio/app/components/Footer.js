import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 m-8 flex-row flex items-center gap-5 shadow-lg shadow-slate-900">
      <Image
        src={"/profile_image.jpg"}
        alt="Self potrait"
        className="rounded-full"
        height={100}
        width={100}
      />
      <div className="flex flex-col">
        <b>fake@email.com</b>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.facebook.com"
            className="text-sm text-gray-400 underline"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            className="text-sm text-gray-400 underline"
          >
            Instagram
          </a>
        </div>
      </div>
      <a
        href="mailto:fake@email.com"
        className="rounded-full py-2 px-4 bg-slate-500 border-gray-700"
        style={{ borderWidth: 0.5 }}
      >
        Talk with me
      </a>
    </div>
  );
};
export default Footer;
