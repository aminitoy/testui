import logo from './logo.svg';
import './App.css';
import { AddIcon, Button, CalendarIcon, CallIcon, Menu } from "@fluentui/react-northstar";
import { AppsIcon, BellIcon, ChatIcon, EditIcon, MeetingTimeIcon, SaveIcon } from '@fluentui/react-icons-northstar/dist/commonjs';
import { FontIcon, initializeIcons } from "@fluentui/react";

function App() {
  initializeIcons();

  return (
    <div className="App">
      <header className="App-header">
        <FontIcon iconName="Calendar" />

        <Button>ABCD</Button>
        <Button text="Primary" allowDisabledFocus />
        <Menu
          items={
            [
              "1", "2", <EditIcon />, <AppsIcon />, <MeetingTimeIcon />, <SaveIcon />, <BellIcon />, <ChatIcon />, <AddIcon />, <CalendarIcon />, <CallIcon />
            ]
          }
        />

        <FontIcon iconName='Contact' />

      </header>
    </div>
  );
}

export default App;

// Example formatting
const stackTokens = { childrenGap: 40 };


