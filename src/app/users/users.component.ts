import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsersService) {  }

    public filterQuery = "";
    public rowsOnPage = 3;
    public sortBy = "id";
    public sortOrder = "asc";

  ngOnInit() {

    this.usersService.getUsers()
      .subscribe(// The 1st callback handles the data emitted by the observable.
      // In your case, it's the JSON data extracted from the response.
      // That's where you'll find your total property.
      (data) => {
        this.users = data;
        console.log('this.users', this.users);
        console.log('data', data);
        // console.log('this.data', this.data);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    )
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

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

}
