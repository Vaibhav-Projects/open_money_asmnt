import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  minValue: number = 150000;
  maxValue: number = 300000;
  value: number = 0;

  featuresRow1: Feature[] = [{ image: "Get Paid Instantly.png", heading: "Quick cash disbursement", header: "Get terms loans that your business needs within 72 hrs" },
  { image: "Low interest rate.png", heading: "Low-interset rate", header: "Achieve your financial goals with an amazing interest rate sharing at 13% per annum" },
  { image: "Secure Payments.png", heading: "Zero Paperwork", header: "Get started instantly by submitting only your basic details & bank statements" }];

  featuresRow2: Feature[] = [{ image: "freelancer_feature_icon_6@1.5x.png", heading: "Ace your business finances", header: "Managing banking, accounting & everything in between, on one platform" },
  { image: "Covid.png", heading: "Loans to fight COVID-19", header: "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh" }]
  selected = 'option1';

  constructor() { }

  ngOnInit(): void {
  }

}
