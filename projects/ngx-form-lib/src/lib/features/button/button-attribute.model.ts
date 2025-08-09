export enum ButtonAttributeEnum {
  MatButton = 'mat-button',
  MatRaisedButton = 'mat-raised-button',
  MatFlatButton = 'mat-flat-button',
  MatIconButton = 'mat-icon-button',
  MatStrokedButton = 'mat-stroked-button',
  MatFab = 'mat-fab',
  MatMiniFab = 'mat-mini-fab',
  // Material 3 variants
  MatFilledButton = 'mat-fill',
  MatOutlinedButton = 'mat-outline',
  MatTextButton = 'mat-text',
  MatElevatedButton = 'mat-elevated',
  MatTonalButton = 'mat-tonal',
}

export type ButtonAttribute =
  | 'mat-button'
  | 'mat-raised-button'
  | 'mat-flat-button'
  | 'mat-icon-button'
  | 'mat-stroked-button'
  | 'mat-fab'
  | 'mat-mini-fab'
  // Material 3 variants
  | 'mat-fill'
  | 'mat-outline'
  | 'mat-text'
  | 'mat-elevated'
  | 'mat-tonal';
