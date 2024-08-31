import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Message } from '../message';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UsuarioComponent, NgIf, NgFor, FormsModule, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  chat: Message[] = [];

  addMessage(message: Message) {
    this.chat.push(message);
  }
}
