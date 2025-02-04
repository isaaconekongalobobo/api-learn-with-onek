const GetAllPosts = async (req, res) => {
    fetch ('http://localhost:4000/posts')
    .then (async (response) => {
        const allPosts = await response.json()
        console.log(allPosts);
        
        res.status (200).json (allPosts)
    })
}

module.exports = {
    GetAllPosts
}