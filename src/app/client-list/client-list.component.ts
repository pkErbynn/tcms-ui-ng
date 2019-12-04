import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.clientService.getClients()
    .subscribe(data => {
      this.clientList = data;
    });
  }


}
