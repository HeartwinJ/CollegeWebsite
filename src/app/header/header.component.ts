import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navClass: string = ' ';
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var $affectedElements = $("div,p,ul,li,a,strong");
      $affectedElements.each(function () {
          var $this = $(this);
          $this.data("orig-size", $this.css("font-size"));
      });
    
      $("#btn-increase").click(function () {
          changeFontSize(1);
      })
    
      $("#btn-decrease").click(function () {
          changeFontSize(-1);
      })
    
      $("#btn-orig").click(function () {
          $affectedElements.each(function () {
              var $this = $(this);
              $this.css("font-size", $this.data("orig-size"));
          });
      })
    
      function changeFontSize(direction) {
        $affectedElements.each(function () {
            var $this = $(this);
            $this.css("font-size", parseInt($this.css("font-size")) + direction);
        });
      }
    });
  }

  toggle() {
    if (this.navClass == ' ') {
      this.navClass = 'Show';
    }
    else {
      this.navClass = ' ';
    }
  }
}
