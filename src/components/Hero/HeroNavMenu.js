/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx , css} from '@emotion/react';
import {useContext} from 'react';
import { MovieContext } from '../../context/MovieContext';
import HeroNavLink from "./HeroNavLink";

const HeroNavMenu = () => {
    const { hiddenMenu } = useContext(MovieContext);
        return (
                <div css={styles} className={(hiddenMenu ? "hidden": "") + " heroNavMenu"}>
                   <HeroNavLink btnText="Popular" />
                   <HeroNavLink btnText="All Movies" />
                </div>
        );
};

const styles = css`
      padding-left: 80px;
      @media (max-width: 860px) {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 1;
          border : 1px solid #606687;
          min-height: 100vh;
          background: rgba(0 , 0 , 0 , 0.8);
          padding-left: 0;
          padding: 50px 50px;
          width: 100%;
          max-width: 340px;
          display:flex;
          flex-direction:column;
          align-item:flex-start;
          transition: all 800ms ease-in-out;
          z-index: 1000;
          &.hidden {
              left: -600px;
              opacity: 0;

          }

      }
   
`;


export default HeroNavMenu; 