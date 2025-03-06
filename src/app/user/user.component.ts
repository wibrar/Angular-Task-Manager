import { Component, computed, signal, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string; 
  @Input() name!: string;
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    
    
  }
}
