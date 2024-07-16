import { useAppSelector } from "../store/hooks";

function Board() {
    const board = useAppSelector(({ candyCrush: { board } }) => board);
    return <div>Board</div>
}

export default Board;