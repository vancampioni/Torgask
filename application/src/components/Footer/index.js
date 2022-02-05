import React from 'react';
import * as S from './styled';

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import copyright from '../../assets/copyright.png'

function Footer() {
    return (
      <S.Container>
        <S.SocialMedias>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="instagram" />
        </S.SocialMedias>
        <S.Copyright>
            <img src={copyright} alt="copyright" />
            <span>2021 - Torgask</span>
        </S.Copyright>
      </S.Container>
    )
  }
  
  export default Footer;
  