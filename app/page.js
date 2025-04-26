// pages/index.js
'use client';
import { useState } from "react";
import Sidebar from '@/components/Sidebar.js';
import Board from "@/components/Board.js";
import AddNewBoardModal from "@/components/Modals/AddNewBoardModal.js";

export default function Home() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      name: "Board 1",
      columns: {
        todo: [
          { id: 1, title: "Build UI for onboarding flow" },
          { id: 2, title: "Build UI for search" },
        ],
        doing: [
          { id: 3, title: "Design settings and search pages" },
        ],
        done: [
          { id: 4, title: "Conduct 5 wireframe tests" },
        ],
      },
    },
    {
      id: 2,
      name: "Board 2",
      columns: {
        todo: [
          { id: 1, title: "Build UI for onboarding flow" },
        ],
        in_progress: [
          { id: 2, title: "Design settings and search pages" },
        ],
        qa: [
          { id: 3, title: "Conduct 5 wireframe tests" },
        ],
        deployed: [
          { id: 4, title: "Conduct 5 wireframe tests" },
        ],
      },
    },
  ]);

  const [activeBoardId, setActiveBoardId] = useState(boards[0].id);

  const activeBoard = boards.find(board => board.id === activeBoardId);
  const [openAddNewBoardModal, setOpenAddNewBoardModal] = useState(false);

  return (
    <>
      <div className="flex min-h-screen  text-white">
        <Sidebar
          boards={boards}
          setActiveBoardId={(id) => setActiveBoardId(id)}
          activeBoardId={activeBoardId}
          addNewBoard={() => {
            setOpenAddNewBoardModal(true);
          }} />
        <Board
          board={activeBoard}
          openAddNewBoardModal={openAddNewBoardModal}
          setOpenAddNewBoardModal={(val) => setOpenAddNewBoardModal(val)} />
      </div>
      <AddNewBoardModal open={openAddNewBoardModal} close={() => setOpenAddNewBoardModal(false)} />
    </>
  );
}
