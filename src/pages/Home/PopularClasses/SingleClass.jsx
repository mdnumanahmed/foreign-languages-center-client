import { Zoom } from "react-awesome-reveal";
const SingleClass = ({ top }) => {
  const { image, seats, price, name, booking } = top;
  // console.log(top)
  return (
    <Zoom>
    <div>
      <div className={`card w-96 shadow-xl `}>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-96 h-40" />
        </figure>
        <div className="card-body items-center text-center py-4">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="">Students: {booking || 0}</p>
          <p>Available Seats: {seats}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default SingleClass;
