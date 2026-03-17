const InputSub = () => {
  return (
    <div className="bg-[#1c211a] flex items-center justify-center">
      <div className="relative w-full max-w-125">
        <input
          type="email"
          placeholder="Enter..."
          className="w-full h-15 bg-transparent border border-white rounded-[10px] pl-6 pr-37.5 text-xl font-medium text-white/90 placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white transition-all"
        />
        <button className="absolute right-1.25 top-1/2 -translate-y-1/2 h-12.5 px-8 bg-white rounded-lg text-lg font-bold text-black uppercase tracking-wider hover:bg-[#769f87] transition-colors hover:text-white duration-500 ease-out">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default InputSub;
