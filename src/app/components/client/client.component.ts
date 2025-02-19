import { Component } from '@angular/core';
import { Client } from '../../model/class/Client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  client : Client = new Client();
  clientList : Client[] =  [];

  onSaveClient(){

  }



}
