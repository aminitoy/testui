import logo from './logo.svg';
import './App.css';
import { Input, Menu, Provider, teamsTheme, Icon } from "@fluentui/react-northstar";

function App() {
  return (
    <div className="App">
      <Input />
      <Provider theme={teamsTheme}>
        <Menu vertical>
          <Menu.Item Icon="add" text="." />
          <Menu.Item icon="edit" text="Edit" />
          <Menu.Item icon="delete" text="Delete" />
        </Menu>
      </Provider>


    </div>
  );
}

export default App;
