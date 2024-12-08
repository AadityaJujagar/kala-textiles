export const SlideComponent = ({ img, header, subHeader }) => {
  return (
    <div>
      <img src={img} />
      <div className="text-overlay">
        <h1>{header}</h1>
        <p>{subHeader}</p>
      </div>
    </div>
  );
};
