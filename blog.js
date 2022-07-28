var currentPosts = [
    // {
    //     title: 'First Day',
    //     date: '07/26/2022',
    //     summary: 'Summary 1'
    // },
    // {
    //     title: 'Second Day',
    //     date: '07/27/2022',
    //     summary: 'Summary 2'
    // }
];

var editID = 0;

let addPostButton = document.getElementById('add-button');
let addDialog = document.getElementById('add-dialog');

addPostButton.addEventListener('click', ()=> {
    addDialog.showModal();
    //storePosts(posts);
    //renderPosts();
});

document.getElementById('cancel-button').addEventListener('click', ()=>{
    addDialog.close();
});

let editDialog = document.getElementById('edit-dialog');

document.getElementById('cancel-edit').addEventListener('click', ()=> {
    editDialog.close();
});

editDialog.addEventListener('submit', (event) =>{
    updatePost();
    renderPosts();
});

function addPost() {
    let newPost = {
        title: document.getElementById("post-title").value,
        date: document.getElementById("post-date").value,
        summary: document.getElementById("post-summary").value
    }
    currentPosts.push(newPost);
};

addDialog.addEventListener('submit', (event)=> {
    addPost();
    storePosts(JSON.stringify(currentPosts));
    renderPosts();
});

function deletePost(postID) {
    let currentPost = JSON.parse(localStorage.getItem(`allPosts`))[postID];
    console.log(`deleting ${currentPost.title}`);
    if (currentPost == undefined) {
        // check if post even exists
        alert(`Error, post doesn't exist!`);
    } else {
        // .splice(start, deleteCount) start = postID, deleteCount = delete one post
        currentPosts.splice(postID,1);
        storePosts(JSON.stringify(currentPosts));
    }
    renderPosts();
};

function editPost(postID) {
    editID = postID;
    console.log(`editing ${currentPosts[postID].title}`);
    document.getElementById('edit-dialog').showModal();
    storePosts(JSON.stringify(currentPosts));
};

function updatePost() {
    let newPost = {
        title: document.getElementById("edit-title").value,
        date: document.getElementById("edit-date").value,
        summary: document.getElementById("edit-summary").value
    }
    console.log(JSON.stringify(newPost));
    currentPosts[editID] = newPost;
    storePosts(JSON.stringify(currentPosts));
}

function renderPosts() {
    let postLength = localStorage.getItem("numPosts");
    let markup = ``;
    if(postLength == 0) {
        // do nothing;
    } else {
        markup += `<ul>`;
        for(let i = 0; i < postLength; i++) {
            let currentPost = JSON.parse(localStorage.getItem(`allPosts`))[i];
            markup += 
            `
                <li>
                    <h2>${currentPost.title}</h2>
                    <div class="buttons-div">
                        <button onclick="editPost(${i})" class="edit-button-class"><img src="assets/images/icons8-edit-30.png" alt="Edit Button"></button>
                        <button onclick="deletePost(${i})" class="delete-button-class"><img src="assets/images/icons8-empty-trash-30.png" alt="Trash Button"></button>
                    </div>
                    <h3>${currentPost.date}</h3>
                    <p>${currentPost.summary}</p>
                </li>
            `
        }
        markup += `</ul>`;
    }
    document.getElementById("posts-list").innerHTML = markup;
};

function storePosts(posts) {
    // dont stringify here
    localStorage.setItem('allPosts', posts);
    localStorage.setItem(`numPosts`, JSON.parse(posts).length);
}

document.addEventListener("DOMContentLoaded", () => {
    currentPosts = JSON.parse(localStorage.getItem('allPosts'));
    //storePosts(JSON.stringify(currentPosts));
    renderPosts();
});