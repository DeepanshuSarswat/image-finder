const Cards = (props) => {
  let images = props.images;

  return (
    <div className="grid sm:grid-cols-3 gap-6 sm:gap-4 ">
      {images.map((image) => {
        return (
          <div>
            <div className="rounded shadow-lg max-w-sm overflow-hidden">
              <img className="w-full" src={image.webformatURL}></img>
              <div className="py-4 px-6">
                <h1 className="font-bold text-indigo-800 tracking-wide text-xl mb-2">
                  Photo by {image.user}
                </h1>
                <div>
                  <p>
                    <strong className="font-bold ">Views:</strong>
                    <span className="text-black-600 font-medium float-right">
                      {image.views}
                    </span>
                  </p>
                  <p>
                    <strong className="font-bold ">Downloads:</strong>
                    <span className="text-black-600 font-medium float-right">
                      {" "}
                      {image.downloads}
                    </span>
                  </p>
                  <p>
                    <strong className="font-bold ">Likes:</strong>
                    <span className="text-black-600 font-medium float-right">
                      {image.likes}
                    </span>
                  </p>
                </div>
              </div>
              <div className="py-4 px-6">
                <div>
                  {image.tags.split(",").map((tag) => {
                    return (
                      <span className="inline-block  text-sm font-semibold bg-gray-200 py-1 px-4 rounded-full mr-3 text-gray-700">
                        #{tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
