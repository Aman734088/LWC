import { LightningElement } from 'lwc';

export default class MyContactList extends LightningElement {
    contactList=[
        {
            id:100,
            accountName:'Amit kumar',
            firstName:'Amit',
            lastName:'kumar',
            contact:'12345',
            email:'amt@docmation.com'
    
        },
        {
            id:100,
            accountName:'Aman kumar',
            firstName:'Aman',
            lastName:'kumar',
            contact:'1235',
            email:'aman@docmation.com'
    
        },
        {
            id:100,
            accountName:'Amar',
            firstName:'Amar',
            lastName:'kumar',
            contact:'1234',
            email:'amarr@docmation.com'
    
        },
    ];
}