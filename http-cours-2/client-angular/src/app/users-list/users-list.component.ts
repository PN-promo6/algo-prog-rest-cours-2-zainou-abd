import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchUsers()
      .subscribe(
        res => { this.users = res },
        error => {
          console.log(error);
        }
      );
  }
}
