export type BrandType = {
  weight: number;
  name: string;
  url: string;
  logo: string;
  isEmployer: boolean;
};
export type BrandsType = {
  brands: BrandType[];
  total: number;
};

const Brands = ({ brands }: BrandsType) => {
  const clients = brands.filter((b) => !b.isEmployer);

  return (
    <div className="border-b border-neutral-200">
      <div className="container py-8">
        {clients?.length > 0 ? (
          <div className="text-center flex flex-col gap-y-12 mt-12 lg:mt-0">
            <p className="font-semibold text uppercase text-neutral-600 tracking-wide">
              At agency side, client side or as freelancer
            </p>
            <div className="flex gap-10 flex-wrap items-center justify-center">
              {clients.map((brand) => {
                return (
                  <a href={brand.url} key={brand.url} target="__blank">
                    <img
                      className="h-10 lg:h-14 w-auto filter grayscale hover:grayscale-0 transition-all"
                      loading="lazy"
                      src={brand.logo}
                      alt={brand.name}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Brands;
