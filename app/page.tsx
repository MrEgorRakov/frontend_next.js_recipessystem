
export default function MyApp() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-[400px] h-[200px] bg-green-700 top-[50px] left-1/2 transform -translate-x-1/2">
        <h1 className="absolute text-[20px] border-2 border-black p-[5px] text-black bg-blue-200 left-[40%] top-[-15%]">Banner</h1>
        <button className="absolute top-0 right-0 px-[4px]">x</button>
        <div className="absolute bg-white top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full"></div>
        <div className="absolute bg-white top-full left-full transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[90px] rounded-[45%] "></div>
        <span className="absolute text-white border-2 border-dotted border-white text-lg p-[10px] transform -translate-x-1/2 left-[50%] top-[35%]">This is css position</span>
      </div>
    </div>
  );
};
