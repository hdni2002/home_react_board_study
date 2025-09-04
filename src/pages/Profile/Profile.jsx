/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import MyBoard from "../../components/MyBoard/MyBoard";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePrincipalState } from "../../store/usePrincipalstore";
import { sendMailRequest } from "../../apis/Account/Account";
import ChangeProfileImg from "../../components/ChangeProfileImg/ChangeProfileImg";

function Profile() {
  const [tab, setTab] = useState("myboard");
  const [tabChild, setTabChild] = useState(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { principal } = usePrincipalState();

  const tabClickHandler = (path) => {
    setTabChild(path === "myboard" ? 1 : path === "changepassword" ? 2 : 3);
    navigate(`${pathname}?tab=${path}`);
  };

  const onClickVerifyHandler = () => {
    sendMailRequest({
      email: principal.email,
    }).then((response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
      }
    });
  };

  useEffect(() => {
    const currentTab = searchParams.get("tab");
    setTab(currentTab);
    setTabChild(
      currentTab === "myboard" || currentTab === null
        ? 1
        : currentTab === "changepassword"
        ? 2
        : 3
    );
  }, [pathname, searchParams]);

  return (
    <div css={s.container}>
      <div css={s.profileContainer}>
        <div css={s.profileHeader}>
          <div css={s.profileImgBox}>
            <div>
              <img src={principal?.profileImg} alt="profileImg" />
            </div>
          </div>
          <div css={s.profileInfoBox}>
            <h3>{principal?.username}</h3>
            <div>
              <p>{principal?.email}</p>
              {principal?.authorities[0].authority === "ROLE_TEMPORARY" ? (
                <button onClick={onClickVerifyHandler}>인증하기</button>
              ) : null}
            </div>
          </div>
        </div>
        <div css={s.profileBox}>
          <div css={s.profileTab(tabChild)}>
            <ul>
              <li onClick={() => tabClickHandler("myboard")}>내 게시물</li>
              <li onClick={() => tabClickHandler("changepassword")}>
                비밀번호 변경
              </li>
              <li onClick={() => tabClickHandler("changeprofileimg")}>
                프로필 이미지 변경
              </li>
            </ul>
          </div>
          <div css={s.profileMain}>
            {tab === "myboard" || tab === null ? (
              <MyBoard userId={principal?.userId} />
            ) : tab === "changepassword" ? (
              <ChangePassword />
            ) : (
              <ChangeProfileImg
                oldProfileImg={principal?.profileImg}
                userId={principal?.userId}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
