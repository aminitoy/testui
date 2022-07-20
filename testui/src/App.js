import logo from './logo.svg';
import './App.css';
import { Button, Menu } from "@fluentui/react-northstar";
import {
  CalendarIcon, ContactGroupIcon, UserFriendsIcon,
  SettingsIcon, PaperclipIcon, EyeIcon, ShiftActivityIcon, RobotIcon
} from "@fluentui/react-icons-northstar";

const iconStyles = {


  color: '#482B7C',
  ":hover": {
    color: '#482B7C'
  }


}

const items = [
  {
    key: 'planning',
    content: 'Planning',
    icon: <CalendarIcon styles={iconStyles} />,
  },
  {
    key: 'overview',
    content: 'Overview',
    icon: <EyeIcon styles={iconStyles} />,
  },
  {
    key: 'times',
    content: 'Times',
    icon: <ShiftActivityIcon styles={iconStyles} />,
  },
  {
    content: 'Users',
    icon: <ContactGroupIcon styles={iconStyles} />,
  },
  {
    key: 'clients',
    content: 'Clients',
    icon: <UserFriendsIcon styles={iconStyles} />,
  },
  {
    key: 'services',
    content: 'Services',
    icon: <RobotIcon styles={iconStyles} />,
  },
  {
    key: 'invoices',
    content: 'invoices',
    icon: <PaperclipIcon styles={iconStyles} />,
  }
]

function App() {
  return (
    <div className="App">
      <Menu defaultActiveIndex={0} items={items} vertical pointing="start" />

    </div>
  );
}

export default App;
