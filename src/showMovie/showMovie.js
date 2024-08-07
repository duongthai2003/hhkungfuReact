import { useContext, useEffect, useRef, useState } from "react";
import { ShowEpisodeCss } from "../css/showEpisodeCss";
import HTTP from "../HTTP";
import { ComponentContext } from "../hook/ComponentContext";
import "@fortawesome/fontawesome-free/js/all";
import { Col, Row, Spin } from "antd";
import MoviePopulars from "../component/moviePopulars";
import { InfoCss } from "../css/infoCss";
import MovieDescription from "../component/movieDescription";
import { Link, useParams } from "react-router-dom";
import Login from "../component/login";

const saveloco = "SAVE_XEM_PHIM";
/*@2*/ export const config = JSON.parse(localStorage.getItem(saveloco)) || {};
/*@3*/ export const setconfig = (key, value) => {
  config[key] = value;
  localStorage.setItem(saveloco, JSON.stringify(config)); //lưu vào localStorage: bộ nhớ cục bộ
};
function ShowMovie() {
  const videoTag = useRef();
  const inputVideoRange = useRef();
  const route = useParams();

  const videoElement = videoTag && videoTag.current;
  const {
    episodeId,
    setEpisodeId,
    moviId,
    setMoviId,
    currentUser,
    setShowModalLoggin,
  } = useContext(ComponentContext);
  const [data, setData] = useState([]);
  const [isplay, setIsPlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTimeRunning, setCurrentTimeRunning] = useState("00 : 00");
  const [videoDuration, setVideoDuration] = useState("00 : 00");
  const [isSetting, setIsSetting] = useState(false);
  const [isSpeedSetting, setIsSpeedSetting] = useState(false);
  const [speedvalue, setSpeedvalue] = useState(1);
  const [isQuality, setIsQuality] = useState(false);
  const [qualityValue, setqualityValue] = useState("tự động");
  const [loading, setLoading] = useState(false);

  const videoSpeedArrays = [0.25, 0.5, 0.75, 1, 1.5, 1.75, 2];
  const videoQualityArray = ["720p", "480p", "360p", "240p", "144p", "tự động"];

  const callApiAnEpisode = async () => {
    try {
      const episode = await HTTP.get(`/episode/anEpisode/${episodeId}`);
      setData(episode.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const DataVideo = data && data.episode;

  const handlePlayfirm = () => {
    if (isplay) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  };
  const handleClickOnVideo = () => {
    if (isplay) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  };

  // dat envent khi bam cac phim
  const handleFirmOnKeyDown = (e) => {
    console.log(e.which);
    switch (e.which) {
      case 32:
        e.preventDefault();
        if (isplay) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
        break;
      case 37: //37 = keyleft :  la so hieu cua phim
        videoElement.currentTime === 0
          ? (videoElement.currentTime = 0)
          : (videoElement.currentTime = videoElement.currentTime - 10);
        break;
      case 38: //38 = keyup
        e.preventDefault();
        videoElement.volume < 1
          ? (videoElement.volume = (videoElement.volume + 0.1).toFixed(1))
          : (videoElement.volume = 1);
        // xemphim.choosevolumicon();
        break;
      case 39: //39 = keyright :  phim phai
        videoElement.currentTime = videoElement.currentTime + 10;
        break;
      case 40: //40 = keydown
        e.preventDefault();
        videoElement.volume > 0
          ? (videoElement.volume = (videoElement.volume - 0.1).toFixed(1))
          : (videoElement.volume = 0);

        // xemphim.choosevolumicon();
        break;
    }
    setconfig("volumnumber", videoElement.volume);
    // volumeinput.value = config.volumnumber * 100;
  };

  const handleFullScreen = (e) => {
    if (isFullscreen) {
      setIsFullscreen(!isFullscreen);
      document.exitFullscreen(); //để thóa khỏi toàn màn hình
    } else {
      setIsFullscreen(true);
      document?.querySelector(".phim").requestFullscreen();
    }
  };

  // xu li thoi gian phat
  const handleOntimeUpdaet = () => {
    if (videoElement.duration) {
      const timecurrent = Math.floor(
        (videoElement.currentTime / videoElement.duration) * 100
      );
      inputVideoRange.current.value = timecurrent;
    }

    handleTimeUpdate(videoElement.currentTime, setCurrentTimeRunning);
  };
  // tua o input
  const handleInputFirmRangeChange = () => {
    const changeinput =
      (videoElement.duration / 100) * inputVideoRange.current.value;
    videoElement.currentTime = changeinput;
  };

  const handleTimeUpdate = (currtime, setStateTime) => {
    // let currtime = videoElement && videoElement.duration;
    let seconds = Math.floor(currtime % 60);
    let minutes = Math.floor(currtime / 60) % 60;
    let hours = Math.floor(currtime / 3600);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    if (hours === "00") {
      setStateTime(`${minutes} : ${seconds}`);
    } else {
      setStateTime(`${hours} : ${minutes} : ${seconds}`);
    }
  };

  const handleClickSettingIcon = () => {
    if (isSetting) {
      setIsSetting(false);
    } else {
      setIsSetting(true);
    }
  };

  const handleClickSpeed = () => {
    if (isSpeedSetting) {
      setIsSpeedSetting(false);
    } else {
      setIsSpeedSetting(true);
      setIsSetting(false);
    }
  };

  const handleAddFavouriteList = async () => {
    try {
      currentUser
        ? await HTTP.post("favourite", {
            // userId:
            movieId: moviId,
          })
        : setShowModalLoggin(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApiAnEpisode();
    moviId === "" && setMoviId(route.namefirm);
    episodeId === "" && setEpisodeId(route.episode);
  }, [episodeId]);

  useEffect(() => {
    videoElement && (videoElement.playbackRate = speedvalue); //video.playbackRate: đặt hoặc trả về tốc độ phát
  }, [speedvalue]);

  return (
    <InfoCss>
      <ShowEpisodeCss className="contarner">
        <div className="fanfage"></div>

        <div className="pro_new" style={{ marginTop: "25px" }}>
          <Row gutter={[24, 24]} className="row">
            <Col span={16} className="gutter-row">
              <div
                className="phim"
                tabIndex={0} // phair cho cais nayf vao thif nos ms nhan onKeyUp vaf down
                onKeyDown={(e) => {
                  handleFirmOnKeyDown(e);
                }}
              >
                <video
                  ref={videoTag}
                  // autoPlay={true}
                  src={
                    process.env.REACT_APP_PATH_EPISODEFIRM + DataVideo?.nameFile
                  }
                  className="video"
                  onPlay={() => {
                    setIsPlay(true);
                  }}
                  onPause={() => {
                    setIsPlay(!isplay);
                  }}
                  onClick={handleClickOnVideo}
                  onDoubleClick={(e) => {
                    handleFullScreen(e);
                  }}
                  onTimeUpdate={(e) => {
                    handleOntimeUpdaet();
                    // handleTimeUpdate();
                  }}
                  onLoadedData={(e) => {
                    handleTimeUpdate(e.target.duration, setVideoDuration);
                    setLoading(false);
                  }}
                  onLoadStart={() => {
                    setLoading(true);
                  }}
                >
                  {" "}
                </video>
                <Spin
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                  }}
                  spinning={loading}
                />
                <div className="phim_navbar">
                  <div className="navbar_botom_overlay"></div>
                  <input
                    className="navbar_list_input"
                    type="range"
                    defaultValue="0"
                    step="1"
                    min="0"
                    max="100"
                    ref={inputVideoRange}
                    onChange={handleInputFirmRangeChange}
                  />
                  <div className="navbar_list">
                    <div className="navbar_list_item navbar_list_item-1">
                      <div
                        className={`icon navbar_list_playpause ${
                          isplay ? "playing" : ""
                        }`}
                        onClick={handlePlayfirm}
                      >
                        <i className=" video_play fa-solid fa-play"></i>
                        <i className="video_pause fa-solid fa-pause"></i>
                      </div>

                      <div className="icon video_volume">
                        <div className="volume_chill">
                          <i className="  volume_hight fa-solid fa-volume-high"></i>
                          <i className="  volume_low fa-solid fa-volume-low"></i>
                          <i
                            className="  volume_2 ti-volume"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <i className="  volume_not fa-sharp fa-solid fa-volume-xmark"></i>
                        </div>
                        {/* <!-- <div className="vo_input"> --> */}
                        <input
                          type="range"
                          name=""
                          id=""
                          className="volume_input"
                          defaultValue="100"
                          max="100"
                          min="0"
                          step="10"
                        />
                        {/* <!-- </div> --> */}
                      </div>
                      <div className="video_time">
                        <span className="video_current_time_phut">
                          {currentTimeRunning}
                        </span>{" "}
                        /{" "}
                        {/* <span className="video_current_time_giay">00</span> / */}
                        <span className="video_duration_time_phut">
                          {videoDuration}
                        </span>{" "}
                        {/* : <span className="video_duration_time_giay">00</span> */}
                      </div>
                    </div>
                    <div className=" navbar_list_item">
                      <div
                        className="icon navbar_list_item_setting"
                        onClick={handleClickSettingIcon}
                      >
                        <i className="  video_setting fa-solid fa-gear"></i>
                      </div>
                      <ul
                        className={`setting_lis ${isSetting ? "disbloc" : ""}`}
                      >
                        <li className="setting_item">
                          <div>
                            <i className="setting_item_icon fa-regular fa-compass"></i>
                            <span className="setting_item_name">chú thích</span>
                          </div>
                          <div className="setting_item_chooose">
                            <input
                              type="radio"
                              className="setting_item_input"
                            />
                          </div>
                        </li>
                        <li
                          className="setting_item setting_item_tocdo"
                          onClick={handleClickSpeed}
                        >
                          <div>
                            <i className="setting_item_icon fa-regular fa-circle-play"></i>
                            <span className="setting_item_name">
                              tốc độ phát{" "}
                            </span>
                          </div>
                          <div className="setting_item_chooose">
                            <span className="setting_item_note setting_item_note_tocdo">
                              {speedvalue}
                            </span>
                            <i className="setting_item_icon-right fa-solid fa-angle-right"></i>
                          </div>
                        </li>
                        <li className="setting_item setting_item-phude">
                          <div>
                            <i className="setting_item_icon fa-regular fa-closed-captioning"></i>
                            <span className="setting_item_name">phụ đề</span>
                          </div>
                          <div className="setting_item_chooose">
                            <span className="setting_item_note">tắt</span>
                            <i className="setting_item_icon-right fa-solid fa-angle-right"></i>
                          </div>
                        </li>
                        <li
                          className="setting_item setting_item-chatluong"
                          onClick={() => {
                            setIsQuality(true);
                            setIsSetting(false);
                          }}
                        >
                          <div>
                            <i className="setting_item_icon fa-solid fa-bars"></i>
                            <span className="setting_item_name">
                              chất lượng
                            </span>
                          </div>
                          <div className="setting_item_chooose">
                            <span className="setting_item_note setting_item_note_chatluong">
                              {qualityValue}
                            </span>
                            <i className="setting_item_icon-right fa-solid fa-angle-right"></i>
                          </div>
                        </li>
                      </ul>
                      <ul
                        className={`setting_option tocdo_list ${
                          isSpeedSetting ? "disbloc" : ""
                        }`}
                      >
                        <li
                          className="tocdo_item_back check_icon tocdo_item"
                          onClick={() => {
                            setIsSetting(true);
                            setIsSpeedSetting(false);
                          }}
                        >
                          <i className="setting_item_icon fa-solid fa-angle-left"></i>
                          <span className="setting_item_name">tốc độ phát</span>
                        </li>
                        {videoSpeedArrays.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="tocdo_item"
                              onClick={() => {
                                setSpeedvalue(item);
                                setIsSpeedSetting(false);
                                setIsSetting(true);
                              }}
                            >
                              {item}
                              {speedvalue === item && (
                                <span className="check_icon">
                                  <i className="setting_chek fa-solid fa-check"></i>
                                </span>
                              )}{" "}
                            </li>
                          );
                        })}
                      </ul>
                      <ul
                        className={`setting_option resorutio ${
                          isQuality ? "disbloc" : ""
                        }`}
                      >
                        <li
                          className="chatluong_item_back check_icon_cl chatluong_item"
                          onClick={() => {
                            setIsQuality(false);
                            setIsSetting(true);
                          }}
                        >
                          <i className="setting_item_icon fa-solid fa-angle-left"></i>
                          <span className="setting_item_name">chat luong</span>
                        </li>

                        {videoQualityArray.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="chatluong_item"
                              onClick={() => {
                                setqualityValue(item);
                                setIsQuality(false);
                                setIsSetting(true);
                              }}
                            >
                              {item}
                              {qualityValue === item && (
                                <span className="check_icon_cl">
                                  <i className="setting_chek fa-solid fa-check"></i>
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      <div
                        className={`overlay_seting ${
                          isSetting
                            ? "disbloc"
                            : isSpeedSetting
                            ? "disbloc"
                            : isQuality
                            ? "disbloc"
                            : ""
                        }`}
                        onClick={() => {
                          setIsSpeedSetting(false);
                          setIsSetting(false);
                          setIsQuality(false);
                        }}
                      ></div>
                      <div
                        className="icon navbar_list_item_full"
                        onClick={handleFullScreen}
                      >
                        <i className="fa-solid fa-expand"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="introduce">
                <div className="introduce_name">
                  <div
                    className="favourite_icon"
                    onClick={handleAddFavouriteList}
                  >
                    <i className="favourite_icon_plus fa-solid fa-plus"></i>
                  </div>
                  <div className="introduce_name_phim">
                    {DataVideo?.nameEpisodes}
                  </div>
                </div>

                <div
                  className="introduce_tap tapphim"
                  style={{ marginTop: "35px" }}
                >
                  <div className="tapphim_nabar">
                    <a href=" " className="tapphim_nabar_link">
                      <i className="tapphim_nabar_icon fa-solid fa-layer-group"></i>
                      FULL HD
                    </a>
                  </div>
                  <ul className="tapphim_list">
                    {data?.allEpisodesMovie?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="tapphim_item "
                          onClick={() => {
                            setEpisodeId(item._id);
                          }}
                        >
                          <Link
                            to={`/${item?.movieId}/${item._id}`}
                            className="tapphim_item_link"
                          >
                            {item.episodesNum}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <MovieDescription
                  data={
                    DataVideo?.movieId && DataVideo?.movieId[0]?.description
                  }
                />
              </div>
            </Col>
            <Col span={8} className="gutter-row">
              <MoviePopulars />
            </Col>
          </Row>
        </div>

        <Login />
      </ShowEpisodeCss>
    </InfoCss>
  );
}
export default ShowMovie;
