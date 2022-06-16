import { useSelector } from "react-redux";
import "./Table.css";

// COMPONENTS
import NavBar from "../NavBar/NavBar";
import DataTable from "./DataTable";
import Loader1 from "../../Loaders/Loader1/Loader1";

function Table({ surveyData }) {
  const isLoading = useSelector((state) => state.uiState.isLoading);
  console.log(isLoading);
  return (
    <>
      <NavBar title={"Data Table"}>
        <li className="bold">
          <span>Filter Overview</span>
        </li>
      </NavBar>
      <section className="Table">
        {isLoading ? <Loader1 /> : <DataTable surveyData={surveyData} />}
      </section>
    </>
  );
}

export default Table;
