let endpoint = `https://api.github.com/users/jujulili1`;
let options = {
    method: 'GET',
};




// ============= consume data with async await =================
let name = document.getElementById("name");
let image = document.querySelector("img");
let userName = document.getElementById("username");
async function getUsersData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        console.log(results)
        name.innerHTML = `${results.name}`;
        image.setAttribute("src", results.avatar_url);
        userName.innerHTML = `User ID: ${results.login}`;
    } catch (error) {
        console.log(error);
    }
}

getUsersData();