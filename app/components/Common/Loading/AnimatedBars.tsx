export default function AnimatedBarsLoader() {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="flex space-x-1">
        <div className="w-2 h-6 bg-white animate-bar"></div>
        <div className="w-2 h-6 bg-white animate-bar animation-delay-100"></div>
        <div className="w-2 h-6 bg-white animate-bar animation-delay-200"></div>
        <div className="w-2 h-6 bg-white animate-bar animation-delay-300"></div>
        <div className="w-2 h-6 bg-white animate-bar animation-delay-400"></div>
      </div>
    </div>
  );
}
