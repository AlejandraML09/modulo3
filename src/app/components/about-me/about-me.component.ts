import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  aboutMe: any;

  constructor(private dataPortfolio: PortfolioService) {}
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe((data) => {
      console.log(data);
      this.aboutMe = data;
    });
  }
}
