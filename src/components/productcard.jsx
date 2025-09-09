function ProductCard(props) {
  return (
    <div className="flex flex-col bg-[#eedfdf6b] rounded-lg relative">
      <div className="h-auto w-full border border-slate-100 rounded-lg overflow-hidden">
        <img
          src={props.image}
          alt="product img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-3 top-3 bg-amber-950 p-1">
        <p className="text-white text-sm">-{props.discount}%</p>
      </div>
      <div className="content p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold mt-3">{props.title}</h3>
        </div>

        <p className="text-slate-500 text-sm py-3">
          {props.description.length > 100
            ? `${props.description.slice(0, 100)}...`
            : props.description}
        </p>

        <div className="flex items-center space-x-4 justify-between">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-4 py-2.5 text-sm rounded-full duration-150 cursor-pointer">
            View details
          </button>
          <p className="text-md font-medium">${props.price}</p>
        </div>
        <div className="flex items-center space-x-4 mt-2 justify-between">
          <p className="text-md font-medium">Rating: {props.rating}</p>
          <p className="text-md font-medium"> {props.availstatus}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
