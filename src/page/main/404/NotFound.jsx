import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function NotFound() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Player
        autoplay
        loop
        src='https://assets5.lottiefiles.com/packages/lf20_GIyuXJ.json'
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <h1 className="text-2xl text-black/70">Aradığın sayfa bulunamadı!</h1>
    </div>
  );
}
