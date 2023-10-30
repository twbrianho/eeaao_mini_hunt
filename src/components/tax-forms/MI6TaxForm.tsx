import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";

export default function MI6TaxForm() {
  return (
    <TaxFormTemplate
      title="MI6"
      flavortext="They always cover up the most important information."
    >
      <h3 className="text-center text-3xl font-black tracking-widest text-black">
        TOP SECRET
      </h3>
      <ul className="flex flex-col gap-y-2 leading-relaxed tracking-widest text-black">
        <li>
          <strong>Birthplace:</strong>{" "}
          <p className="inline-block break-keep">
            New Orle
            <p className="inline-block bg-black">???</p>,
          </p>{" "}
          Louisiana
        </li>
        <li>
          <strong>
            Superpo<p className="inline-block bg-black">???</p>:
          </strong>{" "}
          Inv
          <p className="inline-block bg-black">??</p>ibility
        </li>
        <li>
          <strong>
            Fa<p className="inline-block bg-black">???</p>r:
          </strong>{" "}
          Unknown
        </li>
        <li>
          <strong>Mother:</strong> Scar
          <p className="inline-block break-keep">
            <p className="inline-block bg-black">???</p>t
          </p>{" "}
          Johansson (but not the famous one)
        </li>
        <li>
          <strong>Wanted by:</strong> the{" "}
          <p className="inline-block break-keep">
            In
            <p className="inline-block bg-black">???</p>national
          </p>{" "}
          Criminal Police{" "}
          <p className="inline-block break-keep">
            <p className="inline-block bg-black">?</p>rganization
          </p>
          , for multiple counts of tax fraud.
        </li>
      </ul>
    </TaxFormTemplate>
  );
}
