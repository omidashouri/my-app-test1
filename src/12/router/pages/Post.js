import {useParams} from "react-router-dom";

const Post = ()=>{
    const {post_id} = useParams();
    return <h1>Post</h1>
}

export default Post;