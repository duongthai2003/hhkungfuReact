import { Col } from "antd";
import { useContext } from "react";
import { ComponentContext } from "../hook/ComponentContext";
import { Link } from "react-router-dom";

function FirmItem({ data }) {
  const { moviId, setMoviId } = useContext(ComponentContext);
  const handleClick = () => {
    setMoviId(data._id);
  };
  return (
    <Col span={6} className="gutter-row">
      <div className="product_item" onClick={handleClick}>
        <Link to={`/${data._id}`}>
          <div className="new_product_tap">Tập {data.LatestEpisode}</div>
          <img
            src={process.env.REACT_APP_PATH_IMG + data.poster}
            alt=""
            className="new_product_img"
          />
          <div className="new_product_name_paren">
            <div className="new_product_name">{data.namefirm}</div>
          </div>
        </Link>
      </div>
    </Col>
  );
}
export default FirmItem;
