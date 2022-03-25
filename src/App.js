import { useState, useEffect } from "react";
import Cards from "./Cards";
function App() {
  const [images, setimages] = useState(null);
  const [isloading, setisloading] = useState(true);
  let [term, setterm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=22563129-19a45adf1b02eed02c54ae05b&q=${term}&image_type=photo`
    )
      .then((response) => response.json())
      .then((data) => {
        setimages(data.hits);
        setisloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  console.log(images);
  const submitdata = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={submitdata} className="w-full max-w-sm">
          <div className="flex items-center border-b  border-b-2 border-green-300 py-2">
            <input
              onChange={(element) => setterm(element.target.value)}
              className="appearance-none bg-transparent border-none w-full text-ray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Image Deepanshu..."
            ></input>
            {console.log(term)}
            <button
              type="submit"
              className="flex-shrink-0 bg-green-300 hover:bg-green-300 border-teal-500 hover:border-green-300 text-sm border-4 border-white rounded mr-4 text-white py-1 px-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto">
        {isloading && (
          <div className="text-6xl text-center mt-24 font-bold">Loading...</div>
        )}
        <div>
          {!isloading && images.length === 0 && (
            <div className="text-6xl text-center mt-24 font-bold">
              No Images Found
            </div>
          )}
          {images && <Cards images={images} />}
        </div>
      </div>
    </div>
  );
}

export default App;
