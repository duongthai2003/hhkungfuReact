import { useContext, useEffect, useState } from "react";
import HTTP from "../HTTP";
import { Link } from "react-router-dom";
import { ComponentContext } from "../hook/ComponentContext";

function MoviePopulars() {
  const { setMoviId } = useContext(ComponentContext);

  const [popularMovie, setPopularMovie] = useState();

  const callApiPopular = async () => {
    try {
      const dataItem = await HTTP.get("movies/popular");
      setPopularMovie(dataItem.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callApiPopular();
  }, []);

  return (
    <>
      <div className="pronew_head">
        <h3 className="new_h3">Xem nhiều</h3>
      </div>
      <div className="row product_moreSee">
        <div className="col" style={{ width: "100%" }}>
          <ul className="product_moreSee_list">
            {popularMovie &&
              popularMovie.map((subarray, index) => {
                return (
                  <Link
                    to={`/${subarray._id}`}
                    key={index}
                    onClick={() => {
                      setMoviId(subarray._id);
                    }}
                  >
                    <li className="head_favori_item">
                      <div className="head_favori_item_link" href="">
                        <img
                          src={`${process.env.REACT_APP_PATH_IMG}${subarray.poster}`}
                          alt=""
                          className="head_favori_img"
                        />
                        <h4 className="head_favori_name">
                          {subarray.namefirm}
                        </h4>
                      </div>
                    </li>
                  </Link>
                );
              })}{" "}
          </ul>
        </div>
      </div>
    </>
  );
}
export default MoviePopulars;
