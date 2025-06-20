import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface shareholdings {
  companyName:string,
  buyPrice:number,
  currentPrice:number,
  quantity:number
}


@Component({
  selector: 'app-holdings',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './holdings.component.html',
  styleUrl: './holdings.component.css'
})
export class HoldingsComponent {

  holdings:shareholdings[]=[
 {
    companyName: 'Reliance Industries',
    buyPrice: 2400,
    currentPrice: 2750,
    quantity: 10
  },
  {
    companyName: 'Tata Consultancy Services',
    buyPrice: 3200,
    currentPrice: 3550,
    quantity: 5
  },
  {
    companyName: 'HDFC Bank',
    buyPrice: 1500,
    currentPrice: 1620,
    quantity: 20
  },
  {
    companyName: 'Infosys',
    buyPrice: 1300,
    currentPrice: 1250,
    quantity: 15
  },
  {
    companyName: 'ITC Ltd',
    buyPrice: 290,
    currentPrice: 260,
    quantity: 100
  },
  {
    companyName: 'Adani Green Energy',
    buyPrice: 1100,
    currentPrice: 980,
    quantity: 8
  },
  {
    companyName: 'Larsen & Toubro',
    buyPrice: 2200,
    currentPrice: 2400,
    quantity: 12
  },
  {
    companyName: 'Maruti Suzuki',
    buyPrice: 8900,
    currentPrice: 9100,
    quantity: 3
  },
  {
    companyName: 'Bajaj Finance',
    buyPrice: 6900,
    currentPrice: 7150,
    quantity: 4
  },
  {
    companyName: 'Hindustan Unilever',
    buyPrice: 2500,
    currentPrice: 2460,
    quantity: 6
  }
  ]

public getCheckProfitLoss = (current: number, buy: number): boolean => {
  return current > buy;
}


}
