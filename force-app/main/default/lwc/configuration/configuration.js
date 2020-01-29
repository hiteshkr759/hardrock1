import { LightningElement, track, wire } from 'lwc';
import authenticate from '@salesforce/apex/JiraConnect.authenticate';

export default class Configuration extends LightningElement {

    formData = {};

    handleOnInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.formData[name] = value;
    }

    validateForm(){
        return true;
    }

    async handleOnSubmit(){
        if(this.validateForm()){
            ///console.log(this.formData);
            try{
                const authResponse = await authenticate(this.formData);
                console.log('Api Responese',authResponse);
            }catch(e){
                console.log('Error',e);
            }
            
            this.dispatchEvent(
                new CustomEvent('loged',{detail : true })
            );
        }else{
            console.log('Form is not Valid');
        }
    }

    // @wire(authenticate, {
    //     emailId : '$formData.email',
    //     apiKey : '$formData.apiKey'
    // })
    // authenticate(){

    // }
    // authenticate(formData){

    // }

}