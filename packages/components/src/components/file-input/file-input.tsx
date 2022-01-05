import { Component, Prop, h, Host, State, Element } from '@stencil/core';

import { Theme } from '../../utils/types';
import { Query } from '../../utils/decorators';

export type FileInputSizes = 'large' | 'medium'

@Component({
  tag: 'lp-file-input',
  styleUrl: 'file-input.scss',
  shadow: true,
})
export class FileInput {

  @Element() hostEl: HTMLElement;

  @Query('input[type="file"]') inputEl: HTMLInputElement;

  @Prop() theme: Theme;
  @Prop() size: FileInputSizes;

  /**
   * Can be provided as a child element
   */
  @Prop() buttonLabel: string = 'Choose a file...';

  @Prop() uploading: boolean = false;

  /**
   * Can be provided as a child element
   */
  @Prop() uploadingButtonLabel: string = 'Uploading...';

  @Prop() uploadingProgress: string | number = 0;
  @Prop() multiple: boolean;
  @Prop() error: boolean;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean;

  @State() selectedFiles: string[] = [];

  private inputInputHandler = (e): void => {
    const target = e.target as HTMLInputElement;

    const selectedFiles: string[] = [];

    for (let i = 0; i < target.files.length; i++) {
      selectedFiles.push(target.files[i].name);
    }

    this.selectedFiles = selectedFiles;
  };

  private fileUploadButtonClickHandler = (): void => {
    if (this.disabled || this.readonly) {
      return;
    }

    this.inputEl.click();
  };

  private chipRemoveHandler = (e): void => {
    this.selectedFiles = this.selectedFiles.filter(file => file !== e.target.id);
  }

  render() {
    return (
      <Host>
        <input type="file" multiple={this.multiple} onInput={this.inputInputHandler} />

        <button part="file-upload-button" disabled={this.disabled} onClick={this.fileUploadButtonClickHandler}>
          {(
            this.uploading
              ? <slot name="uploading-button-label">{this.uploadingButtonLabel}</slot>
              : <slot name="button-label">{this.buttonLabel}</slot>
          )}
        </button>

        <div part="selected-files">
          {(
            this.multiple
              ? (
                <lp-multiselect-chip size="small">
                  {this.selectedFiles.map(file => (
                    <lp-chip key={file} id={file} onRemove={this.chipRemoveHandler}>{file}</lp-chip>
                  ))}
                </lp-multiselect-chip>
              )
              : <span>{this.selectedFiles[0]}</span>
          )}

          {this.uploading && <div part="uploading-progress-bar" style={{ width: `${this.uploadingProgress}%` }} />}
        </div>
      </Host>
    );
  }
}
