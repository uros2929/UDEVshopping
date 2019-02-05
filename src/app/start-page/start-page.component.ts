import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  @ViewChild('startPageAboutUs') startPageAboutUs;
  @ViewChild('startPageShop') startPageShop;
  @ViewChild('startPageGallery') startPageGallery;
  @ViewChild('startPageContact') startPageContact;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAboutUsPath() {
    this.startPageShop.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageGallery.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageContact.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    this.startPageAboutUs.nativeElement.style.animation = 'animationForSelectedPathTopBottom 1.3s both';
    setTimeout(() => {
      this.router.navigateByUrl('/about');
    }, 1500);

  }
  goToShopPath() {
    this.startPageShop.nativeElement.style.animation = 'animationForSelectedPathRightLeft 1.3s both';
    this.startPageGallery.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageContact.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    this.startPageAboutUs.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    setTimeout(() => {
      this.router.navigateByUrl('/shop');
    }, 1500);
  }
  goToGalleryPath() {
    this.startPageShop.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageGallery.nativeElement.style.animation = 'animationForSelectedPathRightLeft 1.3s both';
    this.startPageContact.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    this.startPageAboutUs.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    setTimeout(() => {
      this.router.navigateByUrl('/gallery');
    }, 1500);
  }
  goToContactPath() {
    this.startPageShop.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageGallery.nativeElement.style.animation = 'animationForAboutUsPathLeftRight 1.3s both';
    this.startPageAboutUs.nativeElement.style.animation = 'animationForAboutUsPathBottomTop 1.3s both';
    this.startPageContact.nativeElement.style.animation = 'animationForSelectedPathTopBottom 1.3s both';
    setTimeout(() => {
      this.router.navigateByUrl('/contact');
    }, 1500);
  }
}
