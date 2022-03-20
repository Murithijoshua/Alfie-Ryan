import * as React from 'react'
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import {HorizontalHeading} from './styles'
// eslint-disable-next-line no-unused-vars
interface props{
    title:string;
    t:any
}

const ColoredLine = ({title,t}:props)=>{
    return(
        <Slide direction="left">
       <HorizontalHeading>
           <h2>{t(title)}</h2>
       </HorizontalHeading>

    </Slide>
    );
};
export default withTranslation()(ColoredLine);
