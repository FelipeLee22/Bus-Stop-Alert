//teste
import styles from '../Styles/Descritions.module.css';
import arCond from '../Assets/ar_icon.svg';
import wifi from '../Assets/wifi_icon.svg';
import acess from '../Assets/acess_icon.svg';
import stand from '../Assets/stand_icon.svg';
import sit from '../Assets/sit_icon.svg';
import React from 'react';
import { BusDisplay } from './BusDisplay';

interface DirectionsProps{
    icon:string;
    direction:string;
}
export function Descritions(props: DirectionsProps){

    return(

        <div className={styles.descritionContainer}>
                    <div>
                        <div className={styles.icon}>
                            {props.icon.length > 4?(
                                <img src={props.icon} className={styles.iconImgPrimary}/>
                                
                            ):(
                                <div className={styles.plataform} > {props.icon}</div>
                            )}
                            
                            
                        </div>
                    </div>
                    
                    {props.icon.length > 4?(

                        //Tru => onBoard   False => offBoard
                        props.direction?(
                            <div className={styles.directions}>
                             {props.direction === "0"?(
                                 <>
                                 <p> Caminhe até o ponto <span> 1520 </span></p> 
                                 <p>Av. Luciano Satler Gurgel</p> 
                                 </>
                             ):(
                                <>
                                <p> Primeiro embarque</p> 
                                <p> Aguarde por algumas dessas opções na plataforma indicada</p> 
                                </>
                             )}   
                             
                           </div>
                        ):(

                            <div className={styles.directions}>

                             <p>Desembarque</p>
                             <strong> Terminal de Carapina </strong> 
                              
                           </div>
                        )
                        

                    ):(
                        <div className={styles.busIcons}>
                        <BusDisplay flag="green" number="55S1" isFirst={true} />
                        <div className={styles.busTitle}> Term. de Carapina </div>
                        {/**<div>agora</div>*/}
                        <div><img src={arCond} className={styles.iconImgSecondary}/></div>
                        <div><img src={wifi} className={styles.iconImgSecondary} /> </div>
                        <div><img src={acess} className={styles.iconImgSecondary} /></div>
                        <div><img src={stand} className={styles.iconImgSecondary} /></div>
                        <div><img src={sit} className={styles.iconImgSecondary} /></div>
                        </div>

                    )}


                    
            
        </div>
    );
}