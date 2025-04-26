// components/Sidebar.js
const Sidebar = ({ boards, setActiveBoardId, activeBoardId, addNewBoard }) => {
    return (
        <div className="bg-secondary-bg border-r-[1px] border-[#383844]" style={{ width: "20%" }}>
            <div className="p-6 text-white text-2xl font-semibold">kanban</div>
            <div className="text-grey font-semibold text-sm px-4 py-6"> ALL BOARDS ({boards.length})</div>
            <ul className="space-y-2">
                {boards.map(board => (
                    <li
                        key={board.id}
                        onClick={() => setActiveBoardId(board.id)}
                        className={`px-4 py-2 rounded-r-full cursor-pointer ${board.id === activeBoardId ? "bg-[#645FC6]" : "hover:bg-gray-700"
                            }`}
                        style={{ width: "80%" }}
                    >
                        {board.name}
                    </li>
                ))}
            </ul>
            <div className="px-4 py-2 mt-6 cursor-pointer rounded-r-full hover:bg-gray-700" style={{ width: "80%" }} onClick={() => addNewBoard()}>
                <span className="text-primary text-sm">+ Create New Board</span>
            </div>
        </div>
    );
}
export default Sidebar;