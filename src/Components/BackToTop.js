import React,{ useState, useEffect} from 'react'


export default function BackToTop() {

    const [backup, setBackup] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 100){
                setBackup(true);
            }else{
                setBackup(false);
            }
        })
    },[])
    const Backtotop=()=>{
       window.scrollTo({
        top: 0,
        behavior: 'smooth'
       }
       )
    }

  return (
    <div>
       {backup && 
       <button
       onClick={Backtotop}
       className="back-to-top"
       style={{
           position: "fixed",
           bottom:"20px",
           right:"20px",
           backgroundColor:'white',
           outline:'none',
           height: '50px',
           width: '50px',
           border:'none',
           color:'green',
           boxShadow:'2px 2px gray',
           transition:'.5s',
           borderRadius:'50px',
           cursor:'pointer',
           zIndex:'2'
        }} ><i className="fa fa-arrow-up"></i></button>
       } 
    </div>
  )
}
