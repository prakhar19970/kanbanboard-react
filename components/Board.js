// components/Board.js
import { Button } from "./Button";
import Column from "./Column";
import AddNewBoardModal from "./Modals/AddNewBoardModal";

export default function Board({ board }) {
  if (!board) return <div className="flex-1 p-8">No Board Selected</div>;

  return (<>
    <div className="flex flex-col flex-1">
      <div className="flex justify-between bg-secondary-bg border-b-[1px] border-[#383844]">
        <div className="px-4 py-6 text-2xl">{board.name}</div>
        <Button primary classNames="m-4">
          <span className="text-sm">+ Add New Task</span>
        </Button>
      </div>
      <div className="flex-1 p-8 flex gap-6 overflow-x-auto">
        {Object.keys(board.columns).map((columnKey) => (
          <Column
            key={columnKey}
            title={columnKey.toUpperCase()}
            tasks={board.columns[columnKey]}
          />
        ))}
      </div>
    </div>
  </>);
}