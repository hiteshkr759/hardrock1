import { LightningElement } from 'lwc';

export default class JiraApp extends LightningElement {

    logeIn = false;
    
    issueList = [{
        issue : 'Issue 1',
        author : 'Hitesh',
    },{
        issue : 'Issue 2',
        author : 'Vikrant',
    }]

    handleLogedIn(event){
        console.log('Hanldle logeIn',event.detail);
    }
}