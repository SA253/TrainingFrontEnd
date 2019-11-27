import { Component, OnInit } from '@angular/core';
import {ServiceService, Service} from '../HelperServices/serviceService';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private sService: ServiceService) { }
  services : Service[];
  ngOnInit() {
    this.sService.getServices().subscribe(response=>this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response){
    this.services = response;
  }

}
