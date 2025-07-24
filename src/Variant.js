 export const fadeIn = (direction,delay)=>{
    return{
        hidden:{
            y:direction=== 'up'?30:direction==='down'?-40:0,
            x:direction=== 'left'?80:direction==='right'?-80:0,
            opacity:0,
            transition: {
                y: delay,
                x: delay,
                opacity: delay
                }
            

        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1,
                delay:0.15,
                ease:[0.155,0.15,0.25,0.25]
            }
        }
    }
}

 export const fadeUp = (direction,delay)=>{

    return{
        hidden:{
            y:20,
            opacity:0,
            transition: {
                y: delay,
                opacity: delay
                }
                },
                show:{
                    y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:0.7,
                delay:0.15,
                ease:[0.155,0.15,0.25,0.25],
                
                }
            }
        }
}


 export const fadeOn = (direction,delay)=>{

    return{
        hidden:{
            y:6,
            opacity:0,
            transition: {
                y: delay,
                opacity: delay
                }
                },
                show:{
                    y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:0.7,
                delay:0.25,
                ease:[0.155,0.15,0.25,0.25],
                
                }
            }
        }
}