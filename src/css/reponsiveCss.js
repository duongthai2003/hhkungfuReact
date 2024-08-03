import styled from "styled-components";

export const ReponsiveCss = styled.div`
  /* >= Tablet mobi */
  @media (max-width: 1023px) {
    .mbiseacher {
      display: flex;
    }

    .head_seach {
      display: none;
    }

    .mobimenu {
      display: inline-block;
      padding: 5px 15px;
      font-size: 25px;
      color: #fff;
      margin-left: 50px;
    }
    .showtimes_date_item {
      min-width: 32%;
      text-align: center;
    }
    .naba_lis {
      display: block;
      transform: translate(calc(-100% - 81px));
      background-color: #312e2e;
      position: absolute;
      box-shadow: 1px 1px 2px #fff;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .naba_lis.hienmenu {
      transform: translateX(9px);
      transition: all 1s ease;
      z-index: 3;
      width: 51%;
    }
    .naba_item_link {
      width: 100%;
      text-align: left;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      margin: 0;
    }
    .naba {
      width: 100%;
      background-color: #333;
    }
    .pronew_head {
      display: inline-block;
    }
    .see_all_link {
      margin-right: 4%;
    }
  }
  /* Tablet */
  @media (min-width: 740px) and (max-width: 1023px) {
    .fa-solid.fa-right-long {
      padding: 0 28px;
      color: #000;
      font-size: 23px;
    }
    .head_favorite {
      position: absolute;
      right: 0;
      bottom: 88.5%;
    }
    .col.l-8 {
      display: inline-block;
    }
    /* lm cai tim kiem thu nho bam vao to */
    /* .mbiseacher {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        align-items: center;
        border-radius: 30px;
        height: 30px;
        transition: 1s;
        box-shadow: inset 0 5px 5px #CED0DF, 0 -5px 10px #F3F3F3, inset 0 -5px 5px #EFF1F0, 0 10px 15px #CDD4DE;
        width: 30px;
        overflow: hidden;
      }
      .mbicon {
        padding: 10px;
        color: #000;
      }
      .mbinput {
        opacity: 1;
        transform: translate(-50px);
        background-color: transparent;
        border: none;
        outline: none;
        width: 100px;
        padding: 0 20px;
      }
      .mbiseacher:focus-within{ /* focus-within : no se tim vao ben trong xem the nao co tinh nang focus thif no se tac dung len the do*/
    /* width: 200px;
      }
      .mbiseacher:focus-within .mbinput{
        opacity: 1;
        transform: translate(0);
      }
      .mbinput ~ .mbicon{
        opacity: 0;
        transform: translate(50px);
        transition: 1s;
      }

      .mbinput:valid ~ .mbicon{
        opacity: 1;
        transform: translate(0);
      } */

    .logo {
      height: 71px;
    }
    .head_logo {
      height: 56px;
    }
  }
  /* mobi */
  @media (max-width: 739px) {
    .head_seach {
      display: none;
    }
    .them {
      align-items: initial;
    }
    .head_logo {
      width: 150px;
      height: 40px;
    }
    .mbiseacher {
      bottom: initial;
    }
    .pro_new {
      padding: 0 15px;
    }
    .mbiseacher {
      bottom: 84.5%;
      background-color: transparent;
      height: 35px;
      right: 4%;
      z-index: 5;
    }
    .head_favorite_text {
      display: none;
    }
    .naba {
      width: 100%;
      background-color: #333;
      height: 50px;
      line-height: 50px;
    }
    .mobimenu {
      padding: 0 15px;
      margin-left: 15px;
    }
    .head_favorite_soluong {
      position: absolute;
      top: 4px;
      width: 17px;
      height: 17px;
      font-size: 10px;
      line-height: 17px;
      right: 11px;
    }
    .head_favorite_tab1 {
      right: 0;
      position: absolute;
      bottom: -47px;
      background-color: transparent;
      padding: 13px 21px;
    }
    .mbiseacher.mbiseacher_width {
      width: 280px;
      background-color: #fff;
    }
    .mbiconcolor {
      color: rgb(155, 141, 141);
    }
    .mbicon {
      color: rgb(155, 141, 141);
    }
    .logo {
      width: 100%;
      height: 53px;
      display: flex;
      justify-content: center;
      margin: 0;
    }
    .head_favorite_tab2 {
      width: 325px;
      right: -32%;
      top: 46px;
    }
    .head_favorite_tab20::before {
      border-color: transparent transparent #67646f transparent;
      top: 28px;
      right: 4%;
      z-index: 0;
    }
    .mbinput:valid ~ .mbicon {
      transform: translate(-7px);
    }
  }
`;
