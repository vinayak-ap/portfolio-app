import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioHelper } from "../../helper/portfolio.helper";
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  @ViewChild('textStatic') textStatic;
  @ViewChild('textTyping') textTyping;

  arrIntroduction: Array<string> = PortfolioHelper.arrIntroduction;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initTypeWriter();
  }

  initTypeWriter() {
    let textStatic = this.textStatic.nativeElement;
    let textTyping = this.textTyping.nativeElement;

    const writerTextStatic = new Typewriter(textStatic, {
      typeSpeed: 60
    })

    const writerTextTyping = new Typewriter(textTyping, {
      typeSpeed: 60
    })

    writerTextStatic
      .changeCursorColor('black') // Set the cursor color to yellow

      .changeTypeColor('black')
      .type('Hello, I am Vinayak Atugade - Patil')
      .removeCursor()
      .then(writerTextTyping.start.bind(writerTextTyping))
      .start()


    writerTextTyping
      .changeCursorColor('grey') // Set the cursor color to yellow

      .changeTypeColor('grey')
      .type('Software Engineer')
      .rest(500)
      .clear()
      .changeTypeColor('grey')
      .type('UI Developer')
      .rest(500)
      .clear()
      .changeTypeColor('grey')
      .type('I am creative')
      .rest(500)
      .clear()
      .type('I love to design and develop')
      .rest(500)
      .clear()
      .changeTypeColor('grey')
      .removeCursor()
      .then(writerTextStatic.start.bind(writerTextStatic))

    // writerTextTyping.strings(
    //   400,
    //   "Set many strings",
    //   "In just one call",
    //   "Using the 'strings' method"
    // )
    //   .changeTypeColor('red')
    //   .start()
    //   .rest(500)
    //   .clear()
    //   .changeTypeColor('black')
    //   .then(writerTextStatic.start.bind(writerTextStatic))
  }


};





