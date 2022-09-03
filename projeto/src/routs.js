import {Route,Routes} from 'react-router-dom'
import Main from './Pages'

function MainRouts(){
    return(
        <Routes>
           
            <Route path='/' element={<Main/>}></Route>
        </Routes>
    )
}

export default MainRouts