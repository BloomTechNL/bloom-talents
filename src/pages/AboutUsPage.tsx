import { Page } from "../components";
import {
  ImageBannerSection,
  SimpleSection,
  TeamSection,
  TilesSection,
  TopSection,
} from "../sections";

const AboutUsPage: React.FC = () => (
  <Page>
    <TopSection
      showLogo
      title={[" Exclusief, karaktervol", "Tech-Traineeship"]}
      message="Software - Data - Cloud - loT"
    />
    <SimpleSection
      title="Samen gaan we voor groei, succes en impact."
      message="Wij verbinden de top 5% technisch toptalent met vooraanstaande organisaties. Ons exclusieve traineeship ontwikkelt talenten tot onmisbare steunpilaren die het verschil maken."
    />
    <ImageBannerSection title="“Birds of a feather flock together”" />
    <TilesSection
      content={[
        {
          iconName: "traineeship",
          message:
            "Bloom Talents is een nieuw, uniek, laagdrempelig en exclusief traineeship voor de top van technisch Nederland op hard- en softskills.",
        },
        {
          iconName: "selection",
          message:
            "Wij selecteren uitsluitend talenten met een Master Informatica, Wiskunde, AI of Natuurkunde van de TU Delft, TU Eindhoven en Universiteit Twente.",
        },
        {
          iconName: "pieces",
          message:
            "Alle talenten worden gematcht aan organisaties die naadloos passen en waar zij zich voor de lange(re) termijn aan willen committeren.",
        },
        {
          iconName: "timeline",
          message:
            "Tegelijkertijd volgen de talenten het exclusieve Bloom traineeship van een jaar met 30 masterclasses én een stuk maatwerk.",
        },
        {
          iconName: "insurance",
          message:
            "Hierdoor zijn onze opdrachtgevers verzekerd van technisch toptalent dat zich razendsnel ontwikkelt tot een onmisbare steunpilaar.",
        },
      ]}
    />
    <TeamSection
      title="Ontmoet het team"
      persons={[
        { name: "Laurens", role: "CCI" },
        { name: "Laurens", role: "CCI" },
        { name: "Laurens", role: "CCI" },
      ]}
    />
  </Page>
);

export { AboutUsPage };
