import styled from "styled-components";

export const LoggedStyle = styled.div`
  .logged {
    padding: 10px;
    width: 35px;
    background: #d9d5dd;
    border-radius: 50%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    cursor: pointer;

    svg {
      font-size: 20px;
    }
  }
`;

export const LogginBtnStyle = styled.div`
  .logginBtn {
    background-color: #4b4ba4;
    color: #fff;
    border-radius: 7px;
    background-image: linear-gradient(
      to left,
      #ff8a00 0%,
      #ff2070 49%,
      #8a8a8e 50%
    );
    background-size: 200% 100%;
    outline: none;
    border: none;
    margin-right: 30px;
    padding: 8px 14px;
    font-size: 15px;
    cursor: pointer;
  }
  button.logginBtn:hover {
    filter: brightness(0.9);
    background-position: right center;
    transition: 0.3s;
  }
`;
