import "./styles.css";
import { useEffect, useState } from "react";
import api from "../../ServicesGit/api";




function Github(){
const [github,setGithub] = useState([]);
const [respostorio,setRepositorio] = useState([]);
const [error,setError] = useState("");



    async function gitApi(){
        try {
            const response = await api.get();
         
            console.log(response.data);
            setGithub(response.data);
        } catch (error) {
            setError("Github temporariamente fora do ar");
        }
    }
    async function getRepositorio(){
        try {
            const response = await api.get("/repos");
            
            console.log(response.data);
            setRepositorio(response.data)
        } catch (error) {
            setError("Github temporariamente fora do ar");
        }
    }
    useEffect(()=>{
        gitApi();
        getRepositorio();
    },[]);
        return(
        <div className="container-github">
            <h1>Github</h1>
            <div className="container-itens">
            <img className="avatar" src={github.avatar_url}alt="avatar"></img>
            <h2>{github.name}</h2>
            <strong>{github.login}</strong>
            <p>{github.bio}</p>
            </div>
            <div className="container-title" >
            {
            respostorio.slice(0,4).map((respo)=>(
            <div className="listProjects" key={respo.id}>
            <a href={respo.html_url} target='_blank' rel="noreferrer">
            <h3>{respo.name}</h3>
            </a>
            <span>{respo.description}</span>
            </div>
             ))
            }
         </div>
           <p>{error}</p>
        </div>
    )
}
export default Github;