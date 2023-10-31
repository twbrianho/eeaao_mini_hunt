import PuzzleTemplate from "~/components/PuzzleTemplate";
import Image from "next/image";
import Raccoon1 from "../../images/Raccoon1.png";
import Raccoon2 from "../../images/Raccoon2.png";
import Raccoon3 from "../../images/Raccoon3.png";
import Raccoon4 from "../../images/Raccoon4.png";
import Raccoon5 from "../../images/Raccoon5.png";
import GuessCharacterInput from "~/components/raccoontouille/GuessCharacterInput";
import { raccoontouilleSolvedAtom } from "~/utils/atoms";

export default function Raccoontouille() {
  return (
    <PuzzleTemplate
      puzzleId={4}
      title="Raccoocoonie"
      flavortext="These raccoons are out of control! How can you keep them from invading all these classic movies?"
      puzzleSolvedAtom={raccoontouilleSolvedAtom}
    >
      <div className="flex flex-col justify-center gap-y-5">
        <div>
          <Image src={Raccoon1} alt="raccoon1" className="rounded-t-lg" />
          <GuessCharacterInput answer="LUKE" />
        </div>
        <div>
          <Image src={Raccoon2} alt="raccoon2" className="rounded-t-lg" />
          <GuessCharacterInput answer="ET" />
        </div>
        <div>
          <Image src={Raccoon3} alt="raccoon3" className="rounded-t-lg" />
          <GuessCharacterInput answer="ARAGORN" />
        </div>
        <div>
          <Image src={Raccoon4} alt="raccoon4" className="rounded-t-lg" />
          <GuessCharacterInput answer="SIMBA" />
        </div>
        <div>
          <Image src={Raccoon5} alt="raccoon5" className="rounded-t-lg" />
          <GuessCharacterInput answer="HARRY" />
        </div>
      </div>
    </PuzzleTemplate>
  );
}
