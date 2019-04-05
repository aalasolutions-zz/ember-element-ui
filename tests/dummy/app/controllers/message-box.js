import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { get, set } from "@ember/object";


export default Controller.extend({
  tableAttributes:[
    {attribute: 'title', desc: "title of the MessageBox", type: "string", val: '-', def: '-'},
    {attribute: 'message', desc: "content of the MessageBox", type: "string", val: '-', def: '-'},
    // {attribute: 'dangerouslyUseHTMLString', desc: "whether message is treated as HTML", type: "boolean", val: '-', def: 'false'},
    {attribute: 'type', desc: "message type, used for icon display", type: "string", val: 'success / info / warning / error', def: '-'},
    {attribute: 'iconClass', desc: "custom icon's class, overrides type", type: "string", val: '-', def: '-'},
    {attribute: 'customClass', desc: "custom class name for MessageBox", type: "string", val: '-', def: '-'},
    // {attribute: 'callback', desc: "title of the MessageBox", type: "string", val: '-', def: '-'},
    {attribute: 'showClose', desc: "whether to show close icon of MessageBox", type: "boolean", val: '-', def: 'true'},
    {attribute: 'beforeClose', desc: "callback before MessageBox closes, and it will prevent MessageBox from closing", type: "function(action, instance, done), where action can be 'confirm', 'cancel' or 'close'; instance is the MessageBox instance, and you can access to that instance's attributes and methods; done is for closing the instance", val: '-', def: '-'},
    {attribute: 'distinguishCancelAndClose', desc: "whether to distinguish canceling and closing the MessageBox", type: "boolean", val: '-', def: 'false'},
    // {attribute: 'lockScroll', desc: "whether to lock body scroll when MessageBox prompts", type: "boolean", val: '-', def: 'true'}, todo: implement this
    {attribute: 'showCancelButton', desc: "whether to show a cancel button", type: "boolean", val: '-', def: 'false (true when called with confirm and prompt)'},
    {attribute: 'showConfirmButton', desc: "whether to show a confirm button", type: "boolean", val: '-', def: 'true'},
    {attribute: 'cancelButtonText', desc: "text content of cancel button", type: "string", val: '-', def: 'Cancel'},
    {attribute: 'confirmButtonText', desc: "text content of confirm button", type: "string", val: '-', def: 'OK'},
    {attribute: 'cancelButtonClass', desc: "custom class name of cancel button", type: "string", val: '-', def: '-'},
    {attribute: 'confirmButtonClass', desc: "custom class name of confirm", type: "string", val: '-', def: '-'},
    {attribute: 'closeOnClickModal', desc: "whether MessageBox can be closed by clicking the mask", type: "boolean", val: '-', def: 'true (false when called with alert)'},
    {attribute: 'closeOnPressEscape', desc: "whether MessageBox can be closed by pressing the ESC", type: "boolean", val: '-', def: 'true (false when called with alert)'},
    // {attribute: 'closeOnHashChange', desc: "title of the MessageBox", type: "string", val: '-', def: 'true'}, todo: implement this
    {attribute: 'showInput', desc: "whether to show an input", type: "boolean", val: '-', def: 'false (true when called with prompt)'},
    {attribute: 'inputPlaceholder', desc: "placeholder of input", type: "string", val: '-', def: '-'},
    {attribute: 'inputType', desc: "type of input", type: "string", val: '-', def: 'text'},
    {attribute: 'inputValue', desc: "initial value of input", type: "string", val: '-', def: '-'},
    {attribute: 'inputPattern', desc: "regexp for the input", type: "regexp", val: '-', def: '-'},
    {attribute: 'inputValidator', desc: "validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage", type: "function", val: '-', def: '-'},
    {attribute: 'inputErrorMessage', desc: "error message when validation fails", type: "string", val: '-', def: 'Illegal input'},
    {attribute: 'center', desc: "whether to align the content in center", type: "boolean", val: '-', def: 'false'},
    {attribute: 'roundButton', desc: "whether to use round button", type: "boolean", val: '-', def: 'false'},

    // {attribute: '', desc: "", type: "", val: '', def: ''},

  ],

  messageBox: service('message-box'),

  actions: {
    open() {
      this.get('messageBox').alert("This is a <b>message</b>.","A Title?",{
        closeOnPressEscape: true,
      });
    },
    open2() {
      this.get('messageBox').confirm("This will permanently delete the file. Continue?","Warning", {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then((action)=>{
        console.log(action);
      }).catch((action)=>{
        console.error(action);
      });
    },
    open3() {

      this.get('messageBox').prompt("Please input your e-mail","Email Address", {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        closeOnPressEscape: true,
        roundButton: true,
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
      }).then((action)=>{
        console.log(action);
      }).catch((action)=>{
        console.error(action);
      });

    },
    open4() {
      this.get('messageBox').confirm("This will permanently delete the file. Continue?","Warning", {
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            set(instance, 'confirmButtonLoading' , true);
            set(instance, 'confirmButtonText' , 'Loading...');
            setTimeout(() => {
              done.doClose();
              setTimeout(() => {
                set(instance, 'confirmButtonLoading' , false);
              }, 300);
            }, 3000);
          } else {
            done.doClose();
          }
        }
      }).then((action)=>{
        console.log(action);
      }).catch((action)=>{
        console.error(action);
      });
    },
    open5() {
      this.get('messageBox').confirm("This will permanently delete the file. Continue?","Warning", {
        distinguishCancelAndClose: true,
        confirmButtonText: 'Save',
        cancelButtonText: 'Discard Changes',
        type: 'success'
      }).then((action)=>{
        console.log(action);
      }).catch((action)=>{
        console.error(action);
      });
    },
    open6() {
      this.get('messageBox').alert("This will permanently delete the file. Continue?", "Warning", {
        confirmButtonText: 'OK',
        type: 'warning',
        center: true,
        distinguishCancelAndClose: true,
      });
    },
  }
});
