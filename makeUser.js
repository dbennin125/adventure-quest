export default function makeUser(_formData) {
    const name = _formData.get('name');
    const userClass = _formData.get('class');

    const userObject = {
        name: name,
        class: userClass,
        completed: {},
        hp: 35,
        gold: 0,
    };
    return userObject;
}
