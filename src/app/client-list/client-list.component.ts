import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList = []

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService._getClients().subscribe(data => {
      
    })
  }

  // clientList =[
  //   {
  //     name: "john erbynn...",
  //     email: "me@gmail.com",
  //     telephone: "+223 55 347 2114",
  //     address: "norway, taifa, accra, gh"
  //   },

  //   {
  //     name: "john erbynn",
  //     email: "me@gmail.com",
  //     telephone: "+223 55 347 2114",
  //     address: "norway, taifa, accra, gh"
  //   }
  // ]

}
