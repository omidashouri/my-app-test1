/*
import {random} from "../helpers/random";
import {lang} from "../helpers/language";
*/

import {random} from "../helpers/random";
import {lang} from "../helpers/language";

const Home = () => {
    return (
        <div>
            {lang('home')} {random(0, 10)}
        </div>
    )
}
export default Home;