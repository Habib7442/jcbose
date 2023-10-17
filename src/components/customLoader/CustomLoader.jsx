import "./CustomLoader.scss"; 

const CustomLoader = () => {
  return (
    <div className="custom-loader">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default CustomLoader;
