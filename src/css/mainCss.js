import styled from "styled-components";

export const MainCss = styled.div`
  .grid.wide {
    max-width: 1200px;
    margin: 0 auto;
  }
  .head {
    background-color: #000;
    color: #fff;
    padding: 20px 0 0;
  }

  .logo {
    width: 253px;
    height: 80px;
    text-align: center;
    display: flex;
    margin-left: 73px;
  }
  .head_logo {
    background: url(https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2021/12/Logo.jpg?fit=400%2C100&ssl=1)
      no-repeat center;
    background-size: auto;
    background-size: contain;
    display: block;
    width: 190px;
    height: 63px;
    scale: 1.6;
  }

  .head_seach_inut {
    height: 100%;
    flex: 1;
    position: relative;
    border-radius: 50px;
  }
  .head_seach_look {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 17px;
    padding: 0 16px;
  }
  .head_seach_icon {
    padding: 0 28px;
    color: #000;
    font-size: 23px;
  }
  .head_seach_look {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 17px;
    padding: 0 16px;
    background-image: linear-gradient(0deg, #cac0c0, #a48e8e);
  }
  .them {
    align-items: center;
  }
  .head_seach {
    display: flex;
    align-items: center;
    height: 40px;
    flex: 1;
    border-radius: 50px;
    background-image: linear-gradient(0deg, #cac0c0, #a48e8e);
  }
  .head_seach_icon {
    padding: 0 28px;
    color: #000;
    font-size: 23px;
  }

  .head_favorite {
    display: flex;
    align-items: center;
    // width: 240px;
    margin: 0 30px;
    position: relative;
    cursor: pointer;
  }
  .head_favorite_tab1 {
    display: flex;
    align-items: center;
    padding: 5px 17px 3px 23px;
    background-color: #646168;
    border-radius: 50px;
  }
  .head_favorite_text {
    padding: 0 10px;
    font-size: 15px;
  }
  .head_favorite_soluong {
    width: 25px;
    height: 20px;
    background-color: blue;
    text-align: center;
    border-radius: 50%;
    font-size: 13px;
    line-height: 20px;
  }
  .head_favorite_tab2 {
    position: absolute;
    top: 130%;
    color: #fff;
    z-index: 2;
    background-color: #323039;
    width: 350px;
    box-shadow: 0 0 2px #333;
    border-radius: 5px;
    overflow: hidden;
    right: 13%;
    margin-top: 7px;
    animation: hienlon linear 1s;
    transition: all linear 1s;
    transform-origin: calc(100% - 30px) top;
    will-change: opacity, transform;
  }

  .head_favorite_tab20 {
    display: none;
    animation: hien linear 1s;
    transition: all linear 1s;
  }

  .head_favorite_tab20::before {
    top: 17px;
    right: 46%;
    z-index: 3;
  }
  .head_favorite_bam {
    padding: 15px 0;
    position: relative;
    margin: 0 10px;
  }

  .head_favorite_buton span {
    font-size: 20px;
    background: linear-gradient(
      to right,
      #ff8a00,
      #ff2070
    ); /* chay dai màu chuyển  , taoj mau cho chu bang mau chuyen*/
    -webkit-text-fill-color: transparent; /* chuyển màu chữ phải để transparent thì mói lm cho màu chữ có màu của background dc*/
    -webkit-background-clip: text; /* chọn xem cái màu background xẽ ảnh hưởng vào thành phàn nào*/
    background-clip: text; /* giong tren chọn xem cái màu background xẽ ảnh hưởng vào thành phàn nào*/ /* chrome không hỗ trợ thuộc tính này */
    padding: 0 0 5px 0;
    position: relative;
    float: left; /* de the o ben trai */
  }

  .head_favorite_buton::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 26%;
    border-bottom: 1px solid rgb(168, 161, 161);
  }
  .head_favorite_buton {
    font-size: 16px;
    text-transform: uppercase;
  }
  .head_favorite_buton_delete {
    background-color: #a04444;
    padding: 5px;
    font-size: 12px;
    border-radius: 5px;
    margin: 0 0 5px;
  }
  .head_favorite_buton_delete svg {
    font-size: 10px;
    padding: 0 3px 0;
  }
  .head_favori_list {
    box-shadow: 0 0 2px #fff;
    margin: 0 10px 15px;
    list-style: none;
    border-radius: 5px;
    max-height: 50vh;
    overflow-x: auto;
  }
  .head_favori_item_link {
    display: flex;
    padding: 10px 0;
    text-decoration: none;

    /* tạo cái chức năng khi hover thì nó thu ngắn màu nền lại */

    background-size: 200% 100%; /* đê định kích thước cho cái phần màu khi hover vào nó sẽ chạy sang*/
    background-image: linear-gradient(
      to left,
      #1e1e24 0%,
      #0c0c0e 51%,
      #060808 50%
    );
    /* tao dải màu chạy từ phai sang 
  linear-gradient(từ phai sang, (màu 1 ở bên trái) (độ đậm của màu chiếm sang phai ), (màu 2 ở bên phải) (độ đậm của màu chiếm sang trai ),(màu 3 là mầ xẽ hiên sau khi chạy) (màu loe cua mau 3 nên để 50%);
  */
    transition: all 0.3s ease-in-out; /* thời gian chạy*/
  }
  /* phối hợp với cái trên */
  .head_favori_item_link:hover {
    background-position: right center; /* dùng để quy định hướng chạy bh chỉ chạy đc bbeen phải */
    background-position-x: right; /* 2 cái này gộp lại giống cái trên :dùng để quy định hướng chạy bh chỉ chạy đc bbeen phải*/
    background-position-y: center; /* 2 cái này gộp lại giống cái trên : cái này chua biêt tác dụng*/
  }

  .head_favori_img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  .head_favori_name {
    flex: 1;
    color: #fff;
    padding: 0 10px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 40px;
    line-height: 21px;
    font-size: 15px;
  }
  .head_favori_list_notitem {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    padding: 13px 0;
    display: block;
  }
  .head_favori_list_notitem.head_favori_list_delete {
    display: block;
  }
  .head_favori_list_delete {
    display: none;
  }
  .seach_overlay {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 4;
    display: none;
  }
  /* lm cai tim kiem thu nho bam vao to */
  .mbiseacher {
    display: none;
    align-items: center;
    border-radius: 30px;
    height: 40px;
    transition: 1s;
    width: 40px;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    right: 10%;
    bottom: 94%;
    z-index: 5;
  }
  .mbicon {
    padding: 0 10px;
    color: #000;
    font-size: 23px;
  }
  .mbicon.fa-solid.fa-right-long {
    color: #191919;
  }
  .mbinput {
    border: none;
    background-color: transparent;
    outline: none;
    width: 200px;
    padding: 0 20px;
  }
  .mbicon {
    font-size: 20px;
    padding: 0 12px;
    color: #000;
  }
  .mbiseacher_width {
    width: 300px;
  }

  .mbinput ~ .mbicon {
    transform: translate(50px);
    opacity: 0;
    transition: 1s;
  }
  .mbinput:valid ~ .mbicon {
    /*muon dung dc thi 2 cai phai cungf cap va o the input phai co thuoc tinh required thhi moi chay dc  */
    opacity: 1;
    transform: translate(10px);
    transition: 1s;
    background-color: blue;
  }
  .body {
    background-color: #1f1f26;
  }
  .naba {
    width: 100%;
  }
  .naba_lis {
    display: flex;
    list-style: none;
  }
  .naba_item_link {
    color: #d0d0d0;
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 300;
    width: 100px;
    height: 40px;
    display: block;
    line-height: 40px;
    text-decoration: navajowhite;
    margin: 0 10px;
    text-align: center;
  }
  .naba_item:hover {
    background-color: rgba(206, 197, 197, 0.5);
    animation: vien 1s linear infinite alternate;
    transition: 1s;
  }
  .new_h3 {
    background: linear-gradient(to right, #ff8a00, #ff2070);
    background-clip: border-box;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    display: inline-block;
  }
  .new_h3:nth-child(2) {
    right: -58%;
  }
  .new_h3::before {
    left: 0;
  }
  .row.product_moreSee {
    margin-top: 8px;
  }
  .product_item {
    position: relative;
    border-radius: 5px;
    margin-top: 10px;
    overflow: hidden;
  }
  .product_item a {
    color: #fff;
  }
  .new_product_tap {
    position: absolute;
    padding: 5px 10px;
    top: 3%;
    left: 3%;
    border-radius: 10px 3px 3px;
    font-size: 13px;
    text-transform: capitalize;
    font-weight: 400;
    background-size: 200% 100%;
    background-image: linear-gradient(
      to right,
      #8e2de2 0%,
      #000046 51%,
      #1cb5e0 100%
        /** 50% và 100% ở đây có sự khác biệt 
    nếu là 100% thì nó sẽ chạy kiểu dải màu lm nền
    nếu 50% thì nó xẽ lấy màu cuối làm nền
    */
    );
    transition: 1s;
    z-index: 1;
  }
  /* ket hop */
  .product_item:hover .new_product_tap {
    background-position: right center;
  }
  .hover_truot {
    /* tao cai backgroungd cho tap phim */
    background-image: linear-gradient(
      to left,
      #1e1e24 0%,
      #0c0c0e 51%,
      #060808 50%
    );
    background-size: 200% 100%;
    transition: all 0.5s linear;
  }
  .hover_truot:hover {
    background-position: right center;
  }
  .new_product_img {
    width: 100%;
    height: 278px;
    max-height: 278px;
  }
  .new_product_name {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 16px;
  }
  .new_product_name {
    position: absolute;
    bottom: 5%;
    left: 0;
    font-size: 14px;
    padding: 0 10px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 400;
  }
  .new_product_name_paren {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(6, 6, 6, 0.5) 50%,
      rgb(0, 0, 0) 100%
    );
    padding: 80px 0 0;
  }
  .see_all_link {
    color: #fff;
    text-decoration: none;
    width: 300px;
    background: linear-gradient(
      to right,
      rgba(30, 30, 36, 0.5) 0%,
      rgba(255, 148, 179, 0.2) 100%
    );
    border-radius: 50px;
    padding: 10px 20px;
    text-align: end;
  }
  .see_all {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: end;
  }
  .see_all_link:hover {
    background-color: #000;
    transition: 0.3s linear;
  }
  .showtimes_navbar a {
    color: #fff;
    text-decoration: navajowhite;
    font-size: 16px;
    font-weight: 300;
    display: inline-block;
  }
  .showtimes {
    margin-top: 30px;
  }
  .showtimes_date {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }
  .showtimes_date_item {
    margin: 2px;
    background-color: #222229;
    border-radius: 5px;
    min-width: 108px;
    background-size: 200% 100%;
    background-image: linear-gradient(
      to left,
      #9b9595 0%,
      #4d4a4a 50%,
      rgba(68, 63, 63, 0.5) 100%
    );
    transition: 0.5s linear;
  }
  .showtimes_date_item:hover {
    background-position: right center;
  }

  .showtimes_navbar_title {
    margin-bottom: 20px;
    position: relative;
  }

  .showtimes_navbar_title_name {
    background: var(--linner);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 20px;
    font-weight: 600;
    float: left;
    padding: 10px 0;
  }

  .showtimes_navbar_title_name::before {
    content: "";
    width: 100%;
    padding: 0.5px;
    background: var(--linner);
    position: absolute;
    bottom: 0;
  }
  .showtimes_date_item_link {
    padding: 10px 20px;
    width: 100%;
    color: #fff;
    text-decoration: navajowhite;
    font-size: 16px;
    font-weight: 300;
    display: inline-block;
  }
  .showtimes_date_item_activite {
    background: linear-gradient(to left, #13dfaf 0%, #297c8a 100%);
  }
  .product_moreSee_list .head_favori_item {
    list-style: none;
  }

  .product_moreSee_list {
    box-shadow: 0 0 2px #fff;
  }
  .product_moreSee_list .head_favori_item:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: red;
  }
  .product_moreSee_list .head_favori_item:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .product_moreSee_list .head_favori_item_link {
    display: flex;
    text-decoration: none;
    color: #fff;
    padding: 10px 10px 0;
    font-size: 13px;
    overflow: hidden;
  }

  .product_moreSee_list .head_favori_img {
    width: 70px;
    height: 90px;
    overflow: hidden;
  }

  .product_moreSee_list .head_favori_name {
    flex: 1;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 17px;
    height: 19px;
    margin-top: 10px;
    letter-spacing: 1px;
  }
  .mobimenu {
    display: none;
  }
  .botoom {
    background-color: #15151b;
    margin-top: 70px;
    padding: 20px 0;
    color: #878788;
    cursor: pointer;
  }
  .bottom_tex {
    margin-left: 10px;
    font-size: 15px;
  }
  .bottom_web {
    margin-right: 6%;
    font-size: 15px;
  }
  .arrow_up {
    display: none;
    position: fixed;
    bottom: 10%;
    right: 5%;
    z-index: 3;
  }
  .arrow_up_link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .arrow_up_link {
    padding: 12px 17px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
  }
  .arrow_up_link > svg {
    color: #fff;
    font-size: 20px;
  }
`;
