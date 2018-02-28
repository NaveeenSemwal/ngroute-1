import { Component, OnInit } from '@angular/core';
import { Person } from "./Person";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  persons: Person[] = new Array<Person>();

  constructor() {

    this.persons.push({

      Name: "Naveen",
      Age: 29
    });

  }

  ngOnInit() {
  }

}
