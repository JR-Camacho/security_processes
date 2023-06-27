const Title = ({ title, className }) => {
  return (
    <h1
      className={`text-center p-5 text-gray-900 text-3xl sm:text-4xl md:text-5xl font-medium uppercase ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
