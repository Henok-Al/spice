import { useNavigate } from "react-router";

// category
const category = [
  {
    image: "/spices/berbere.png",
    name: "berbere",
  },
  {
    image: "/spices/shiro.png",
    name: "Shiro",
  },
  {
    image: "/spices/mitmita.png",
    name: "Mitmita",
  },
  {
    image: "/spices/kollo.png",
    name: "Kollo",
  },
  {
    image: "/spices/mitin.png",
    name: "Mitin Shiro",
  },
  {
    image: "/spices/besso.png",
    name: "Besso",
  },
  {
    image: "/spices/coffe.png",
    name: "Coffee",
  },
  {
    image: "/spices/dirkosh.png",
    name: "Dirkosh",
  },
];

const Category = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 overflow-x-auto lg:justify-center hide-scroll-bar">
          {/* category  */}
          {category.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Image  */}
                <div
                  onClick={() => navigate(`/category/${item.name}`)}
                  className="w-16 h-16 md:w-24 md:h-24 max-w-xs rounded-full flex items-center justify-center bg-orange-500 transition-all hover:bg-orange-400 cursor-pointer mb-1"
                >
                  <div className="flex justify-center w-12 h-12 md:w-16 md:h-16">
                    {/* Image tag  */}
                    <img
                      src={item.image}
                      alt="img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name Text  */}
                <h1 className="text-xs md:text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </div>
  );
};

export default Category;