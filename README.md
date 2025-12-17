# ts-laonumspeller

[![npm version](https://img.shields.io/npm/v/ts-laonumspeller.svg)](https://www.npmjs.com/package/ts-laonumspeller)
[![License](https://img.shields.io/badge/license-Apache%202.0-red)](LICENSE)

**ແປງຕົວເລກເປັນພາສາລາວ**  
Convert numbers to Lao words.

A **TypeScript / Node.js** port of the original **`go-laonumspeller`**.

---

## ✨ Features

- ✅ Convert integers and decimals to Lao words  
- ✅ Support negative numbers (**ລົບ**)  
- ✅ Support decimals (**ຈຸດ**)  
- ✅ Correct Lao grammar
  - Uses **ຊາວ** for 20
  - Uses **ເອັດ** for ones place (11, 21, 31…)
- ✅ Fully written in **TypeScript** (typed & IDE friendly)
- ✅ Usable as **CLI** or **Library**

---

## 📦 Installation

### Global (CLI)

```bash
npm install -g ts-laonumspeller
```

### Project dependency

```bash
npm install ts-laonumspeller
```

---

## 🖥️ CLI Usage

```bash
ts-laonumspeller 123
# Output: ໜຶ່ງຮ້ອຍຊາວສາມ
```

```bash
ts-laonumspeller 21
# Output: ຊາວເອັດ
```

```bash
ts-laonumspeller -50.5
# Output: ລົບຫ້າສິບຈຸດຫ້າ
```

---

## 📚 Library Usage

### TypeScript / JavaScript

```ts
import { LaoNumSpeller } from 'ts-laonumspeller';

const result = LaoNumSpeller.numberToWords(123.45);
console.log(result);
// Output: ໜຶ່ງຮ້ອຍຊາວສາມຈຸດສີ່ຫ້າ
```

---

## 🧠 API

### `numberToWords(value: number | string): string`

Convert a number (integer, decimal, or negative) into Lao words.

```ts
LaoNumSpeller.numberToWords(-1001);
// ລົບໜຶ່ງພັນເອັດ
```

---

## 📄 License

Licensed under the **Apache License 2.0**.
See the [LICENSE](LICENSE) file for details.

---

## 🙏 References

- npm package: https://www.npmjs.com/package/ts-laonumspeller
- Inspired by: **go-laonumspeller**

---

## LICENSE (Apache 2.0)

```text
Copyright 2025 xarhang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

