import { LightningElement,api } from 'lwc';

export default class MyContactComp extends LightningElement {
    @api contactObj; //public property will be set its parent later
}