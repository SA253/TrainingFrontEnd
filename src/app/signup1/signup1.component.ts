import { Component, OnInit } from '@angular/core';
import { SignUpService, ServiceProvider} from '../HelperServices/signupService'

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  sp: ServiceProvider;
  constructor(private signupservice: SignUpService) { }

  ngOnInit() {
  }

}
