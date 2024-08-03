import styled from "styled-components";

export const InfoCss = styled.div`
  * {
    box-sizing: inherit;
  }
  html {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }
  .app {
    background-color: #1f1f26;
  }
  .head {
    background-color: #000;
  }
  .logo {
    width: 325px;
    height: 80px;
  }
  .head_logo {
    background: url(https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2021/12/Logo.jpg?fit=400%2C100&ssl=1)
      no-repeat center;
    background-size: auto;
    background-size: contain;
    width: 100%;
    height: 100%;
    display: block;
  }
  .row.primari {
    align-items: center;
    justify-content: space-between;
  }
  .head_seach {
    display: flex;
    width: 43%;
    height: 40px;
    align-items: center;
    border-radius: 50px;
    background: linear-gradient(0, #cac0c0, #a48e8e);
  }
  head_seach_icon {
    color: #000;
    padding: 0 20px;
    line-height: 40px;
    font-size: 20px;
  }
  .head_seach_look {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 20px;
    border-radius: 50px;
    background-color: transparent;
  }
  .head_seach_inut {
    width: 85%;
    height: 100%;
  }
  .head_seach_icon {
    padding: 5px 10px;
    margin-left: 20px;
  }
  .favorite {
    background-color: #333;
    padding: 5px 10px;
    color: #fff;
    border-radius: 50px;
    font-size: 15px;
    position: relative;
    margin: 0 50px;
    cursor: pointer;
  }
  .favorite_icon {
    padding: 0 10px;
  }
  .favorite_soluong {
    background-color: blue;
    border-radius: 50%;
    font-size: 13px;
    margin: 0 10px;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
  }
  .favorite_notification {
    position: absolute;
    background-color: #323039;
    right: 0;
    top: calc(100% + 15px);
    overflow: hidden;
    min-width: 300px;
    display: none;
    transition: all 0.5s ease;
    z-index: 1;
  }
  .favorite_notification_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .favorite_notification_head::before {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid rgb(168, 161, 161);
    right: -40%;
  }
  .favorite_notification_name {
    margin: 15px 20px 0;
    padding-bottom: 15px;
    background: var(--linner);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-transform: uppercase;
    border-bottom: 2px solid var(--linner);
    position: relative;
  }
  .favorite_notification_name::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: auto;
    padding: 1px;
    background: var(--linner);
    border-radius: 50px;
  }
  .favorite_notification_delete i {
    padding: 0 10px;
    font-size: 10px;
  }
  .favorite_notification_delete {
    margin: 0 10px;
    background-color: #a04444;
    padding: 5px;
    border-radius: 8px;
    font-size: 12px;
    text-transform: capitalize;
  }
  .favorite_notification_list {
    margin: 10px;
    box-shadow: 0 0 2px #fff;
    list-style: none;
  }
  .same {
    font-weight: 400;
    font-size: 22px;
    padding: 10px 15px;
    text-align: center;
  }
  .favorite_notification_yes,
  .favorite_notification_textdele {
    display: none;
  }
  .notidisplay {
    display: block;
  }
  .favorite_notification_item_name {
    margin: 0 10px;
  }
  .favorite_notification_img {
    width: 50px;
    height: 65px;
    object-fit: contain;
  }
  .img {
    width: 50px;
    height: 65px;
    overflow: hidden;
  }
  .favorite_notification_item_link {
    display: flex;
    text-decoration: navajowhite;
    color: #fff;
    padding: 5px 10px;
    background-size: 200% 100%;
    background-image: linear-gradient(
      to left,
      #1c1e1d 0%,
      #736b6b 50%,
      #333 50%
    );
    transition: all 0.5s ease;
  }
  .favorite_notification_item_link:hover {
    background-position: right center;
  }

  .favorite_notification_item_link:hover .favorite_notification_img {
    transform: scale(1.1);
    transition: 0.3s linear;
  }
  .favorite_notification_item_link:hover .favorite_notification_item_name {
    background: var(--linner);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    transition: 0.5s linear;
  }
  .nabar {
    background-color: #343039;
    position: relative;
  }
  .nabar_list {
    display: flex;
    list-style: none;
  }
  .nabar_item {
    padding: 12px 15px;
    text-transform: capitalize;
    margin: 0 2px;
    animation: hien linear 1s;
  }
  .nabar_link {
    color: #aeaeb0;
    text-decoration: none;
  }
  .nabar_item:hover {
    animation: textled 1s linear infinite alternate;
    background-color: rgba(206, 197, 197, 0.5);
    transition: 1s;
  }
  @keyframes textled {
    from {
      text-shadow: 0 0 5px rgb(14, 224, 49), 0 0 10px rgb(14, 224, 49),
        0 0 40px rgb(14, 224, 49);
    }
    to {
      text-shadow: 0 0 5px rgb(28, 14, 224), 0 0 10px rgb(28, 14, 224),
        0 0 40px rgb(28, 14, 224);
    }
  }
  .movie_infor {
    display: flex;
    margin-top: 50px;
  }

  .movie_demo {
    overflow: hidden;
    position: relative;
    border-bottom-right-radius: 21px;
    border-bottom-left-radius: 21px;
  }

  .movie_demo_link:hover {
    transition: all 0.4s ease-in-out;
    background-position: 100% 0;
  }
  .movie_demo_watchmove {
    width: 100%;
    height: 60px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(6, 6, 6, 0.24) 30%,
      rgba(0, 0, 0, 0.8) 100%
    );
    position: absolute;
    bottom: 0;
    right: 0%;
    justify-content: center;
    display: flex;
  }
  .movie_demo_link {
    display: flex;
    justify-content: center;
    padding: 10px 2px;
    background-size: 300% 100%;
    background-image: linear-gradient(
      to right,
      #ffbb00,
      #e43603,
      #ff6290,
      #ff5000
    );
    width: 52%;
    position: absolute;
    text-decoration: none;
    color: #fff;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(229, 66, 10, 0.75);
    border-radius: 8px;
  }
  .movie_demo_iconplay {
    padding: 0 10px;
  }
  .movie_demo_img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  .movie_readinfor {
    margin-left: 6%;
    color: #fff;
    line-height: 25px;
  }
  .movie_readinfor_name {
    font-weight: 300;
    font-size: 30px;
    margin: 0;
  }
  .movie_readinfor_time {
    font-size: 13px;
    margin-top: 10px;
  }
  .movie_readinfor_time_long {
    padding: 0 6px;
  }
  .movie_readinfor_loai,
  .movie_readinfor_tap {
    font-size: 13px;
  }
  .movie_readinfor_tap_number {
    padding: 2px 10px;
    border-radius: 4px;
    background-image: linear-gradient(to left, #8e2de2 0%, #0883a6 100%);
  }
  .movie_readinfor_theloai {
    color: #688aac;
    text-transform: capitalize;
    /* margin: 0 5px; */
  }
  .tapphim {
    margin-top: 50px;
  }
  .tapphim_nabar_link {
    color: #fff;
    text-decoration: none;
    background-color: #484851;
    padding: 10px 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    font-weight: 300;
    display: block;
    width: 18%;
  }
  .tapphim_nabar_icon {
    padding: 0 10px 0 0;
  }
  .tapphim_nabar_link::before {
    content: "";
    border-bottom: 1px solid #333;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .tapphim_nabar {
    position: relative;
  }
  .tapphim_item_link {
    padding: 10px;
    background-color: #2c2c31;
    text-decoration: none;
    color: #fff;
    border-radius: 7px;
    width: 100%;
    display: block;
    text-align: center;
    margin: 5px;
    background-image: linear-gradient(
      to left,
      #ff8a00 0%,
      #ff2070 49%,
      #2c2c31 50%
    );
    background-size: 200% 100%;
  }

  .tapphim_item_link:hover {
    filter: brightness(0.9);
    background-position: right center;
    transition: 0.3s;
  }
  .tapphim_item {
    width: 10%;
    display: flex;
    flex-wrap: wrap;
  }
  .tapphim_list {
    display: flex;
    list-style: none;
    padding: 15px 5px;
    flex-wrap: wrap;
    width: 100%;
    background-color: #1e1e24;
  }
  .content {
    box-shadow: 0 0 1px #fff;
    margin: 10px 0px 30px;
    padding: 0 20px;
    background-color: #1e1e24;
  }
  .content.xemphim {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .content.xemphim_click {
    width: initial;
    height: initial;
    opacity: 1;
  }
  .introduce .content {
    margin-top: 10px;
  }
  .content_title {
    padding: 10px 0;
    font-size: 22px;
    position: relative;
  }
  .content_title_text {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ff8a00),
      to(#da1b60)
    );
    display: inline-block;
    position: relative;
    background-image: linear-gradient(
      to right,
      rgb(255, 138, 0) 0%,
      rgb(218, 27, 96) 100%
    );
    background-clip: border-box;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: var(--linner);
  }
  .content_title_text::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -10px;
    padding: 0.4px;
    background: var(--linner);
  }
  .content_title::before {
    content: "";
    position: absolute;
    border-bottom: 0.3px solid #595454;
    width: calc(100% + 20px);
    bottom: 0;
  }
  .content_center {
    padding: 20px 0;
    color: #989898;
    line-height: 25px;
    height: 124px;
    overflow: hidden;
    font-weight: 300;
  }
  .content_hide {
    position: relative;
    padding: 10px 0;
    color: #989898;
    font-size: 14px;
    cursor: pointer;
  }
  .content_hide_overflow {
    height: 49px;
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(30, 30, 36, 0.28) 0%,
      #15151a 100%
    );
  }
  .content_buthide {
    display: none;
  }
  .content_hide_change:hover {
    background-image: var(--linner);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
  }
  .mt-seacher {
    width: 40px;
    background-color: #fff;
    z-index: 2;
    border-radius: 30px;
    display: flex;
    overflow: hidden;
    height: 40px;
    align-items: center;
    position: absolute;
    right: 18%;
    transition: all 0.5s ease;
  }
  .mt-icon {
    color: #000;
    font-size: 20px;
    padding: 0 11px;
  }
  .mt-input {
    padding: 0 10px;
    outline: none;
    border: none;
  }

  .mt-input ~ .mt-icon {
    opacity: 0;
    transform: translate(50px);
    transition: 1s;
  }
  .mt-input:valid ~ .mt-icon {
    color: black;
    opacity: 1;
    transform: translate(0px);
  }
  .onwidth {
    width: 300px;
    transition: 0.5s ease;
  }
  .mt-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: none;
  }
  .mt-seacher {
    display: none;
  }
`;
