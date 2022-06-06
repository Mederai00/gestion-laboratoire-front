import { Component, OnInit } from '@angular/core';
import { Laboratoire } from '../models/laboratoire.model';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  content?: string;
  laboData: Laboratoire[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
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

    this.userService.getLaboData().subscribe({
      next: (data) => {
        console.log(data);
        this.laboData = data._embedded.laboratoire;
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
