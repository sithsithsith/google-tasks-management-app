import { useEffect } from "react";
import GoogleLogo from "./assets/google.png";
import WelcomePng from "./assets/welcome.png";
import useGoogleApis from "~/shared/hooks/useGoogleAuth";
import { useNavigate } from "react-router";

export default function index() {
  const { accessToken, login } = useGoogleApis();

  let navigate = useNavigate();
  useEffect(() => {
    Boolean(accessToken !== "") && navigate("/");
  }, [accessToken]);

  return (
    <div className="w-full h-full sm:w-11/12 sm:h-5/6 sm:rounded-xl flex flex-col items-center justify-between bg-white">
      <header className="flex h-3/5 w-full justify-center items-center ">
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-bold">Hi, Welcome Back!</h1>
          <img
            src={WelcomePng}
            alt="hello, welcome back"
            className="w-6 h-6 block dark:hidden"
          />
        </div>
      </header>
      <main className="flex h-full w-full justify-center items-center">
        <div
          className="flex gap-1 items-center w-80 h-12 bg-neutral-50 rounded-md cursor-pointer"
          onClick={login}
        >
          <div className="flex w-1/4 pl-3 justify-start items-center">
            <img
              src={GoogleLogo}
              alt="Sign-in with Google"
              className="w-7 h-7 block dark:hidden"
            />
          </div>
          <button className="font-bold">Sign-in with Google</button>
        </div>
      </main>
      <footer className="h-full"></footer>
    </div>
  );
}
