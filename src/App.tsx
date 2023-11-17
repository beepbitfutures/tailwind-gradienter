import MovableArrow from './Components/movable-arrow.tsx';

function App() {
  return (
    <div className="bg-slate-50">
      <section className="flex flex-col my-[45vh] mx-4">
        <div className="w-auto h-8 border border-2 border-green-600">
          <MovableArrow />
        </div>
        <div className="flex flex-row gap-[5%] mt-2" id="position-markers">
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
          <div className="w-0.5 h-2 bg-black" id="point-1"></div>
        </div>
        <div
          className="mt-2 w-auto h-14 rounded-md bg-gradient-to-r from-slate-300 to-amber-400 border-green-600"
          id="gradient-bar"
        ></div>
      </section>
    </div>
  );
}

export default App;
