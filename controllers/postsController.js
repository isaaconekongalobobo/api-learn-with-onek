require ('dotenv').config ()

const GetAllPosts = async (req, res) => {
    fetch (process.env.GET_ALL_POSTS)
    .then (async (response) => {
        const allPosts = await response.json()
        if (allPosts.length < 0) {
            console.log('Aucun post');
        } else {
            res.status (200).json (allPosts)
        }
        res.status (200).json (allPosts)
    })
}

const GetDelimitedPosts = async (req, res) => {

}

module.exports = {
    GetAllPosts
}