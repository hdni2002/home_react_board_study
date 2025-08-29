/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import profileImg from "../../assets/profileImg.png";

function Profile() {
  return (
    <div css={s.container}>
      <div css={s.profileContainer}>
        <div css={s.profileHeader}>
          <div css={s.profileImgBox}>
            <img src={profileImg} alt="profileImg" />
          </div>
          <div css={s.profileInfoBox}>
            <h3>username</h3>
            <div>
              <p>email@naver.com</p>
              <button>인증하기</button>
            </div>
          </div>
        </div>
        <div css={s.profileMain}></div>
      </div>
    </div>
  );
}

export default Profile;
