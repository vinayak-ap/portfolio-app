import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('textStatic') textStatic;
  @ViewChild('textTyping') textTyping;

  // arrIntroduction: Array<string> = PortfolioHelper.arrIntroduction;
  constructor() { }

  ngOnInit(): void {
  }
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
      .changeCursorColor('white') // Set the cursor color to yellow

      .changeTypeColor('white')
      .type('Hello, I am Rohit Pathare')
      .removeCursor()
      .then(writerTextTyping.start.bind(writerTextTyping))
      .start()


    writerTextTyping
      .changeCursorColor('yellow') // Set the cursor color to yellow

      .changeTypeColor('yellow')
      .type('Software Engineer')
      .rest(500)
      .clear()
      .changeTypeColor('yellow')
      .type('UI Developer')
      .rest(500)
      .clear()
      .changeTypeColor('yellow')
      .type('I am creative')
      .rest(500)
      .clear()
      .type('I love to design and develop')
      .rest(500)
      .clear()
      .changeTypeColor('yellow')
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


}
