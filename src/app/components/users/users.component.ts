import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  enableAddUser: boolean;
  showUserForm: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.showUserForm = false;
    this.enableAddUser = true;
    console.log('init... and  enableAddUser %s', this.enableAddUser);
    this.setUsers();
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  toggleHide(user: User): void {
    user.hide = !user.hide;
  }

  addUserFromEvent(e): void {
    console.log(e);

    let user1: User;
    user1 = {
      lastName: 'Ogórek',
      firstName: 'Karol'
    };

    this.addUser(user1);
  }


  setUsers(): void {
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
        isActive: true,
        registered: new Date('2020-09-01'),
        hide: true
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
        isActive: false,
        registered: new Date('2019-08-04 08:54:34'),
        hide: true
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
        isActive: true,
        registered: new Date('2059-02-23 18:12:36'),
        hide: true
      }
    ];

  }
}
