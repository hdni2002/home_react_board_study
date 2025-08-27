/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardList } from "../../apis/board/boardApis";
import ReactPaginate from "react-paginate";

function Board() {
  const [boardList, setBoardList] = useState([]);
  const [message, setMessage] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const amountBoard = 15;

  useEffect(() => {
    getBoardList().then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "failed") {
        setBoardList([]);
        setMessage(response.data.message);
      }
    });
  }, []);

  useEffect(() => {
    const offset = currentPage * amountBoard;
    const slicedBoard = boardList.slice(offset, offset + amountBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  const pageOnChangeHandler = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        {boardList.length === 0 ? (
          <p>{message}</p>
        ) : (
          <ul>
            {currentBoardList.map((board, index) => {
              const date = board.createDt;
              const formattedDate = date.split("T")[0];
							const boardNumber = 
								currentPage * amountBoard + index + 1;

              return (
                <li key={board.boardId}>
                  <div>
                    <span>{boardNumber}</span>
                    <strong>{board.title}</strong>
                  </div>
                  <span>{formattedDate}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div css={s.paginateContainer}>
        <ReactPaginate
          previousLabel="이전"
          nextLabel="다음"
          pageCount={Math.ceil(boardList.length / amountBoard)}
          onPageChange={pageOnChangeHandler}
        />
      </div>

      {/* 페이지네이션 구현할때 백엔드에서 계산해서 제작  */}
    </div>
  );
}

export default Board;
