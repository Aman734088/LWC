import { LightningElement } from 'lwc';

export default class SecondlWCComp extends LightningElement {
    msg="hey docmation";
    changeHandler(event)
    {
        this.name=event.target.value;
    }
}