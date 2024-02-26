const ProgressBar = ({ progress }) => {
  return (
    //Progress bar is done with the help of 2 div
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full "
        style={{ width: `${progress}%` }}
      >
        {/* "style" is used to show the Progress */}
      </div>
    </div>
  );
};

export default ProgressBar;
