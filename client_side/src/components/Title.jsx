const Title = ({ title, className }) => {
  return (
    <h1
      className={`text-center p-5 text-gray-900 text-4xl sm:text-6xl md:text-7xl font-medium uppercase ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
