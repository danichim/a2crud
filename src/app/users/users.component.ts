import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";
// import {GridOptions} from "ag-grid";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];
  // private gridOptions: GridOptions;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);

    // this.gridOptions = <GridOptions>{};
    //     this.gridOptions.columnDefs = [
    //         {
    //             headerName: "ID",
    //             field: "id",
    //             width: 100
    //         },
    //         {
    //             headerName: "Value",
    //             field: "value",
    //             cellRendererFramework: RedComponentComponent,
    //             width: 100
    //         },

    //     ];
    //     this.gridOptions.rowData = [
    //         {id: 5, value: 10},
    //         {id: 10, value: 15},
    //         {id: 15, value: 20}
    //     ]
  }

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert("Could not delete user.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}
