import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clientList =[
    {
      name: "john erbynn...",
      email: "me@gmail.com",
      telephone: "+223 55 347 2114",
      address: "norway, taifa, accra, gh"
    },
    {
      name: "john erbynn",
      email: "me@gmail.com",
      telephone: "+223 55 347 2114",
      address: "norway, taifa, accra, gh"
    },
    {
      name: "john erbynn",
      email: "me@gmail.com",
      telephone: "+223 55 347 2114",
      address: "norway, taifa, accra, gh"
    },
    {
      name: "john erbynn",
      email: "me@gmail.com",
      telephone: "+223 55 347 2114",
      address: "norway, taifa, accra, gh"
    },
    {
      name: "john erbynn",
      email: "me@gmail.com",
      telephone: "+223 55 347 2114",
      address: "norway, taifa, accra, gh"
    }
  ]

}
