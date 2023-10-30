import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";
import D20Map from "./D20Map.png";
import Image from "next/image";

export default function D20TaxForm() {
  return (
    <TaxFormTemplate
      title="D20"
      flavortext="Your merry band of adventurers have been captured for tax evasion! What's the fastest way to escape?"
    >
      <Image src={D20Map} alt="dungeon map" />
      <ul className="ml-4 flex list-disc flex-col gap-y-2">
        <li>You start in the Jail Cell.</li>
        <li>
          The only way out is through the dungeon gates, to the bottom right.
        </li>
        <li>
          To open the dungeon gates, flip both the magic switch in the Control
          Room and the lever in the Watchtower (in any order).
        </li>
        <li>
          The lever can be flipped freely, but you need magic runes to flip the
          magic switch.
        </li>
        <li>The Watchtower is the second largest room in the dungeon.</li>
        <li>The Control Room is connected to every other room.</li>
        <li>The magic runes are locked in a chest in the Chest Room.</li>
        <li>
          The master key in the Storage Room can open all chests in the dungeon.
        </li>
        <li>
          (6) is the Guard Room. Fortunately, there are no guards in the dungeon
          right now.
        </li>
        <li>
          BOTH doors between the Jail Cell and the Guard Room are locked, as are
          BOTH doors between the Control Room and the Chest Room. The 2 other
          doors are unlocked.
        </li>
      </ul>
    </TaxFormTemplate>
  );
}
