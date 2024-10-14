
import Marquee from "react-fast-marquee";
import { Rocket } from 'lucide-react';
const NoticeBar = () => {
  return (
    <>
      <div className="w-full h-1 bg-green-500 ">
        {/* ANNOUNCEMENT BAR marquee text slider like mean notice */}
      </div>
      <div className="notice-bar bg-yellow-200 h-7 text-red-600">
        <Marquee pauseOnHover pauseOnClick autoFill gradient>
        <Rocket />I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
};
 
export default NoticeBar;

