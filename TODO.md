# Current task
Facets for disable, hidden, fill, in form dependecies.

# TODO List

## Styles
1. Setup global styles in library with variables and imports

## Models
1. Remove all types and change it to Enum.
2. Add sort by order in mock. ✔ [Fixed bugs and todo](https://github.com/Nav2510/ngx-form-lib/pull/7/commits/4311ab8007f6f043e79d6f4b09ed7ab92ff3a9aa)
3. Add facets for various meta properties, disable, hidden, populate, eventTrigger.

## Validators
1. Add all validators with error messages
2. Add dependency property to `Validation`, i.e. on providing dependency validation will be enabled with the required value of depedent field.

## Components
1. Create dynamic components instead of currently hardcoded in `form component`. ✔ [Fixed bugs and todo](https://github.com/Nav2510/ngx-form-lib/pull/7/commits/61b711e70cee4b3659a68a066963c4012fc5b67)
2. Create `@shared/enum/test` path format.
3. Add fill options, hint in properties.
4. Add aria-label supports in library.
5. Add select trigger for multiple and custom value
6. Add appearance for form which can be override from fields appearance.
7. Set `mat-button` dynamically. ✔ [Renamed models, cleaned up button code](https://github.com/Nav2510/ngx-form-lib/commit/61b711e70cee4b36359a68a066963c4012fc5b67)
8. Check for all the `TODO` comments
9. Optimize code by removing extra wrappers in html code [Optional] => Use createComponent in container component-> directive after angular 15
10. Implement hidden field type as spacer for form.
11. Try moving mat-error to a componenet and implement dynamic error message.

# Add Ons
1. Nested forms.
2. Create symantics for npm package.
3. Onboarding Helper on form-lib.

# Fixes
1. Issue with the width for icon and fab buttons.
2. Fix `dropdown` component