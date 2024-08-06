import { useContext, useEffect, useState } from "react";
import { InfoCss } from "../css/infoCss";
import { ComponentContext } from "../hook/ComponentContext";
import HTTP from "../HTTP";
import InfoMovieHeader from "../component/infoMovieHeader";
import { Col, Row } from "antd";
import MoviePopulars from "../component/moviePopulars";
import { Link, useParams } from "react-router-dom";
import MovieDescription from "../component/movieDescription";

function InfoMovie() {
  const { moviId, setMoviId, setEpisodeId } = useContext(ComponentContext);
  const [data, setData] = useState();
  const route = useParams();

  const callApiGetanFirm = async () => {
    try {
      const dataFirm = await HTTP.get(`movies/${moviId}`);
      setData(dataFirm.data.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    moviId === "" && setMoviId(route.namefirm);
    moviId && callApiGetanFirm();
  }, [moviId]);

  return (
    <InfoCss>
      <div className="grid wide">
        <Row
          style={{
            backgroundColor: "#15151a",
            borderBottomLeftRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
          className="row"
          gutter={[24, 24]}
        >
          <Col span={16} className="gutter-row">
            <div className=" movie_infor l-12">
              {data && (
                <InfoMovieHeader
                  data={data.movie}
                  lastEpisode={data?.episodes}
                />
              )}
            </div>
            <div className="tapphim">
              <div className="tapphim_nabar">
                <a href=" " className="tapphim_nabar_link">
                  <i className="tapphim_nabar_icon fa-solid fa-layer-group"></i>
                  FULL HD
                </a>
              </div>

              <ul className="tapphim_list">
                {data?.episodes.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="tapphim_item "
                      onClick={() => {
                        setEpisodeId(item._id);
                      }}
                    >
                      <Link to={`./${item._id}`} className="tapphim_item_link">
                        {item.episodesNum}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <MovieDescription data={data?.movie?.description} />
          </Col>
          <Col span={8} className="gutter-row">
            <MoviePopulars />
          </Col>
        </Row>
      </div>
    </InfoCss>
  );
}

export default InfoMovie;
