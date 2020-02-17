import React from 'react';
import './App.css';
import MenuHeader from "./menu.tsx";
import { MyInputText, MyCheckboxs, MyCombobox, MyTextArea} from "./InformationComponent.tsx";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <MenuHeader></MenuHeader>
      </header>
      <MyInputText></MyInputText>
      <MyCheckboxs></MyCheckboxs>
      <MyCombobox></MyCombobox>

      <MyTextArea></MyTextArea>
    </div>
  );
}

export default App;
