import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './JqExample.module.scss';
import * as strings from 'jqExampleStrings';
import { IJqExampleWebPartProps } from './IJqExampleWebPartProps';
import * as $ from 'jquery';

export default class JqExampleWebPart extends BaseClientSideWebPart<IJqExampleWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div>
              <input id="testInput" type="text" />
              <button id="testButton">Hi please click me</button>
            </div>
          </div>
        </div>
      </div>`;
      $("#testButton").click(() => this.jqTest());
  }

  public jqTest():void {
    alert($("#testInput").val()); 
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
