import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{
  
  searchBarForm = new FormGroup({    
  searchData: new FormControl('587824')
   })
  
  constructor(){
  }

  Spirit : String;

  spiritEntered()
  {
    const spirit = this.Spirit;
    console.log(spirit);
  }

  onSubmit(data){
      console.log('dfdf')
  }

}
