import { Col, Row } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ComponentContext } from "../hook/ComponentContext";

function InfoMovieHeader({ data, lastEpisode }) {
  const { moviId } = useContext(ComponentContext);

  return (
    <>
      <Col span={8} className="l-4 movie_demo c-12">
        <img
          src={process.env.REACT_APP_PATH_IMG + data.poster}
          alt=""
          className="movie_demo_img"
        />
        <div className="movie_demo_watchmove">
          <Link
            to={`/${moviId}/${lastEpisode[lastEpisode.length - 1]?._id}`}
            className="movie_demo_link"
          >
            <i className="movie_demo_iconplay fa-solid fa-play"></i>
            <span className="movie_demo_watch">xem phim</span>
          </Link>
        </div>
      </Col>
      <Col span={16} className="l-8 movie_readinfor">
        <h1 className="movie_readinfor_name">{data.namefirm}</h1>
        <div className="movie_readinfor_time">
          <i className="movie_readinfor_time_icon fa-regular fa-clock"></i>
          <span className="movie_readinfor_time_long"> 20 Phút </span>
        </div>
        <div className="movie_readinfor_tap">
          <span className="movie_readinfor_tap_text"> Mới nhất: </span>
          <span className="movie_readinfor_tap_number">
            {" "}
            Tập {data.LatestEpisode}{" "}
          </span>
        </div>
        <div className="movie_readinfor_loai">
          <span className="movie_readinfor_loai_text">Thể Loại: </span>
          {data.categorys.map((item, index) => {
            return (
              <span key={index} className="movie_readinfor_theloai">
                {item.categoryName}{" "}
              </span>
            );
          })}
        </div>
      </Col>
    </>
  );
}
export default InfoMovieHeader;
