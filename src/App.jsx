import { Menus } from "./utils";
import Logo from "./assets/final.png";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import NoticeBar from "./components/NoticeBar";

export default function App() {
  return (
    <>
     <NoticeBar />
     {/* fixed */}
      <div>
        <header className="h-16 text-[15px]  inset-0 flex-center bg-[#18181A] ">
          <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
            <div className="flex-center gap-x-3 z-[999] relative">
              <img src={Logo} alt="" className="size-12" />
              <h3 className="text-lg font-semibold">Framer</h3>
            </div>

            <ul className="gap-x-1 lg:flex-center hidden">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>
            <div className="flex-center gap-x-5">
              <button
                aria-label="sign-in"
                className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
              >
                Sign In
              </button>
              <div className="lg:hidden">
                <MobMenu Menus={Menus} />
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div>
         
      </div>
    </>
  );
}
