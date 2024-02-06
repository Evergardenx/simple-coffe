function HeaderText() {
  return (
    <div className=" box relative mx-auto max-w-md space-y-4  py-4">
      <h1 className="z-10 text-center text-3xl font-bold text-white">
        Our Collection
      </h1>
      <p className="z-10 mx-auto max-w-md text-center text-[#6F757C]">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      {/* <img src={vectorImg} alt="bg" className=" absolute right-0 top-0 " /> */}
    </div>
  );
}

export default HeaderText;
