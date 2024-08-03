import styled from "styled-components";

export const BaseCss = styled.div`
  .linnercolor {
    color: linear-gradient(to right, #ff8a00, #ff2070);
  }
  .new_h3::before,
  .linnerbefor::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1px;
    background: linear-gradient(to right, #ff8a00, #ff2070);
  }

  @keyframes hien {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hienlon {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes vien {
    from {
      text-shadow: 0 0 5px #00dcff, 0 0 10px #00dcff, 0 0 15px #00dcff,
        0 0 30px #00dcff;
    }
    to {
      text-shadow: 0px 0px 5px #19fb06, 0px 0px 10px #19fb06,
        0px 0px 15px #19fb06, 0px 0px 30px #19fb06;
    }
  }
  .head_favorite_bam {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head_favori_item_link:hover {
    background-color: #000;
    transition: all 0.3s linear;
  }
  .product_moreSee_item:hover .product_moreSee_name,
  .product_item:hover .new_product_name,
  .head_favori_item_link:hover .head_favori_name {
    background: var(--linner);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s linear;
    font-weight: 600;
  }
  .product_moreSee_item:hover .product_moreSee_imgread,
  .product_item:hover .new_product_img,
  .head_favori_item_link:hover .head_favori_img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }

  .head_favori_item:hover {
    background-position: right center;
  }
  .head_favorite_tab20::before {
    content: "";
    border-width: 14px;
    border-style: solid;
    border-color: transparent transparent #323039 transparent;
    position: absolute;
  }

  .activiti {
    display: block;
  }

  .head_favorite_tab20::after {
    content: "";
    width: 110%;
    position: absolute;
    top: 100%;
    right: 0;
    height: 20px;
  }
`;
