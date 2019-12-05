import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList = []

  // To make our services available to Component classes, inject services in the constructors 
  constructor(private clientService: ClientService) { }   

  ngOnInit() {
    // An HttpClient method does not begin its HTTP request until you call subscribe() on the observable returned by that method
    // always subscribe to the data that is returned from the server.
    this.clientService._getClients().subscribe(data => {
      this.clientList = data;
      console.log(data)
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
