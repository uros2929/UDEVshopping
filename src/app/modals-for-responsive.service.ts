import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsForResponsiveService {

  constructor() { }

  openModalNavBarResponsive() {
    document.getElementById('modalForResponsiveNavBar').style.display = "block";
  }
  closeModalNavBarResponsive(event) {
    if (event.target.id == "modalForResponsiveNavBar") {
      document.getElementById('modalForResponsiveNavBar').style.display = "none";
    }
  }
  openCloseModalSearchResponsive(div) {
    if (document.getElementById(div).style.display == "") {
      document.getElementById(div).style.display = "flex"
    } else {
      document.getElementById(div).style.display = ""
    }

  }
  openCloseModalSearchResponsiveAccessories(div){
    if (document.getElementById(div).style.display == "") {
      document.getElementById(div).style.display = "grid"
    } else {
      document.getElementById(div).style.display = ""
    }

  }
}
