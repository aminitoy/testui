// import logo from './logo.svg';
// import './App.css';
// import { Button, Menu, menuAsToolbarBehavior } from "@fluentui/react-northstar";
// import {
//   CalendarIcon, ContactGroupIcon, UserFriendsIcon,
//   SettingsIcon, PaperclipIcon, EyeIcon, ShiftActivityIcon, RobotIcon,
// } from "@fluentui/react-icons-northstar";

// const iconStyles = {
//   color: '#482B7C',
//   selected: {
//     color: '#0078D4',
//   },
// }

// const items = [
//   {
//     key: '0',
//     content: 'Planning',
//     icon: <CalendarIcon outline styles={iconStyles}/>,
//     link: '#',
//   },
//   {
//     key: 'overview',
//     content: 'Overview',
//     icon: <EyeIcon outline styles={iconStyles} />,
//   },
//   {
//     key: 'times',
//     content: 'Times',
//     icon: <ShiftActivityIcon outline styles={iconStyles} />,
//   },
//   {
//     content: 'Users',
//     icon: <ContactGroupIcon outline styles={iconStyles} />,
//   },
//   {
//     key: 'clients',
//     content: 'Clients',
//     icon: <UserFriendsIcon outline styles={iconStyles} />,
//   },
//   {
//     key: 'services',
//     content: 'Services',
//     icon: <RobotIcon outline styles={iconStyles} />,
//   },
//   {
//     key: 'invoices',
//     content: 'invoices',
//     icon: <PaperclipIcon outline styles={iconStyles} />,
//   }
// ]

// function App() {

//   return (
//     <div className="App">
//       <Menu defaultActiveIndex={0} items={items} pills vertical
//         accessibility={menuAsToolbarBehavior}
//       />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Menu, menuAsToolbarBehavior } from '@fluentui/react-northstar'
import {
  FormatIcon,
  PaperclipIcon,
  EmojiIcon,
  GiphyIcon,
  StickerIcon,
  VideoCameraEmphasisIcon,
  SettingsIcon,
  MoreIcon,
  BookmarkIcon,
  TranslationIcon,
  TrashCanIcon,
  MarkAsUnreadIcon,
  UserFriendsIcon,
  CalendarIcon,
  EyeIcon,
  ContactGroupIcon,
  ShiftActivityIcon,
  RobotIcon,
} from '@fluentui/react-icons-northstar'

const items = [
  {
    icon: (
      <CalendarIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'planning',
    content: 'Planning',
    'aria-label': 'Planning',
  },
  {
    icon: (
      <EyeIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'overview',
    content: 'Overview',
    'aria-label': 'overview',
  },
  {
    icon: (
      <ShiftActivityIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'times',
    content: 'Times',
    'aria-label': 'Giphy tool',
  },
  {
    icon: (
      <ContactGroupIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'users',
    content: 'Users',
    'aria-label': 'Sticker Tool',
  },
  {
    icon: (
      <UserFriendsIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'clients',
    content: 'Clients',
    'aria-label': 'Meetup Tool',
  },
  {
    icon: (
      <RobotIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'services',
    content: 'Services',
    'aria-label': 'Settings',
  },
  {
    icon: (
      <PaperclipIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'invoices',
    content: 'Invoices',
    
    
  },
]

const MenuExampleToolbarShorthand = () => (
  <Menu
    vertical
    defaultActiveIndex={0}
    items={items}
    iconOnly
    accessibility={menuAsToolbarBehavior}
    pills
    
  />
)

export default MenuExampleToolbarShorthand
