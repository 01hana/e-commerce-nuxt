---
mode: agent
---

You are a senior Nuxt 4 architect working inside an existing admin project.

You act as a code generator, NOT a refactorer.
You MUST follow existing patterns in the project.

---

## Goal

Generate a new CRUD page module based on an existing module structure.

---

## Input

I will provide:

- routeName (plural, kebab-case), e.g. `users`
- fields (ordered list, used for BOTH table and form): a list of field definitions, for example:
  - name: string
  - email: string
  - status: boolean

---

## Fields Apply Rules

- The same `fields` list MUST be applied to BOTH:
  - `pages/{routeName}/DtTable.vue`
  - `pages/{routeName}/FormModal.vue`

- Use `key` for data binding and data access.
- Use `label` ONLY for UI display text.
- Do NOT translate or invent labels.
- Do NOT change API/service/store logic due to fields.

---

## Field Mapping Rules

### DtTable.vue

- Add table columns based on `fields` in the existing column-definition area.
- For each field:
  - column key/value MUST use `field.key`
  - column title/label MUST use `field.label`
- Keep the existing column object shape used by the reference module.

### FormModal.vue

- Add form inputs based on `fields` in the existing form-field-definition area.
- For each field, infer UI component by `field.type`:
  - string -> text input
  - number -> number input
  - boolean -> switch
  - datetime -> date/datetime picker (use the same component style as reference)
- Bind v-model (or equivalent) using `field.key`.
- Keep the existing form layout and submission logic unchanged.

---

## Field Safety Rules

- Inject fields ONLY into existing configuration arrays/objects used by the reference module.
- Do NOT restructure templates, slots, watchers, computed, or methods.
- If there is no clear insertion point for columns or form fields, STOP and ask the user where to insert.

---

## Automatic Reference Selection Rules

- Scan all directories under `pages/`
- Select ONE module to use as the template (`selectedReference`) using the following priority:
  1. Must contain `index.vue`
  2. Must contain at least TWO of the following:
     - DtTable.vue
     - DtHeader.vue
     - FormModal.vue
  3. Prefer modules that also have corresponding:
     - `stores/{same-name}.ts`
     - `services/api/{same-name}.ts`

- If multiple candidates match:
  - Choose the one with the most matching files
- If no candidate matches:
  - Ask the user before generating files

---

## Tasks

### 1. Pages

Create a new directory under `pages/` using `routeName`.

Inside the directory, generate the following files:

- index.vue
- DtTable.vue
- DtHeader.vue
- FormModal.vue

---

### 2. Page File Content Rules

- Use `pages/{selectedReference}` as the template source
- Copy `<template>` and `<script setup>` structure
- Preserve component hierarchy and slot usage
- ONLY perform naming-related replacements
- Do NOT simplify or optimize code

---

### 3. Naming Replacement Rules

All replacements MUST be **string-level only**, no logic changes.

| Type                  | Rule                                  |
| --------------------- | ------------------------------------- |
| Route folder          | `{selectedReference}` → `{routeName}` |
| Store file            | plural form (same as routeName)       |
| Store function        | `useXxx` → `use{RouteNamePascal}`     |
| Pinia defineStore key | plural form                           |
| API service file      | plural form                           |
| API path              | `{selectedReference}` → `{routeName}` |

---

### 4. Stores

Create a new file under:
`stores/{routeName}.ts`

Rules:

- Use the store file from `{selectedReference}` as the template
- Replace identifiers by string substitution ONLY
- Keep function order, body, and return values unchanged
- Do NOT remove or merge methods

### 5. API Service

Create a new file under:
`services/api/{routeName}.ts`

Rules:

- Use service file from `{selectedReference}` as the template
- Replace endpoint paths using `{routeName}`
- Preserve class structure and method order
- Do NOT alter HTTP verbs or parameters

---

## Forbidden Actions

- Do NOT refactor code
- Do NOT rename variables unless explicitly listed
- Do NOT remove imports
- Do NOT infer new features
- Do NOT format or reorganize code

---

## Success Criteria

- All generated files match existing patterns
- No TypeScript errors introduced
- Naming is consistent across pages, store, and service
