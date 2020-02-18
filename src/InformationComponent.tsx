import React from 'react';
import Select from 'react-select';

let variable = "" ;

async function awaitAndFill(props : any){
    let result = "";
    console.log(props);
    switch(props.target.name){
         case "myInputText":
               result =  props.target.value;
               break;
         case "myCheckbox":
               result = props.target.id;
               break;
         default :
               result = props.label;
               break;
         }
    variable += "You have selected " + result + "\n";
    console.log(variable);
};

const fillTextArea = (props : any) => {
    awaitAndFill(props);
}

class MyInputText extends React.Component {

    render() {
        return (
            <div>
                <p><b>What's your name ?</b></p>
                <input type="text" id="inputText1" name="myInputText" onChange={fillTextArea}/>
            </div>
        )
    }
}

class MyCheckboxs extends React.Component {

    render() {
        return (
            <div>
                <p><b>Where do you usually work ?</b></p>
                <input type="checkbox" id="Office" name="myCheckbox" onChange={fillTextArea}/><label> Office</label><br/>
                <input type="checkbox" id="Home" name="myCheckbox" onChange={fillTextArea}/><label> Home</label><br/>
                <input type="checkbox" id="Client Office" name="myCheckbox" onChange={fillTextArea}/><label> Client Office</label><br/>
            </div>
        )
    }
}


const locationValues = [
         { label: "Bergamo", value: 1, target: "myCombobox" },
         { label: "Milano", value: 2, target: "myCombobox" },
         { label: "Torino", value: 3, target: "myCombobox" }
];

class MyCombobox extends React.Component {

    render() {
        return (
            <div>
                 <p><b>Where do you usually leave from?</b></p>
                 <Select options={ locationValues } name="myCombobox" onChange={fillTextArea} />
            </div>
        )
    }
}


class MyTextArea extends React.Component {

    render() {
        return (
            <div id="myTextArea">
                 <p><b>Chronology:</b></p>
                  <textarea id="textarea_results" value={variable}></textarea>
            </div>
        )
    }
}

export {MyInputText, MyCheckboxs, MyCombobox, MyTextArea};