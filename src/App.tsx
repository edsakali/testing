import { BrowserRouter as Router } from "react-router-dom";
import { NamesList } from "./modules/names-list/NamesList";

export const App = () => {
  return (
    <Router>
      <NamesList />
    </Router>
  );
};
