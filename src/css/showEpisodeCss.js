import styled from "styled-components";

export const ShowEpisodeCss = styled.div`
  .setting_lis.disbloc,
  .tocdo_list.disbloc,
  .resorutio.disbloc,
  .overlay_seting.disbloc {
    display: block;
  }
  .phim {
    position: relative;
  }
  .video {
    width: 100%;
    height: 100%;
    // max-height: 450px;
    // object-fit: cover;
  }
  .phim_navbar {
    position: absolute;
    bottom: 0;
    color: #fff;
    width: 100%;
    background-color: #000;
    padding: 0 10px;
  }
  .navbar_list_input {
    width: 100%;
  }
  .navbar_list_item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .navbar_list_item-1 {
    width: 50%;
    justify-content: left;
  }
  .navbar_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 17px;
  }
  .icon:hover {
    color: rebeccapurple;
  }

  .video_volume {
    display: flex;
    width: initial;
    height: initial;
    position: relative;
  }

  /* .volume_input, */
  .video_pause,
  .volume_low,
  .volume_not,
  .volume_hight,
  .volume_2,
  .video_volume.voluming .volume_hight,
  .navbar_list_playpause.playing .video_play {
    display: none;
  }

  .video_volume.voluming3 .volume_low,
  .video_volume.voluming3 .volume_hight,
  .video_volume.voluming2 .volume_not,
  .video_volume.voluming2 .volume_hight {
    display: none;
  }

  .video_volume.voluming4 .volume_hight,
  .video_volume.voluming3 .volume_2,
  .video_volume.voluming2 .volume_low,
  .video_volume.voluming .volume_not,
  .navbar_list_playpause.playing .video_pause {
    display: block;
  }
  .video:fullscreen {
    width: 500px;
  }
  .video_time {
    font-size: 14px;
    padding-left: 10px;
  }
  .volume_input {
    width: 0;
    opacity: 0;
    scale: 0.8;
    transition: all 0.5s ease;
  }

  .volume_chill {
    padding: 10px 10px;
  }
  .vo-hover {
    opacity: 1;
    width: 72px;
    transition: 0.5s ease;
    background-color: #fff;
  }
  .setting_lis {
    width: 230px;
    position: absolute;
    list-style: none;
    bottom: 180%;
    right: 15%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 10px;
    z-index: 3;
    display: none;
  }
  .resorutio,
  .tocdo_list {
    z-index: 3;
  }
  .setting_item_icon {
    margin-right: 10px;
    font-size: 13px;
  }
  .setting_item {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .setting_item:hover {
    background-color: rgb(90, 86, 86);
  }
  .setting_item_name {
    font-size: 14px;
  }
  .setting_item_note {
    font-size: 12px;
  }
  .setting_item_icon-right {
    margin-left: 3px;
    font-size: 12px;
  }

  .setting_option {
    bottom: 190%;
    // width: 240px;
    position: absolute;
    list-style: none;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: none;
  }
  .tocdo_item,
  .chatluong_item {
    padding: 10px 20px;
    font-size: 15px;
  }
  .tocdo_item:hover,
  .chatluong_item:hover {
    background-color: rgb(102, 99, 95);
    cursor: pointer;
  }
  .fa-solid.fa-check {
    float: right;
    margin-right: 20px;
  }
  .tocdo_item_back,
  .chatluong_item_back {
    text-align: center;
    margin: 10px 0 10px;
    border-bottom: 0.2px solid #fff;
    height: 30px;
  }
  .icon.navbar_list_item_setting {
    z-index: 3;
  }
  .overlay_seting {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
  }
  .introduce {
    margin-top: 25px;
  }
  .introduce_name {
    background-color: #2b2c31;
    padding: 15px 20px;
    display: flex;
    align-items: end;
    gap: 25px;
  }
  .favourite_icon {
    border-width: 18px 12px;
    border-style: solid;
    width: 20px;
    height: 30px;
    border-color: #d75a4a #d75a4a #c10f0f00;
  }
  .favourite_icon_plus {
    background-color: #1fa41f;
    border-radius: 50%;
    font-size: 15px;
    width: 20px;
    height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .introduce_name_phim {
    color: #fff;
    margin: 20px 0 8px;
    font-size: 21px;
    font-weight: 300;
  }
  .introduce_name_conten {
    color: #fff;
    text-transform: capitalize;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
  }
  .introduce_name_conten:hover {
    color: rgb(184, 170, 53);
  }
  .setting_chek {
    float: right;
    margin-right: 20px;
  }
`;
