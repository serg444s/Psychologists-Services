import PsychologistList from "../../components/PsychologistList/PsychologistList";
import psychologists from "../../../psychologists.json";

const Psychologists = () => {
  return (
    <div>
      <PsychologistList items={psychologists} />
    </div>
  );
};

export default Psychologists;
