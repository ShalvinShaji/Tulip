const SectionHeading = ({ mainHeading, subHeading }) => {
  return (
    <div className=" m-4 p-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        {mainHeading}
      </h2>
      <p className="text-xl text-gray-600 text-center font-semibold">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
