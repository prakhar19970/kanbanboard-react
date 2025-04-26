import { Button } from "../Button";

const AddNewBoardModal = ({ open, close }) => {
    if (!open) return null; // simple early return

    return (<>
        {open && <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[10] transition-opacity duration-300"
            onClick={close}
        ></div>
        }
        {open &&
            <div className="bg-white rounded-lg p-8 text-gray-800 shadow-lg z-[30] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]">
                <h2 className="text-xl font-bold mb-4">Add New Board</h2>
                <input type="text" placeholder="Board Name" className="w-full p-2 mb-4 bg-gray-700 text-white rounded-lg" />
                <div className="flex justify-between items-center mt-4">
                    <Button onClick={() => close()} primary>Create</Button>
                    <Button onClick={() => close()} className="text-red-500 text-sm border-red-500 border rounded p-2">Cancel</Button>
                </div>
            </div>}</>)
}

export default AddNewBoardModal;