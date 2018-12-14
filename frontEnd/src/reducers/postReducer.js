const initState = {
    posts: [
        {id: 1, title: 'Squirtle Laid an Egg', body: 'Lorem ipsum'},
        {id: 2, title: 'Charmander Laid an Egg', body: 'Lorem ipsum'},
        {id: 3, title: 'a Helix Fossil was Found', body: 'Lorem ipsum'}
    ]
};

const postReducer = (state = initState, action) => {
   if(action.type === 'DELETE_POST') {
       let newPosts = state.posts.filter(post=> {
           return action.id !== post.id
       });
       return {
           ...state,
           posts: newPosts
       }
   }
    return state;
};

export default postReducer;