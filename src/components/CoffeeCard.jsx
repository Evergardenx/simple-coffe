// import fullStarImg from "../images/Star_fill.svg";
// import starImg from "../images/star.svg";

function CoffeeCard({ cf }) {
  return (
    <article className="relative space-y-2">
      <img src={cf.image} alt="" className="w-full rounded-3xl object-cover" />
      {cf.popular ? (
        <span className="absolute left-3 top-1 rounded-full bg-[#F6C768] px-3 py-1 text-xs font-bold capitalize">
          popular
        </span>
      ) : null}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[#FEF7EE]">{cf.name}</h3>
        <h4 className="rounded-lg bg-[#BEE3CC] px-2 py-1 text-xs font-bold">
          {cf.price}
        </h4>
      </div>
      <div className="flex items-center justify-between text-sm">
        {!cf.rating ? (
          <div className="flex items-center text-[#FEF7EE]">
            <img src="/images/Star.svg" alt="empty star" />{" "}
            <span className="ml-1">No ratings</span>{" "}
          </div>
        ) : (
          <div className="flex items-center text-[#FEF7EE]">
            <img src="/images/Star_fill.svg" alt="full star" />{" "}
            <span className="ml-2">{cf.rating}</span>
            <span className="ml-1 font-bold text-[#6F757C]">
              ({cf.votes} votes)
            </span>
          </div>
        )}
        {!cf.available ? (
          <span className="font-bold text-[#ED735D]">Sold out</span>
        ) : null}
      </div>
    </article>
  );
}

export default CoffeeCard;
