import { useEffect, useRef, useState } from "react";
import HTTP from "../HTTP";
import { Col, Row } from "antd";
import FirmItem from "../component/firmItem";
import ShowMovieDate from "../component/showMovieDate";
import MoviePopulars from "../component/moviePopulars";

function Home() {
  const [data, setData] = useState();
  const [movieOfDate, setMovieOfDate] = useState([]);
  const callApiMovie = async () => {
    try {
      const dataItem = await HTTP.get("movies?start=0&limit=10");
      await setData(dataItem.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApiMovie();
  }, []);

  return (
    <div className="contarner">
      <div className="fanfage"></div>

      <div className="pro_new">
        <Row gutter={[16, 12]}>
          <Col span={16} className="gutter-row">
            <div className="pronew_head">
              <h3 className="new_h3">Mới Nhất</h3>
            </div>
            <Row className="row product_home" gutter={[16, 12]}>
              {data &&
                data.items.map((item, index) => {
                  return <FirmItem data={item} key={index} />;
                })}
            </Row>
            <div className="see_all">
              <a href="" className="see_all_link">
                Xem tất cả
              </a>
            </div>

            <div className="showtimes">
              <div className="showtimes_navbar">
                <a href="" className="showtimes_navbar_title">
                  <span className="showtimes_navbar_title_name">
                    {" "}
                    Lịch chiếu{" "}
                  </span>
                </a>

                <ul className="showtimes_date">
                  <ShowMovieDate data={data} arrayMovie={setMovieOfDate} />
                </ul>
              </div>
            </div>

            <Row gutter={[16, 24]} className="row product_date">
              {movieOfDate.map((item, index) => {
                return <FirmItem data={item} key={index} />;
              })}
            </Row>
          </Col>
          <Col span={8} className="gutter-row">
            <MoviePopulars />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
