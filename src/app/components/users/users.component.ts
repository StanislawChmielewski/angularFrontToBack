import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended = false;
  enableAddUser: boolean = true;
  currentClasses = {};

  constructor() { }

  ngOnInit(): void {
    console.log('init...');
    this.setUsers();
    this.showExtended = true;
    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAddUser,
      'big-text':this.showExtended
    }
  }

  setUsers() {
    this.users = [
      {
        lastName: 'Chmiel',
        firstName: 'Stan',
        age: 30,
        address: {
          street: 'Polna 8',
          city: 'Krępa',
          state: 'mazowieckie'
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true
      },
      {
        lastName: 'Koteł',
        firstName: 'Oleś',
        age: 130,
        address: {
          street: 'Żabia 58',
          city: 'Olecko',
          state: 'warmińskie'
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false
      },
      {
        lastName: 'Meszka',
        firstName: 'Anna',
        age: 23,
        address: {
          street: 'Musz 458',
          city: 'Kalisz',
          state: 'pomorskie'
        },
        image: "http://lorempixel.com/600/600/people/1",
        isActive: true
      }
    ];

    let user1: User;
    user1 = {
      lastName: 'Ogórek',
      firstName: 'Karol'
    };

    this.addUser(user1)
  }
}
