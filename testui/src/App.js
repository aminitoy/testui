import logo from './logo.svg';
import './App.css';
import { Provider as TeamsProvider } from "@fluentui/react-teams";
import { Chart, Dashboard, Board, Form, Table } from "@fluentui/react-teams";

function App() {
  return (
    <div className="App">


      <TeamsProvider themeName="teamsTheme" lang="en-US">

        {/* <List items={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]} /> */}
<Board />



      </TeamsProvider>
    </div>
  );
}

export default App;
