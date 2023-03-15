async function fetchInfo() {
    const inputField = document.getElementById('inputSearch');
    const objectToFetch = inputField.value;
    // const jsonData = await fetch('../data/'+objectToFetch+'.json')
    const jsonData = await fetch('../data/test.json')
    const objectData = await jsonData.json()
    objectData.then(x => console.log(x))}