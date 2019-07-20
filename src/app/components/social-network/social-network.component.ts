import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  menu = ['Videos', 'People', 'Documents', 'Events', 'Communities', 'Favorites', 'Channels'];
  // menu = [
  //   {name: 'Videos', isLast: false},
  //   {name: 'People', isLast: false},
  //   {name: 'Documents', isLast: false},
  //   {name: 'Events', isLast: false},
  //   {name: 'Communities', isLast: false},
  //   {name: 'Favorites', isLast: false},
  //   {name: 'Channels', isLast: true},
  // ];

  constructor() { }

  ngOnInit() {
  }

}
