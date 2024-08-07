import { Row, Col, Spin } from "antd";
import MoviePopulars from "../component/moviePopulars";
import FirmItem from "../component/firmItem";
import { useContext, useEffect, useState } from "react";
import HTTP from "../HTTP";
import { ComponentContext } from "../hook/ComponentContext";
import { useParams } from "react-router";

function CategoryMovies() {
  const { selectCategoryId, setSelectCategoryId } =
    useContext(ComponentContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const paramsUrl = useParams();

  const callApiCategoryMovie = async () => {
    try {
      setLoading(true);
      const res = await HTTP.get(`movies/movieOfCategory/${selectCategoryId}`);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    selectCategoryId === "" && setSelectCategoryId(paramsUrl.categoryID);
    callApiCategoryMovie();
  }, [selectCategoryId]);
  return (
    <Row gutter={[16, 24]}>
      <Spin spinning={loading} fullscreen={true} size="large" />
      <Col span={16} clasclassName="gutter-row">
        <div className="pronew_head">
          <h3 className="new_h3">{data?.category?.categoryName}</h3>
        </div>
        <Row className="row product_home" gutter={[16, 12]}>
          {data &&
            data?.items?.map((item, index) => {
              return <FirmItem data={item} key={index} />;
            })}
        </Row>
        <div className="see_all">
          <a href="" className="see_all_link">
            Xem tất cả
          </a>
        </div>
      </Col>
      <Col span={8} clasclassName="gutter-row">
        <MoviePopulars />
      </Col>
    </Row>
  );
}
export default CategoryMovies;
