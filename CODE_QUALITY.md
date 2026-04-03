# Code quality, improvements, and fixes

This document maps **ngx-form-lib** to practices used by mature product teams (Angular team / Google style, TypeScript strictness, automated quality gates, and common open-source library expectations). It is a living backlog, not a verdict: the project already enables **strict** TypeScript and **strict templates** in `tsconfig.json`, which is aligned with those standards.

---

## Reference bar (what “leading practice” usually means)


| Source                                                                                                | Takeaway for this repo                                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Angular style guide](https://angular.dev/style-guide)**                                            | Strong typing for forms, avoid unnecessary change detection, lifecycle interfaces implemented explicitly, libraries expose a small stable public API. |
| **TypeScript / strict typing** (as promoted in Google’s TS guidance and strict corporate codebases)   | Prefer `unknown` over `any`, typed `FormGroup`/`FormControl`, narrow public `@Input()` / `@Output()` types.                                           |
| **Testing culture** (e.g. Google’s emphasis on fast, meaningful unit tests; Microsoft’s “shift left”) | Specs that assert behavior, not only `should create`; CI runs tests headlessly on every change.                                                       |
| **Supply chain & automation** (GitHub, GitLab, Google Open Source)                                    | Lockfile discipline, dependency review, CI for build + test + lint.                                                                                   |
| **Accessibility** (WCAG, Material a11y docs)                                                          | Labels, errors, and keyboard paths for every control pattern you ship.                                                                                |


---

## Critical fixes (correctness / architecture)

These items can cause wrong behavior, leaks, or broken multi-instance use.

1. **Shared mutable state for `hidden` fields**
  `DependenciesService` uses `providedIn: 'root'` and a `BehaviorSubject` for hidden field map. **Every `<ngx-form-lib>` on the same page shares one subject**, so two forms can overwrite each other’s visibility state.  
   **Direction:** Provide `DependenciesFormService` (or rename) **per form instance** — e.g. `providers: [DependenciesService]` on `FormComponent` or a parent wrapper — matching Angular’s pattern for instance-scoped state ([Angular DI](https://angular.dev/guide/di)).
2. **Subscriptions without teardown in `BaseComponent`**
  `group.valueChanges.subscribe(...)` is not added to `this.subscription` and is not tied to `destroy$`. The `@AutoUnsubscribe()` decorator only walks **own properties** and calls `.unsubscribe()` on values that expose `subscribe`; it does **not** unsubscribe arbitrary nested subscriptions, and Observables are not unsubscribed that way.  
   **Direction:** Use `takeUntilDestroyed()` (Angular 16+), an explicit `Subscription#add()`, or `DestroyRef` — consistent with Angular’s recommended cleanup ([RxJS interop](https://angular.dev/ecosystem/rxjs-interop)).
3. `**ngAfterContentChecked` + manual `detectChanges`** in `FormComponent`
  Runs extra change detection every CD cycle and is a common source of performance cost and hard-to-reason updates. Angular guidance is to rely on **OnPush**, **signals**, or **explicit `markForCheck`** only where needed.  
   **Direction:** Prefer typed form updates, `async` pipe for observables, or a single targeted `markForCheck` after dependency updates.
4. `**FormsService.createValidations` — control flow bug**
  The `default` branch **returns `null` from inside the loop**, aborting the whole validator list on the first unknown `ValidationTypeEnum` instead of skipping or logging.  
   **Direction:** `break` or collect unknowns; never `return null` mid-loop for a single bad entry.
5. `**AutoUnsubscribe` implementation**
  Calls `ngDestroy.apply()` without `this` binding and without guarding if `ngOnDestroy` was undefined — risk of runtime errors.  
   **Direction:** Prefer standard `takeUntilDestroyed` / explicit teardown and **delete** the decorator, or fix with `ngOnDestroy?.call(this)` and proper typing (avoid `constructor: any`).
6. **Lifecycle typing**
  `FormComponent` uses `ngAfterContentChecked` but does not implement `AfterContentChecked`.  
   **Direction:** Implement the interface (and reconsider whether the hook is needed at all).

---

## Areas of improvement (quality and maintainability)

### Typing and public API

- Replace `**UntypedFormGroup` / `UntypedFormControl`** with **typed** `FormGroup`, `FormControl`, and inferred form models where possible — this is the direction of the [Angular typed forms](https://angular.dev/guide/forms/typed-forms) story and reduces consumer bugs.
- Replace `**any`** on `@Output() valueChanges`, `Observable<any>`, `formValue: any`, and model `value: any` with **generics** or `**Record<string, unknown>`** / dedicated interfaces (`grep` shows multiple `any` usages in `projects/ngx-form-lib/src`).
- Narrow `**@Input() config(configObj: Config | object)**` — accepting `object` forces casts and hides invalid configs at compile time. Prefer `Config` only, or a branded type / runtime schema validation (e.g. for JSON-driven forms).

### Consistency of domain model

- Dependency `type` is already a string union on `Dependency`; align **all** switches and templates with **enums** or `const` objects to avoid drift between template strings and TypeScript.

### Linting and formatting

- There is **no ESLint** config in the repo. Most teams at scale (and Angular’s own docs) use **ESLint** + `**@angular-eslint`** + **Prettier** for consistent reviews and fewer nits.  
**Direction:** `ng add @angular-eslint/schematics` and enable recommended rules; optionally enable `**@typescript-eslint/no-explicit-any`** as warning, then tighten over time.

### Change detection strategy

- Evaluate `**ChangeDetectionStrategy.OnPush**` on field components and the form shell to reduce work per cycle (Angular performance best practice).

### Security and JSON-driven forms

- If consumers load **arbitrary JSON** into `Config`, treat it as **untrusted input**: document risks (e.g. script in labels if ever bound unsafely), prefer Angular’s sanitization defaults, and avoid `innerHTML` from config. Align with **OWASP** guidance on injection and XSS for rich UIs.

---

## Testing and CI


| Current observation                                                   | Improvement                                                                                                                                          |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Many specs only assert `**should create`**.                           | Add tests for `**FormsService.initForm**`, validator mapping, **dependency visibility/disable**, and at least one integration test per control type. |
| Karma defaults to `**browsers: ['Chrome']`**, `**singleRun: false**`. | For CI: **ChromeHeadless**, `**singleRun: true`**, and a `**test:ci**` npm script (pattern used across Angular OSS and corporate pipelines).         |
| No **GitHub Actions** (or similar) in repo.                           | Add workflow: `npm ci`, `ng build ngx-form-lib`, `ng test ngx-form-lib --no-watch --browsers=ChromeHeadless`.                                        |
| Coverage reporter exists but no **threshold**.                        | Optional: fail build if line coverage on `projects/ngx-form-lib` drops below an agreed floor.                                                        |


---

## Accessibility (a11y)

- Inputs use `**mat-label`** and `**[id]**` in places (good start). Extend systematically: `**aria-describedby**` for hints/errors, `**aria-invalid**`, listbox/combobox patterns for **dropdown**, and keyboard focus order — consistent with **[Angular Material accessibility](https://material.angular.io/guide/accessibility)** and WCAG-oriented reviews.

---

## Documentation and packaging

- Root vs `**projects/ngx-form-lib/package.json`**: keep **peer dependencies** and **version** in sync with root devDependencies when cutting releases.
- README examples still center **NgModule**; add **standalone** bootstrap snippets for Angular 18+ consumers (align with current Angular docs).

---

## How to use this file

- Track **Critical fixes** first — they affect correctness and multi-form scenarios.
- Pull **Improvements** into issues or into `[CHECKLIST.md](./CHECKLIST.md)` as actionable checkboxes.
- When adopting a rule (e.g. ESLint), link the PR in a short note under this doc’s changelog or in the PR description.

---

## Changelog

- **2026-04-02** — Initial version from repository review (`projects/ngx-form-lib`, workspace app, Karma, tsconfig).

---

## Prompt to refresh this document

Copy everything inside the block below into a new chat (or agent session) when you want this file updated to match the current repo. Adjust the date if you keep a changelog entry.

```text
You are updating CODE_QUALITY.md in the ngx-form-lib repository at the project root.

Tasks:
1. Re-scan the codebase (library under projects/ngx-form-lib, demo app under src/, configs: angular.json, tsconfig, Karma, package.json, CI workflows if any).
2. Revise CODE_QUALITY.md in place: keep the same major sections (Reference bar, Critical fixes, Areas of improvement, Testing and CI, Accessibility, Documentation and packaging, How to use, Changelog, and this Prompt section).
3. Remove or mark as done any items that are fully fixed; add newly discovered issues with the same level of specificity (file/service names, behavior).
4. Refresh the Reference bar only if links or framing need to stay current.
5. Append a new bullet under Changelog with today’s date and a one-line summary of what changed.

Do not remove the “Prompt to refresh this document” section; update it if the refresh workflow changes.

Output: apply edits directly to CODE_QUALITY.md (no duplicate file).
```

