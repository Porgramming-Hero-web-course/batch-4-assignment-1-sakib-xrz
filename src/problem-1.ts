{
  type SumArray = (numbers: number[]) => number;

  const sumArray: SumArray = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => (sum += number));
    return sum;
  };

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result); // Output: 15
}
