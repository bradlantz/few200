import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {
  tipAmount: string;
  totalBillAmount: string;
  tipPct: number;

  constructor() { }

  ngOnInit() {
  }

  calculateTip(billAmount: HTMLInputElement) {
    console.log(billAmount.valueAsNumber);
    this.tipAmount = (billAmount.valueAsNumber * this.tipPct).toString();
    this.totalBillAmount = (billAmount.valueAsNumber + Number(this.tipAmount)).toString();
  }

  setTipPercent(tipPercent: number) {
    this.tipPct = tipPercent;
    console.log(tipPercent);
  }
}
