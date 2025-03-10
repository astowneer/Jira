import React from 'react'
import { toast } from 'sonner';

type Board = {
  title: string;
  isDone: boolean;
}

interface BoardContextMenuProps {
  title: string,
  index: number,
  board: Board[],
  BoardContextMenuIndex: number,
  handleOnMoveRight: (index: number) => void,
  handleOnMoveLeft: (index: number) => void,
  handleRemove: (index: number) => void,
}

const BoardContextMenu = ({
  title,
  index,
  board,
  BoardContextMenuIndex,
  handleOnMoveRight,
  handleOnMoveLeft,
  handleRemove
}: BoardContextMenuProps) => {
  return (
    <section className='bg-white py-2 absolute top-11 flex flex-col border-[1px] border-gray-200 min-w-[180px] text-xs z-30 -right-12 translate-x-1/2'>
      {index < board.length - 1 && (
        <button 
          onClick={() => handleOnMoveRight(BoardContextMenuIndex)} 
          className="w-full p-2 hover:bg-gray-200 text-left"
        >
          Move to Right
        </button>
      )}

      {index > 0 && (
        <button 
          onClick={() => handleOnMoveLeft(BoardContextMenuIndex)} 
          className="w-full p-2 hover:bg-gray-200 text-left"
        >
          Move to Left
        </button>
      )}

      <button onClick={() => handleRemove(BoardContextMenuIndex)} className="w-full p-2 hover:bg-gray-200 text-left">
        Remove
      </button>
    </section>
  );
};

export default BoardContextMenu;