import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsForResponsiveService {

  constructor() { }

  openModalNavBarResponsive(){
    document.getElementById('modalForResponsiveNavBar').style.display="block";
  }
  closeModalNavBarResponsive(event){
    if(event.target.id == "modalForResponsiveNavBar"){
      document.getElementById('modalForResponsiveNavBar').style.display="none";
    }
  }
}
