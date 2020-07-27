import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    user: User;
   
    constructor() {
    }

    ngOnInit() {
        this.user = {
            lastName: 'Chmiel',
            firstName: 'Stan',
            age: 30,
            address: {
                street: 'Polna 8',
                city: 'Krępa',
                state: 'mazowieckie'
            }
        }
    }
}

