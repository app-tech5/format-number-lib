# format-number-lib

`format-number-lib` is a lightweight JavaScript library for formatting numbers with thousands separators. It’s simple, efficient, and solves a common problem in formatting numbers for better readability.

## Installation

Install the library via npm:

```bash
npm install format-number-lib
```

## Usage

Import the library into your project and use it to format numbers.

### CommonJS Example:

```javascript
const formatNumber = require('format-number-lib');

console.log(formatNumber(1234567)); // "1,234,567"
```

### ES Modules Example:

```javascript
import formatNumber from 'format-number-lib';

console.log(formatNumber(9876543210)); // "9,876,543,210"
```

## API

### `formatNumber(num)`

Formats a number by adding thousands separators.

- **Parameters:**
  - `num` (number): The number to format.
- **Returns:**
  - (string): The formatted number with thousands separators.

### Example:

```javascript
formatNumber(1234567); // "1,234,567"
formatNumber(1000000); // "1,000,000"
```

## Error Handling

If the input is not a valid number, the function throws an error:

```javascript
formatNumber("hello"); // Error: Input must be a number.
```

## Features

- Lightweight and fast.
- Handles large numbers effortlessly.
- Throws errors for invalid inputs.

## How it Works

The function uses a regular expression to insert commas at every thousand, starting from the rightmost digit of the number:

```javascript
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```

<!-- ## Contributing

Contributions are welcome! If you’d like to improve this library or report an issue, feel free to open a GitHub issue or submit a pull request. Visit the [GitHub repository](https://github.com/your-username/format-number-lib) for more details. -->

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Author

Developed by **djagat**. If you find this library helpful, don’t forget to give it a ⭐ on GitHub!