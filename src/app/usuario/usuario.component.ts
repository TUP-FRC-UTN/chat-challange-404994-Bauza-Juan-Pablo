import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() user: string = "";
  textMessage: string = "";
  @Output() postMessage = new EventEmitter<Message>();

  sendMessage() {
    let message: Message = {
      text: this.textMessage,
      user: this.user
    };
    this.postMessage.emit(message);
    this.textMessage = "";
  }

}
