export default function Header() {
  return (
    <div className="bg-[#222831] h-24 flex items-center justify-between flex-wrap">
      <div className="sm:w-40 w-full flex items-center justify-center sm:ml-32">
        <a href="#" className="">dev.matheus/</a>
      </div>
      <div className="sm:w-96 w-full flex items-center justify-between sm:mr-32 px-6">
        <a href="#" className="">Home</a>
        <a href="#" className="">About Me</a>
        <a href="#" className="">Contact</a>
      </div>
    </div>
  );
}
