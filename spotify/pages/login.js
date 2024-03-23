import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        className="text-white px-5 py-3 rounded-full bg-green-500 font-bold text-lg"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
      >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
          alt="spotify"
          width={900}
        ></img>
        sign In
      </button>
    </div>
  );
};

export default Login;
