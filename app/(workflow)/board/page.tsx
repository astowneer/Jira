import { users } from "@/constants/constants";
import BoardCards from "../../../components/workflow/board/BoardCards";
import BoardControls from "../../../components/workflow/board/BoardControls";

export default function Board() {
  return (
    <main>
      <BoardControls users={users} />
      <BoardCards />
    </main> 
  );
}