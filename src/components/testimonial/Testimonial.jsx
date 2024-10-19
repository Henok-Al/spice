/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-orange-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  <span className="text-2xl text-orange-500">“</span>
                  YebaleSpices offers an incredible variety of spices that have
                  transformed my cooking. The quality is unmatched, and the
                  flavors are authentic and rich. I highly recommend their
                  products to anyone who loves Ethiopian cuisine.
                  <span className="text-2xl text-orange-500">”</span>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Alemayehu
                </h2>
                <p className="text-gray-500">Chef</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  <span className="text-2xl text-orange-500">“</span>
                  I've been using YebaleSpices for my home cooking, and I'm
                  absolutely delighted with the results. The spices are fresh
                  and aromatic, making every dish taste extraordinary. Thank
                  you, YebaleSpices!
                  <span className="text-2xl text-orange-500">”</span>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Makeda
                </h2>
                <p className="text-gray-500">Home Cook</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  <span className="text-2xl text-orange-500">“</span>
                  YebaleSpices has become my go-to source for authentic
                  Ethiopian spices. The customer service is excellent, and the
                  products are of the highest quality. I couldn't be happier
                  with my experience.
                  <span className="text-2xl text-orange-500">”</span>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Tsegaye
                </h2>
                <p className="text-gray-500">Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
