import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Flexible from '../../Components/Global/Flexible/Flexible';

const Post : React.FC = () => {
    const {slug} = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(`https://dev.getqte.se/ysds/wp-json/better-rest-endpoints/v1/post/${slug}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            setData(resp);
            setLoading(false);
        })
    }, [slug])

    if(loading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <Flexible flexible={data.acf.flexible} />
    )
}
export default Post;