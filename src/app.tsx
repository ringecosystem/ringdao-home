
import useWidth from "./hooks/useWidth";

export function App() {
  const width = useWidth();
  return (
    <div className="flex bg-white">
      <div className="w-[1240px] mx-auto border-[#585858] border-[1px] border-x">
        
      </div>
    </div>
  );
}
