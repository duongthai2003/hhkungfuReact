import { Button, Dropdown, Row, Space } from "antd";
import "@fortawesome/fontawesome-free/js/all";
import { useContext, useEffect, useRef, useState } from "react";
import { ComponentContext } from "../hook/ComponentContext";
import HTTP from "../HTTP";
import { LoggedStyle, LogginBtnStyle } from "../css/defaultLayoutCss";
import Login from "../component/login";

import { Link } from "react-router-dom";
function DefautLayout({ children }) {
  const {
    loginSuccess,
    setLoginSuccess,
    setMoviId,
    showModalLoggin,
    setShowModalLoggin,
    setSelectCategoryId,
  } = useContext(ComponentContext);

  const [activeFavorite, setActiveFavorite] = useState(false);
  const [category, setCategory] = useState();
  const [favourite, setFavourite] = useState();

  const [arrouwUp, setArrouwUp] = useState(false);
  const bodyelemen = useRef();

  const handelFavoriteList = () => {
    if (activeFavorite) {
      setActiveFavorite(false);
    } else {
      setActiveFavorite(true);
    }
  };
  const callApiCategory = async () => {
    try {
      const dataItem = await HTTP.get("category?limit=10&start=0");
      setCategory(dataItem.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const callApifavourite = async () => {
    try {
      const dataItem = await HTTP.get("favourite");
      setFavourite(dataItem.data.data.items);
    } catch (err) {
      console.log(err);
      setFavourite();
    }
  };
  const handleShowLoggin = () => {
    if (showModalLoggin) {
      setShowModalLoggin(false);
    } else {
      setShowModalLoggin(true);
    }
  };

  useEffect(() => {
    callApiCategory();
  }, []);
  useEffect(() => {
    callApifavourite();
  }, [loginSuccess]);

  const bodyHeight = bodyelemen.current && bodyelemen.current.offsetHeight;

  document.onscroll = () => {
    const onscrol = window.scrollY;
    const heightpercent = Math.floor((onscrol / bodyHeight) * 100);

    heightpercent > 50 ? setArrouwUp(true) : setArrouwUp(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setLoginSuccess(false);
  };

  const items = [
    {
      key: "1",
      label: "Đăng xuất",
      onClick: handleLogout,
    },
  ];

  return (
    <>
      <div className="head">
        {/* {/* <div className="grid wide"> */}
        <Row className="row them">
          <div className="logo">
            <a href="/" className="head_logo"></a>
          </div>
          <div className="head_seach">
            <div className="head_seach_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="head_seach_inut">
              <input
                className="head_seach_look"
                type="text"
                placeholder="nhap tu khoa ?"
              />
            </div>
          </div>
          <div className="seach_overlay"></div>
          <div className="mbiseacher">
            <i className="mbicon fa-solid fa-magnifying-glass"></i>
            <input
              className="mbinput"
              type="text"
              placeholder="nhap tu khoa ?"
              required
            />
            <i className="mbicon mbicon_dele fa-solid fa-circle-xmark"></i>
          </div>
          <div className="head_favorite" onClick={handelFavoriteList}>
            <div className="head_favorite_tab1">
              <i className="head_favorite_save fa-solid fa-bookmark"></i>
              <span className="head_favorite_text">Yêu Thích</span>
              {favourite && (
                <div className="head_favorite_soluong">
                  <span className="head_favorite_so">
                    {favourite && favourite.length}
                  </span>
                </div>
              )}
            </div>
            <div
              className={`head_favorite_tab20 ${activeFavorite && "activiti"}`}
            >
              <div
                className="head_favorite_tab2"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="head_favorite_bam">
                  <h3 className="head_favorite_buton ">
                    <span className="linnerbefor">Bookmarks</span>
                  </h3>
                  {/* <div className="head_favorite_buton_delete">
                    <i className="fa-solid fa-x"></i>
                    Remove all
                  </div> */}
                </div>
                <ul className="head_favori_list">
                  {!favourite ? (
                    <div className="head_favori_list_not">
                      <h2 className="head_favori_list_notitem">
                        Nothing found!
                      </h2>
                    </div>
                  ) : (
                    <div className="yes head_favori_list_yes">
                      {favourite &&
                        favourite.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="head_favori_item"
                              onClick={() => {
                                setMoviId(item.movieId?._id);
                              }}
                            >
                              <Link to={`/${item.movieId?._id}`}>
                                <div className="head_favori_item_link">
                                  <img
                                    src={`${
                                      process.env.REACT_APP_PATH_IMG +
                                      item.movieId?.poster
                                    }`}
                                    alt=""
                                    className="head_favori_img"
                                  />
                                  <h4 className="head_favori_name">
                                    {item.movieId?.namefirm}
                                  </h4>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                    </div>
                  )}
                  {/* <div className="head_favori_list_delete ">
                    <h2>Your bookmark has been deleted!</h2>
                  </div> */}
                </ul>
              </div>
            </div>
          </div>
          {loginSuccess ? (
            <LoggedStyle>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Button className="logged">
                  {/* <div className="logged"> */}
                  <i className="fa-solid fa-user"></i>
                  {/* </div>{" "} */}
                </Button>
              </Dropdown>
            </LoggedStyle>
          ) : (
            <LogginBtnStyle>
              <button className="logginBtn" onClick={handleShowLoggin}>
                Đăng Nhập
              </button>
            </LogginBtnStyle>
          )}

          <Login isOpen={showModalLoggin} setIsOpen={setShowModalLoggin} />
        </Row>
      </div>
      <div ref={bodyelemen} className="body" style={{ flex: "1" }}>
        <div
          className={`arrow_up`}
          style={{ display: `${arrouwUp ? "block" : "none"}` }}
        >
          <a href="#" className="arrow_up_link">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>

        <div className="grid wide">
          <Row>
            <div className="naba">
              <div className="mobimenu">
                <i className="mobimenu_icon fa-solid fa-bars"></i>
              </div>

              <ul className="naba_lis">
                {category &&
                  category.items.map((subarray, index) => {
                    return (
                      <li
                        className="naba_item "
                        key={index}
                        onClick={() => {
                          setSelectCategoryId(subarray._id);
                        }}
                      >
                        <Link
                          Link
                          to={`/category/${subarray._id}`}
                          className=" naba_item_link"
                        >
                          {subarray.categoryName}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Row>

          <div>{children}</div>
        </div>
      </div>
      <div className="botoom">
        <div className="grid wide">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="row"
          >
            <p className="bottom_tex">© Vietsub bởi Hoạt Hình Kungfu Subteam</p>
            <p className="bottom_web">Web phim hhkungfu.tv </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DefautLayout;
