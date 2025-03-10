"use client"

import Image from "next/image";
import BoardCard from "./BoardCard";
import BoardCardAdd from "./BoardCardAdd";
import BoardContextMenu from "./BoardContextMenu";
import { useState } from "react";
import { boardCards } from "@/constants/constants";
import { cn } from "@/lib/utils";

const BoardCards = () => {
  const [cards, setCards] = useState(boardCards);
  const [cardOpen, setCardOpen] = useState(false)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [cardContextMenuIndex, setCardContextMenuIndex] = useState(-1)

  const handleOnMoveRight = (index: number) => {
    setCards(prevTabs => {
      const newTabs = [...prevTabs];
      if (index < newTabs.length - 1) {
        [newTabs[index], newTabs[index + 1]] = [newTabs[index + 1], newTabs[index]];
      }
      return [...newTabs]; 
    });
    setCardContextMenuIndex(-1)
  };  

  const handleOnMoveLeft = (index: number) => {
    setCards(prevTabs => {
      const newTabs = [...prevTabs]; 
      if (index > 0) {  
        [newTabs[index - 1], newTabs[index]] = [newTabs[index], newTabs[index - 1]];
      }
      return [...newTabs]; 
    });
    setCardContextMenuIndex(-1)

  };

  const handleRemove = (index: number) => {
    setCards(prevTabs => {
      const newTabs = [...prevTabs];
      newTabs.splice(index, 1);
      return [...newTabs];
    });
    setCardContextMenuIndex(-1)
  };

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const newCards = [...cards];
    const movedCard = newCards.splice(draggedItemIndex, 1)[0]; 
    newCards.splice(index, 0, movedCard); 

    setCards(newCards);
    setDraggedItemIndex(null);
  };
 
  return (
    <article className="w-full overflow-x-scroll overflow-y-hidden flex my-5 gap-3">
      {cards.map((item, index) => 
        <div key={item.title} className="relative">
          <BoardCard 
            index={index} 
            item={item}  
            onDragStart={handleDragStart} 
            onDrop={handleDrop}
            cardContextMenuIndex={cardContextMenuIndex} 
            setCardContextMenuIndex={setCardContextMenuIndex} 
          />

          {cardContextMenuIndex === index && (
            <BoardContextMenu 
              index={index} 
              board={cards}  
              key={cards[index].title} 
              title={cards[index].title} 
              BoardContextMenuIndex={cardContextMenuIndex} 
              handleOnMoveLeft={handleOnMoveLeft} 
              handleOnMoveRight={handleOnMoveRight} 
              handleRemove={handleRemove}  
            />
          )}
        </div>
      )}

      <button 
        className={cn(
          "border-[1px] border-gray-300 w-fit h-fit p-1 rounded-md hover:bg-gray-100 flex-shrink-0", 
          { "hidden" : cardOpen }
        )}
        onClick={() => setCardOpen((true))}
      >
        <Image src="/svg/plus.svg" width={20} height={20} alt="plus" />
      </button>
      
      {cardOpen && <BoardCardAdd setCards={setCards} setCardOpen={setCardOpen}/>}
    </article>
  );
};

export default BoardCards;