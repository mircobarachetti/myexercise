import React from 'react'
import { Menu } from 'semantic-ui-react'

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const items = [
  { key: 'exercise1', active: true, name: 'Esercizio 1' },
  { key: 'exercise2', name: 'Esercizio 2' },
  { key: 'exercise3', name: 'Esercizio 3' },
  { key: 'exercise4', name: 'Esercizio 4' },
]

const MenuExampleProps = () => <Menu items={items} />

export default MenuExampleProps