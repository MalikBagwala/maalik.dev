import { Fragment } from "react/jsx-runtime";

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
  const [employers, clients] = brands.reduce<[BrandType[], BrandType[]]>(
    (prev, brand) => {
      if (brand.isEmployer) {
        prev[0].push(brand);
      } else {
        prev[1].push(brand);
      }
      return prev;
    },
    [[], []]
  );
  return (
    <div className="border-b border-neutral-200 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
      <div className="container py-8">
        {clients?.length > 0 ? (
          <div className="text-center flex flex-col gap-y-12 mt-12 lg:mt-0 ">
            <p className="font-semibold text uppercase tracking-wide">
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
            {employers.length > 0 && (
              <div className="text-lg text-balance mx-20">
                Hired by innovative product based companies, like{" "}
                {employers.map((employer, index) => {
                  const isLast = index === employers.length - 1;
                  return (
                    <Fragment key={employer.url}>
                      {employers.length > 1 ? (isLast ? " and " : ", ") : null}
                      <a
                        key={employer.name}
                        className="text-blue-600 dark:text-blue-500 hover:opacity-80 font-semibold"
                        href={employer.url}
                      >
                        {employer.name}
                      </a>
                    </Fragment>
                  );
                })}
                .
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Brands;
