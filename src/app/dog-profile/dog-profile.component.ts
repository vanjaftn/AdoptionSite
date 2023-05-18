import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {

  allFiles : Array<String> = JSON.parse(localStorage.getItem('imgs')!)
  imgs : Array<String> = new Array
  vids : Array<String> = new Array
  firstImg : String = this.allFiles[0];
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.allFiles)
    this.seperatePhotosAndVideos()
  }

  seperatePhotosAndVideos(){
    this.allFiles.map(file => {
        if(file.endsWith("jpg")){
          this.imgs.push(file)
          console.log(this.imgs)
          console.log(this.vids)
      }
        else{
          this.vids.push(file)
          console.log(this.imgs)
          console.log(this.vids)
        }
    })
  }

}
