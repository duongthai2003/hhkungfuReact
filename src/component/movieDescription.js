import { useState } from "react";

function MovieDescription({ data }) {
  const [extend, setExtend] = useState();
  const handleExtend = () => {
    if (extend) {
      setExtend(false);
    } else {
      setExtend(true);
    }
  };
  const textDescription = data && data.replace(/\n/g, "<br/>");
  if (document.querySelector(".content_center")) {
    document.querySelector(".content_center").innerHTML = textDescription;
  }
  return (
    <div className="content">
      <div className="content_title">
        <h4 className="content_title_text">Nội dung phim</h4>
      </div>

      <div
        className="content_center"
        style={{ height: `${extend ? "initial" : "124px"}` }}
      ></div>

      <div className="content_hide">
        <div
          className="content_hide_overflow"
          style={{ display: `${extend ? "none" : "block"}` }}
        ></div>
        <span
          className="content_hide_change content_buthide"
          style={{ display: `${extend ? "block" : "none"}` }}
          onClick={handleExtend}
        >
          Thu Gọn...
        </span>
        <span
          className="content_hide_change content_block"
          onClick={handleExtend}
          style={{
            display: `${extend ? "none" : "block"}`,
          }}
        >
          Mở rộng...
        </span>
      </div>
    </div>
  );
}
export default MovieDescription;
