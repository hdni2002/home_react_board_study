/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { getBoardDetail, removeBoard } from "../../apis/board/boardApis";
import { useQueryClient } from "@tanstack/react-query";

function BoardDetail() {
  const [boardData, setBoardData] = useState({});
  const { boardId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  useEffect(() => {
    getBoardDetail(boardId).then((response) => {
      if (response.data.status === "success") {
        setBoardData(response.data.data);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        navigate("/board");
      }
    });
  }, [boardId, navigate]);

  const removeOnClickHandler = (boardId) => {
    removeBoard(boardId)
      //   const removeHandler = async () => {
      // if (!window.confirm("정말 삭제하시겠습니까")) {
      //   return;
      //  }
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          navigate("/board");
        } else if (response.data.status === "failed") {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("삭제 중 오류가 발생했습니다.");
      });
  };
  //   try {
  //     const response = await removeBoard(boardId);
  //     if (response.data.status === "success") {
  //       alert(response.data.message);
  //       navigate("/board");
  //     } else if (response.data.status === "failed") {
  //       alert(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div css={s.container}>
      <div css={s.boardContainer}>
        <div css={s.boardHeader}>
          <h3>{boardData.title}</h3>
          <span>{boardData?.createDt?.split("T")[0]}</span>
        </div>
        <div css={s.boardContent}>{boardData.content}</div>
      </div>
      <div css={s.btnContainer}>
        <button css={s.btn("#6c757d")} onClick={() => navigate(-1)}>
          목록
        </button>
        {principalData.data.data.userId === boardData.userId ? (
          <div>
            <button
              css={s.btn("#dc3545")}
              onClick={() => removeOnClickHandler(boardId)}
            >
              삭제
            </button>
            <button css={s.btn("#0d6efd")} onClick={() => {}}>
              수정
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BoardDetail;

//목록 버튼 누르면 리스트페이지로 보내기
// 삭제 버튼 누르면 삭제요청 보내고 성공시 리스트로보내기
