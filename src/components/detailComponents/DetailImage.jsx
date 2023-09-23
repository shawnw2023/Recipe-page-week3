const DetailImage = (props) => {
  return (
    <div className='detail_img'
      style={{
        background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url(${props.image})`,
        backgroundSize: "cover",
        height: 200,
      }}
    >
      <h1 className='recipe_img_name'>{props.title}</h1>
    </div>
  );
};
export default DetailImage;
