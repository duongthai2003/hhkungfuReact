import { createContext, useEffect, useState } from "react";
import HTTP from "../HTTP";

export const ComponentContext = createContext("");

function ContextApi({ children }) {
  const [moviId, setMoviId] = useState("");
  const [episodeId, setEpisodeId] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [showModalLoggin, setShowModalLoggin] = useState(false);
  const [selectCategoryId, setSelectCategoryId] = useState("");

  const getCurrentLoginUser = async () => {
    try {
      const res = await HTTP.get("auth/me");
      setCurrentUser(res.data);
      setLoginSuccess(true);
    } catch (err) {
      setLoginSuccess(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentLoginUser();
  }, [loginSuccess]);

  return (
    <ComponentContext.Provider
      value={{
        moviId,
        setMoviId,
        episodeId,
        setEpisodeId,
        loginSuccess,
        setLoginSuccess,
        currentUser,
        showModalLoggin,
        setShowModalLoggin,
        selectCategoryId,
        setSelectCategoryId,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
}
export default ContextApi;
