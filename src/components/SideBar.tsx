export function SideBar({ setState }: { setState: (value: string) => void }) {
  return (
    <div className="flex justify-start items-center flex-col">
      <div>
        <button className="flex justify-center items-center w-[200px] h-[50px] border rounded-s bg-gray-400">
          Phone
        </button>
        <button className="flex justify-center items-center w-[200px] h-[50px] border rounded-s bg-gray-400">
          Computer
        </button>
        <button className="flex justify-center items-center w-[200px] h-[50px] border rounded-s bg-gray-400">
          Television
        </button>
      </div>
    </div>
  );
}
