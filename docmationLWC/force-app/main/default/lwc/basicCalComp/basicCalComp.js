import { LightningElement } from 'lwc';

export default class BasicCalComp extends LightningElement {
    Fno=0;Sno=0; res=0;
    showResult=false;
    Firstno(event){
        this.Fno=event.target.value;
    }
    Secondno(event){
        this.Sno=event.target.value;
    }
    Add(event){
        this.showResult=true;
        this.res=Number(this.Fno)+Number(this.Sno);
    }
}