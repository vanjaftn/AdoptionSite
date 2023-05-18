import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/Dog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  allDogs : Array<Dog> = new Array;
  dog1 : Dog = new Dog;
  dog2 : Dog = new Dog;
  constructor() {}

  ngOnInit(): void {
    this.getAllDogs()
  }

  getAllDogs(){
    
    this.dog1.name = "Frida"
    this.dog1.info = "super"
    this.dog1.gender = "Girl"
    this.dog1.img.push("/assets/images/frida/fridaPic1.jpg")
    this.dog1.img.push("/assets/images/frida/fridaVid1.mp4")

    this.allDogs.push(this.dog1)
    console.log(this.dog1)

    this.dog2.name = "Nora"
    this.dog2.info = "ludak"
    this.dog2.gender = "Girl"
    this.dog2.img.push("/assets/images/nora/noraPic2.jpg")
    this.dog2.img.push("/assets/images/nora/noraPic1.jpg")
    this.dog2.img.push("/assets/images/nora/noraPic3.jpg")
    this.dog2.img.push("/assets/images/nora/noraPic4.jpg")
    
    this.allDogs.push(this.dog2)

  }

  RedirectToDog(imgs : Array<String>){
    localStorage.setItem("imgs", JSON.stringify(imgs));
    window.location.href = '/dog-profile'
  }
}
