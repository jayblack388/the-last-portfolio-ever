import skills from "./data/skills.json";
import repositories from "./data/repos.json";
import masthead from "./data/user.json";
import Home from "./components/pages/Home";

function App() {
  return (
    <Home
      content={{ skills, repositories, articles: [] }}
      masthead={masthead}
    />
  );
}

export default App;
