// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { displayFamilies } from '../families/families.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('family', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="family"><h3>the Garcia family</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayFamilies();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
