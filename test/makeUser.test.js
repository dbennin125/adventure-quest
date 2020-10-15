import makeUser from '../makeUser.js';
// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('testing makeUser function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    
    formData.set('name', 'dani');
    formData.set('class', 'ranger');

    const expected = {
        name: 'dani',
        class: 'ranger',
        completed: {},
        hp: 35,
        gold: 0,
    }; 
    //Act 
    // Call the function you're testing and set the result to a const
    const userObject = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, userObject);
});
