/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx , css} from '@emotion/react';
import HeroNav from './HeroNav';
import Output from '../Output/Output';
import MoviesPagination from '../Movies/MoviesPagination';



const Hero = () => {
        return (
            <section css={styles} className="hero">
                    <HeroNav />
                    <Output />
            </section>

        )
                
};

const styles = css`
   width:100%;
   min-height:100vh;
   background:#15192e;
`;


export default Hero; 