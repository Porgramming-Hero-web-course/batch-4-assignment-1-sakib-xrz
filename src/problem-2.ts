{
  type RemoveDuplicates = (numbers: number[]) => number[];

  const removeDuplicates: RemoveDuplicates = (numbers) => {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result); // Output: [1, 2, 3, 4, 5]
}
