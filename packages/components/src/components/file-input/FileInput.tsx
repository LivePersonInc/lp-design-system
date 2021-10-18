import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';

import { Theme } from '../../common/types';
import Styled from '../../common/Styled';

import '../chip';

import styles from './FileInput.scss';

export type FileInputSizes = 'large' | 'medium'

export type FileInputCustomProps = {
  theme?: Theme
  size?: FileInputSizes
  buttonLabel?: string
  uploading?: boolean
  uploadingButtonLabel?: string
  uploadingProgress?: string | number
  error?: boolean
}

export type FileInputProps = Omit<JSX.IntrinsicElements['input'], 'size'> & FileInputCustomProps

export type FileInputComponent = React.FC<FileInputProps>

export const events = [
  'blur',
  'change',
  'focus',
  'input',
  'key-down',
  'key-press',
  'key-up',
];

const FileInput: FileInputComponent = (
  {
    theme,
    size,
    buttonLabel,
    uploading,
    uploadingButtonLabel,
    uploadingProgress,
    error,
    value: valueProp,
    defaultValue,
    multiple,
    children,
    ...props
  },
) => {
  const inputElRef = useRef<HTMLInputElement>(null);
  const chipGroupElRef = useRef<HTMLInputElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const dispatch = useContext(EventContext);

  const inputEventHandler = useCallback((e: React.SyntheticEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;

    if (e.type === 'input' && target.files) {
      const selectedFiles: string[] = [];

      for (let i = 0; i < target.files.length; i++) {
        selectedFiles.push(target.files[i].name);
      }

      setSelectedFiles(selectedFiles);
    }

    dispatch(new CustomEvent(e.type, { detail: e.target }));
  }, [dispatch]);

  const inputsEvents = useMemo(() => ({
    onBlur: inputEventHandler,
    onChange: inputEventHandler,
    onFocus: inputEventHandler,
    onInput: inputEventHandler,
    onKeyDown: inputEventHandler,
    onKeyPress: inputEventHandler,
    onKeyUp: inputEventHandler,
  }), [inputEventHandler]);

  const fileUploadButtonClickHandler = useCallback((): void => {
    inputElRef.current?.click();
  }, []);

  const fileRemoveHandler = useCallback((e): void => {
    setSelectedFiles(state => {
      const index = state.findIndex(file => file === e.detail.id);

      state.splice(index, 1);

      return [...state];
    });
  }, []);

  useEffect(() => {
    if (multiple && chipGroupElRef.current) {
      // @ts-ignore
      chipGroupElRef.current.chips = selectedFiles.map(file => ({
        id: file,
        size: 'small',
        label: file,
        removable: true,
      }));

      if (!selectedFiles.length && inputElRef.current) {
        inputElRef.current.value = '';
      }
    }
  }, [selectedFiles, fileRemoveHandler]);

  useEffect(() => {
    const chipGroupEl = chipGroupElRef.current;

    if (multiple) {
      chipGroupEl?.addEventListener('chip-remove', fileRemoveHandler);
    }

    return () => {
      chipGroupEl?.removeEventListener('chip-remove', fileRemoveHandler);
    };
  }, [multiple, fileRemoveHandler]);

  return (
    <Styled styles={styles}>
      <input {...props} ref={inputElRef} type="file" multiple={multiple} {...inputsEvents} />

      <button
        // @ts-ignore
        part="file-upload-button"
        disabled={props.disabled}
        onClick={fileUploadButtonClickHandler}
      >
        {(
          uploading
            ? <slot name="uploading-button-label">{uploadingButtonLabel}</slot>
            : <slot name="button-label">{buttonLabel}</slot>
        )}
      </button>

      <div
        // @ts-ignore
        part="selected-files"
      >
        {multiple ? <lp-chip-group ref={chipGroupElRef} /> : <span>{selectedFiles[0]}</span>}

        {uploading && (
          <div
            // @ts-ignore
            part="uploading-progress-bar"
            style={{ width: `${uploadingProgress}%` }}
          />
        )}
      </div>
    </Styled>
  );
};

FileInput.defaultProps = {
  theme: 'dark',
  size: 'large',
  buttonLabel: 'Choose a file...',
  uploading: false,
  uploadingButtonLabel: 'Uploading...',
  uploadingProgress: 0,
  multiple: false,
  error: false,
  disabled: false,
  readOnly: false,
};

export default FileInput
