const NoticeBar = () => {
  return (
    <div className="notice-bar bg-red-600 border-white">
      {/* container box size 100% width and height 2% bg-color white*/}
      <div className="container box w-full h-8 bg-red">
        {/* container box size 100% width and height 100% flex-center */}
        <div className="container box w-full h-full flex-center">
          {/* text center text white */}
          <p className="text-center text-white">
            🚀 &nbsp;Get 30% off on all products. Use code{" "}
            <strong>FRAMER30</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
