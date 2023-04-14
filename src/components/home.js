import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Home() {
    // const navigate = useNavigate();
    const [check, setCheck] = useState(true);
    const [ans, setAns] = useState('');
    const [val, setVal] = useState('');
    const [loading, setLoading]= useState(false);
    const [element, setElement] = useState({
        name1: "",
        name2: ""
    });

    function handleChange(event){
        const { name, value } = event.target;
        setElement(prevValue =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    function flames(c){
        var charcount=0,i=0,j=0;
        var str = "flames";
        // console.log(c);
        while(charcount<5){
            i=1;
            // console.log(j);
            while(true){
                if(i<c){
                    if(str[j]!=='*'){
                        i++;
                        j = (j+1)%6;
                    }
                    else{
                        j = (j+1)%6;
                    }
                }
                else{
                    while(str[j]==='*'){
                        j = (j+1)%6;
                    }
                    console.log(str[j]);
                    str=setCharAt(str,j,'*');
                    j = (j+1)%6;
                    break;
                }

            }
            charcount++;
        }
        for(i=0;i<str.length;i++){
            if(str[i]!=='*'){
                switch (str[i]) {
                    case 'f':
                        setVal("Friends");
                        break;
                    case 'l':
                        setVal("Lovers");
                        break;
                    case 'a':
                        setVal("Affection");
                    break;
                    case 'm':
                        setVal("Marriage");
                    break;
                    case 'e':
                        setVal("Enemys");
                    break;
                    case 's':
                        setVal("Siblings");
                    break;
                }
                setAns(str[i]);
                
                return console.log(str[i]);
            }
        }
    }
    function handlebtn(){
        if(check){
            setCheck(false);
        }
        else{
            setCheck(true);
        }
        setElement({
            name1: "",
            name2: ""
        });
    }
    const handleClick = ()=>{
        // navigate('/result',{state:{Name1:element.name1, Name2:element.name2}});
        
        if(check){
            setCheck(false);
        }
        else{
            setCheck(true);
        }
        var Nameb = element.name1.toLowerCase();
        Nameb = Nameb.replace(/\s+/g, '');
        var Nameg = element.name2.toLowerCase();
        Nameg = Nameg.replace(/\s+/g, '');
        console.log(Nameb);
        console.log(Nameg);
        var i=0,j=0,flag=0,count=0;
        for(i=0;i<Nameb.length;i++){
            flag=0;
            for(j=0;j<Nameg.length;j++){
                if(Nameb[i]===Nameg[j]){
                    flag=1;
                    Nameg=setCharAt(Nameg,j,'*'); 
                    Nameb=setCharAt(Nameb,i,'*');  break;
                }
            }
            if(flag===0){
                // console.log(Nameb[i]);
                count++;
            }
        }
        for(i=0;i<Nameg.length;i++){
            if(Nameg[i]!=='*'){
                count++;
            }
        }
        console.log(Nameb);
        console.log(Nameg);
        console.log(count);
        flames(count);
    }
    
        if(check){
            return(
            <div className='container'>
                <div className="form-inline">
                    <h2>Find the Relation with Your Mate</h2>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name1</span>
                        <input type="text" name="name1" value={element.name1} onChange={handleChange} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name2</span>
                        <input type="text" name="name2" value={element.name2} onChange={handleChange} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    
                </div>
                <button disabled={(element.name1===""||element.name2==="") ? true : false} onClick = {()=>{handleClick()}}  className="btn-success btn" >ENTER</button>
                <p>CopyRights @Bhargav Chowdary</p>
            </div>
            );
        }
        else{
            return (
                <div className='container1'>
                    {/* {setTimeout(() => {
                        <Spinner />
                    }, 1000)}  */}
                    <h2>{element.name1} & {element.name2}</h2>
                    <h2>{val}</h2>
                    <img className='img text-center' src={`images/${ans}.png`} alt="Error loading IMG" />
                    <button onClick={handlebtn} className="btn btn1" >BACK</button>
                </div>
            )
        }      
}
