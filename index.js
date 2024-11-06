// index.js

/**
 * Sort students by total marks, biology marks, and date of birth
 * @param {Array<Object>} students Array of student objects
 * @returns {Array<Object>} Sorted array of students
 */
function sortStudentsByMarks(students) {
  return [...students].sort((a, b) => {
    // Calculate total marks
    const totalA = a.biology + a.chemistry;
    const totalB = b.biology + b.chemistry;

    // First priority: Total marks (descending)
    if (totalA !== totalB) {
      return totalB - totalA;
    }

    // Second priority: Biology marks (descending)
    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }

    // Third priority: Date of birth (ascending)
    const [dayA, monthA, yearA] = a.dob.split('-').map(Number);
    const [dayB, monthB, yearB] = b.dob.split('-').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateA - dateB;
  });
}

// Test cases
const testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

/**
 * Test helper function to display results in a readable format
 * @param {Array<Object>} students Sorted array of students
 */
function displayResults(students) {
  console.table(
    students.map((student) => ({
      name: student.name,
      totalMarks: student.biology + student.chemistry,
      biology: student.biology,
      chemistry: student.chemistry,
      dob: student.dob,
    }))
  );
  console.log('Order of names:', students.map((s) => s.name).join(', '));
  console.log('\n');
}

// Run test cases
function runTests() {
  console.log('Test Case 1 Results:');
  const sortedTest1 = sortStudentsByMarks(testCase1);
  displayResults(sortedTest1);

  console.log('Test Case 2 Results:');
  const sortedTest2 = sortStudentsByMarks(testCase2);
  displayResults(sortedTest2);

  // Verify results
  const expectedOrder1 = [
    'Virat Kohli',
    'Leo Messi',
    'Cristiano Ronaldo',
    'Rohit Sharma',
    'Viswanathan Anand',
  ];
  const expectedOrder2 = [
    'Leo Messi',
    'Cristiano Ronaldo',
    'Viswanathan Anand',
    'Rohit Sharma',
    'Virat Kohli',
  ];

  console.log('Test Case 1 Verification:');
  console.log('Expected:', expectedOrder1.join(', '));
  console.log('Actual:  ', sortedTest1.map((s) => s.name).join(', '));
  console.log(
    'Test 1 Passed:',
    JSON.stringify(sortedTest1.map((s) => s.name)) ===
      JSON.stringify(expectedOrder1)
  );

  console.log('\nTest Case 2 Verification:');
  console.log('Expected:', expectedOrder2.join(', '));
  console.log('Actual:  ', sortedTest2.map((s) => s.name).join(', '));
  console.log(
    'Test 2 Passed:',
    JSON.stringify(sortedTest2.map((s) => s.name)) ===
      JSON.stringify(expectedOrder2)
  );
}

// Run the tests
runTests();

// Export the function for use in other files
module.exports = sortStudentsByMarks;
