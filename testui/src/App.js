import React from 'react'
import { Menu, menuAsToolbarBehavior } from '@fluentui/react-northstar'
import {
  PaperclipIcon,
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
