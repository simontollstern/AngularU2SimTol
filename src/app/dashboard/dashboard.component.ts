import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// The Dashboard component - Basically a wrapper for other components
export class DashboardComponent {
  userList: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

  // Runs when the addUser event is emitted
  // Pushes the user input to userList and clears the input field
  onAddUser(input: string){
    if(input.length > 0){
      this.userList.push(input);
      document.querySelector('input').value = '';
      document.querySelector('input').focus();
    }
  }

  // Runs when the removeUser event is emitted
  // Removes the last value from userList
  onRemoveUser(){
    this.userList.pop();
  }

  constructor() { }
}
