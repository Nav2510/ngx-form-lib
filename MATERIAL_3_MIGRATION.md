# Material 3 Migration Guide

## Overview

This document outlines the migration from legacy Angular Material to Material 3 (MDC-based components) for the ngx-form-lib project.

## Changes Made

### 1. Theme Update

- **Before**: `deeppurple-amber.css` (legacy theme)
- **After**: `indigo-pink.css` (Material 3 theme)
- **Files Updated**: `angular.json` (both build and test configurations)

### 2. Button Component Enhancements

#### New Material 3 Button Variants

Added support for Material 3 button variants in `button-attribute.model.ts`:

```typescript
// New Material 3 variants
MatFilledButton = 'mat-fill',
MatOutlinedButton = 'mat-outline',
MatTextButton = 'mat-text',
MatElevatedButton = 'mat-elevated',
MatTonalButton = 'mat-tonal',
```

#### Button Template Updates

- Updated `button.component.html` to support new Material 3 button classes
- Maintained backward compatibility with legacy button variants
- Added proper Material 3 styling

#### Button Styles

Enhanced `button.component.scss` with Material 3 design principles:

- Rounded corners (20px border-radius)
- Material 3 typography (font-weight: 500)
- No text transform (removed uppercase)
- Smooth transitions
- Material 3 color variables

### 3. Form Field Enhancements

#### Global Material 3 Styles

Updated `styles.scss` with Material 3 form field improvements:

- Larger border radius (8px) for form fields
- Material 3 typography for error messages
- Enhanced focus states
- Material 3 color variables

#### Form Container Updates

Enhanced `form.component.scss`:

- Larger border radius (12px) for form containers
- Material 3 elevation (box-shadow)
- Improved visual hierarchy

### 4. Component-Specific Updates

#### Form Fields

- **Input**: Enhanced with Material 3 styling
- **Textarea**: Enhanced with Material 3 styling
- **Dropdown**: Enhanced with Material 3 styling
- **Checkbox**: Rounded corners (4px border-radius)
- **Radio**: Circular radio buttons
- **Button**: Multiple Material 3 variants

### 5. Demo Configuration

Updated `form.mock.ts`:

- Changed button attribute from `'mat-flat-button'` to `'mat-fill'`
- Changed form appearance from `'outline'` to `'fill'`

## Material 3 Design Principles Applied

### 1. Rounded Corners

- Form containers: 12px border-radius
- Form fields: 8px border-radius
- Buttons: 20px border-radius
- Checkboxes: 4px border-radius

### 2. Typography

- Font weight: 500 for buttons
- No text transform (removed uppercase)
- Consistent font sizes

### 3. Elevation

- Material 3 box-shadow for form containers
- Proper elevation for elevated buttons

### 4. Color System

- Using Material 3 CSS custom properties
- Consistent color theming
- Proper contrast ratios

### 5. Transitions

- Smooth 0.2s ease-in-out transitions
- Consistent animation timing

## Backward Compatibility

The migration maintains full backward compatibility:

- Legacy button variants still work
- Existing form configurations continue to function
- No breaking changes to the API

## Benefits of Material 3

1. **Modern Design**: Updated to latest Material Design guidelines
2. **Better Accessibility**: Improved focus states and contrast
3. **Consistent Theming**: Better integration with Material 3 themes
4. **Performance**: MDC-based components are more performant
5. **Future-Proof**: Ready for future Material Design updates

## Usage Examples

### Material 3 Button Variants

```typescript
// Filled button (primary action)
new Button({
  attribute: 'mat-fill',
  field: new Field<string>({...})
})

// Outlined button (secondary action)
new Button({
  attribute: 'mat-outline',
  field: new Field<string>({...})
})

// Text button (tertiary action)
new Button({
  attribute: 'mat-text',
  field: new Field<string>({...})
})

// Elevated button (with shadow)
new Button({
  attribute: 'mat-elevated',
  field: new Field<string>({...})
})

// Tonal button (subtle emphasis)
new Button({
  attribute: 'mat-tonal',
  field: new Field<string>({...})
})
```

### Material 3 Form Appearance

```typescript
new ParentConfig({
  appearance: "fill", // Material 3 filled appearance
  color: "primary",
});
```

## Testing

To test the Material 3 migration:

1. **Build the project**: `npm run build`
2. **Serve the application**: `npm start`
3. **Verify visual changes**: Check form appearance and button variants
4. **Test functionality**: Ensure all form interactions work correctly

## Future Enhancements

1. **Dark Theme Support**: Add Material 3 dark theme
2. **Custom Theming**: Implement custom Material 3 theme
3. **Animation Enhancements**: Add Material 3 motion
4. **Accessibility**: Further improve accessibility features

## Notes

- The bundle size increased slightly due to Material 3 enhancements
- All existing functionality remains intact
- The migration is non-breaking for existing implementations
- Material 3 provides better performance and accessibility
