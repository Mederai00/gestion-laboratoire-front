import { Component, OnInit } from '@angular/core';
import { Laboratoire } from '../models/laboratoire.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-responsable',
  templateUrl: './board-responsable.component.html',
  styleUrls: ['./board-responsable.component.css'],
})
export class BoardResponsableComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getResponsableBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      },
    });
  }
}
