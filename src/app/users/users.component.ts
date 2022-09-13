import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user: {id: number, name: string}

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];


  onClickOfUser(id: number) {
    let user = this.users.find(user => user.id == id) || this.user
    user.id = user.id
    user.name = user.name
  }
}
