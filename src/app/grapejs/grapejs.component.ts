import { Component, OnInit } from '@angular/core';
import grapesjs from "grapesjs";
import * as grapesjsPresetWebpagePlugin from "grapesjs-preset-webpage";

@Component({
  selector: 'app-grapejs',
  templateUrl: './grapejs.component.html',
  styleUrls: ['./grapejs.component.scss']
})
export class GrapejsComponent  implements OnInit {
  editor:any = null;

  ngOnInit(): void {
    this.editor = grapesjs.init({
      container: '#gjs-container',
      plugins: [grapesjsPresetWebpagePlugin.default],
      pluginsOpts: {}
    })
  //example in react - https://codesandbox.io/s/grapejs-page-builder-uqlvb?file=/src/components/pagebuilder/index.js
  }
}
