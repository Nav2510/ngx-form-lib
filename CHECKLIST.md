# ngx-form-lib — consolidated checklist

Single place for roadmap items, housekeeping, Material 3 reference, and testing notes. Replaces `TODO.md` and `MATERIAL_3_MIGRATION.md`.

---

## Repository and tooling

- [ ] Resolve or commit `package-lock.json` when it differs from `origin`.
- [ ] Add CI (e.g. GitHub Actions): `npm ci`, `ng build ngx-form-lib`, `ng test` with headless Chrome.
- [ ] Consider ESLint / Prettier for the workspace.
- [ ] Keep SonarCloud aligned with CI if the README badge is authoritative.

---

## Build and publish

- [ ] `npm run build` — library builds via ng-packagr (`projects/ngx-form-lib`).
- [ ] Confirm root `ng build` default target matches documented workflow (demo app vs library).
- [ ] Publishing: version and `peerDependencies` live in `projects/ngx-form-lib/package.json` — verify release process.

---

## Documentation and consumers

- [ ] README vs Angular 18+: add standalone examples (`provideAnimations()`, `importProvidersFrom`) alongside `NgModule`.
- [ ] Align “supported components” with exports and `src/app/form.mock.ts`.
- [ ] Verify Stackblitz / homepage links match current Angular and Material versions.
- [ ] Improve npm package semantics: description, keywords, changelog, API overview (“Create symantics for npm package”).

---

## Product roadmap

### Current focus

- [ ] **Form-level dependencies** — facets for disable, hidden, fill on form dependencies (not only field-level).

### Styles

- [ ] Ship global styles from the library: variables and Material imports.

### Models

- [ ] Replace remaining loose string types with enums where appropriate.
- [ ] `field-type.enum.ts`: add `File`, `Hidden`, `Image` and wire through rendering.
- [x] Sort by order in mock — [PR #7 / 4311ab8](https://github.com/Nav2510/ngx-form-lib/pull/7/commits/4311ab8007f6f043e79d6f4b09ed7ab92ff3a9aa)
- [x] Facets for meta (disable, hidden, populate, eventTrigger) via dependencies — [dff68ef](https://github.com/Nav2510/ngx-form-lib/commit/dff68ef223c8b48f256cee35d7424d356e817cdc)

### Validators

- [ ] All validators with clear error messages.
- [ ] `Validation` dependency: enable validation when a dependent field has the required value.

### Components and UX

- [x] Dynamic field components instead of hardcoded form map — [PR #7 / 61b711e](https://github.com/Nav2510/ngx-form-lib/pull/7/commits/61b711e70cee4b3659a68a066963c4012fc5b67)
- [x] Dynamic `mat-button` / button model cleanup — [61b711e](https://github.com/Nav2510/ngx-form-lib/commit/61b711e70cee4b3659a68a066963c4012fc5b67)
- [ ] `@shared/enum/test` path convention.
- [ ] Fill options and hints on field properties.
- [ ] ARIA labels across controls.
- [ ] Select trigger for multiple selection and custom display value (`dropdown.component.html`).
- [ ] Form appearance overridable per field.
- [ ] Audit all `TODO` comments in source.
- [ ] Optional: fewer template wrappers / `createComponent` in container (post–Angular 15 patterns).
- [ ] Hidden field type as layout spacer.
- [ ] Extract `mat-error` to a shared component with dynamic messages (`textarea.component.html`).

### Add-ons

- [ ] Nested forms.
- [ ] Onboarding helper for the library.

### Fixes

- [ ] Icon and FAB button width.
- [ ] Dropdown component issues.

---

## Inline code TODOs (templates)

- [ ] `projects/ngx-form-lib/src/lib/features/textarea/textarea.component.html` — `mat-error` component / dynamic errors.
- [ ] `projects/ngx-form-lib/src/lib/features/dropdown/dropdown.component.html` — select trigger for multiple and custom value.

---

## Material 3 — what changed (reference)

Theme: prebuilt `indigo-pink.css` in `angular.json` (workspace build and tests); replaces legacy `deeppurple-amber`.

**Button variants** (`button-attribute.model.ts`): `mat-fill`, `mat-outline`, `mat-text`, `mat-elevated`, `mat-tonal` (legacy variants still accepted).

**Demo defaults** (`form.mock.ts`): e.g. `mat-fill` instead of `mat-flat-button`, appearance `fill` where applicable.

**Styling targets**: form container ~12px radius; fields ~8px; buttons ~20px; checkboxes ~4px; M3 typography (e.g. buttons font-weight 500, no uppercase); M3 elevation and CSS variables where used.

**Consumer snippets:**

```typescript
new Button({
  attribute: 'mat-fill',
  field: new Field<string>({ /* ... */ }),
});

new ParentConfig({
  appearance: 'fill',
  color: 'primary',
});
```

**Verify after theme changes:** `npm run build`, `npm start`, visual pass on fields and buttons, full interaction smoke test.

**Notes:** Slightly larger bundle with MDC/M3; migration aimed to stay non-breaking for existing configs.

### Material 3 — follow-ups

- [ ] Dark theme (Material 3).
- [ ] Document custom Material 3 theming for consumers.
- [ ] Motion / animation polish.
- [ ] Extra accessibility pass beyond current state.

---

## Testing

- [ ] `ng test` for the library (specs under `projects/ngx-form-lib`).
- [ ] Optional: coverage thresholds and CI gate (`karma-coverage` present).
- [ ] Optional: e2e or visual tests for the demo `workspace` app.
